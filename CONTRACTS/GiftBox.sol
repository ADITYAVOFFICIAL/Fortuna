// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract GiftBox {

    struct Box {
        uint256 amount;
        uint256 creationTime;
        uint256 timeLimit;
        address creator;
        address token;
        mapping(address => bool) claimed;
    }

    event BoxCreated(uint256 id);

    mapping(uint256 => Box) public boxes;
    mapping(address => uint256[]) public history;

    function createBox(uint256 _timeLimitInSeconds, address _token) public payable returns (uint256) {
        require(msg.value > 0, "Amount should be greater than 0");

        uint256 id = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % (10**18);

        boxes[id].amount = msg.value;
        boxes[id].creationTime = block.timestamp;
        boxes[id].timeLimit = _timeLimitInSeconds;
        boxes[id].creator = msg.sender;
        boxes[id].token = _token;

        emit BoxCreated(id);

        history[msg.sender].push(id);
        return id;
    }

    function claim(uint256 _id) public returns (uint256) {
        require(!isInvalidID(_id), "Invalid ID");
        require(getTimeLeft(_id) > 0, "Time limit exceeded [Expired]");
        require(boxes[_id].amount > 0, "No funds available");
        require(!boxes[_id].claimed[msg.sender], "Already claimed Gift Box");

        if (boxes[_id].token != address(0)) {
            require(IERC721(boxes[_id].token).balanceOf(msg.sender) > 0, "Must own the specified token to claim");
        }

        uint256 claimAmount = getRandomAmount(boxes[_id].amount);
        boxes[_id].amount -= claimAmount;
        boxes[_id].claimed[msg.sender] = true;

        payable(msg.sender).transfer(claimAmount);
        return claimAmount;
    }

    function addToEnvelope(uint256 _id) public payable {
        require(!isInvalidID(_id), "Invalid ID");
        require(msg.value > 0, "Amount should be greater than 0");
        require(getTimeLeft(_id) > 0, "Gift Box has expired");

        boxes[_id].amount += msg.value;
    }

    function reclaim(uint256 _id) public {
        require(!isInvalidID(_id), "Invalid ID");
        require(msg.sender == boxes[_id].creator, "Only the creator can reclaim");
        require(block.timestamp > boxes[_id].creationTime + boxes[_id].timeLimit, "Cannot reclaim before time limit");

        uint256 remainingAmount = boxes[_id].amount;
        boxes[_id].amount = 0;
        (bool sent, bytes memory data) = payable(msg.sender).call{value: remainingAmount}("");
        require(sent, "Failed to send Ether");
    }

    function getRandomAmount(uint256 _max) private view returns (uint256) {
        require(_max > 0, "Max must be greater than 0");
        return uint256(keccak256(abi.encodePacked(block.timestamp))) % _max;
    }

    function getTimeLeft(uint256 _id) public view returns (uint256) {
        require(!isInvalidID(_id), "Invalid ID");
        uint256 currentTime = block.timestamp;
        uint256 creationTime = boxes[_id].creationTime;
        uint256 timeLimit = boxes[_id].timeLimit;

        if (currentTime > creationTime + timeLimit) {
            return 0;
        } else {
            return creationTime + timeLimit - currentTime;
        }
    }

    function isInvalidID(uint256 _id) public view returns (bool) {
        return boxes[_id].creator == address(0);
    }

    function getRemainingAmount(uint256 _id) public view returns (uint256) {
        require(!isInvalidID(_id), "Invalid ID");
        return boxes[_id].amount;
    }

    function getHistory() public view returns (uint256[] memory) {
        return history[msg.sender];
    }
}
