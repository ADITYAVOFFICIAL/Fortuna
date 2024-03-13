import { Popover, Menu } from "antd";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '../assets/Fortuna.png'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isOtherMenuOpen, setOtherMenuOpen] = useState(false);
    const tmpAddress = "0xd156D3731EE08B5d07758686cD2De516F4AeCfDB";

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleOtherMenuToggle = () => {
        setOtherMenuOpen(!isOtherMenuOpen);
    };

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to={'/topnfts'}><span className="text-[#ee8650] font-[Oswald] font-semibold uppercase">top nfts</span></Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to={'/chatroom'}><span className="text-[#ee8650] font-[Oswald] font-semibold uppercase">Chat room</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={'/my-nft'}><span className="text-[#ee8650] font-[Oswald] font-semibold uppercase">My NFTt</span></Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="border-b-[#2d2c2c] border-b-[2px]">
            <div className="grid grid-cols-12 my-10 md:mx-16 mx-8 font-[Montserrat]">
                <div className="col-span-4 flex gap-12 items-center justify-between">
                    <h1 className="text-white text-xl font-[Inter]">
                        <Link to={'/'}><img src={logo} style={{ transform: 'scale(1.8)' }} className="logo" /></Link>
                    </h1>
                    <Link to={'/redeem'}><span className="text-[#ee8650] font-[Oswald] hidden md:block font-semibold uppercase">Redeem</span></Link>
                    <Link to={'/create-link'}><span className="text-[#ee8650] font-[Oswald] hidden md:block font-semibold uppercase">Create</span></Link>
                    <div>
                        <span className="text-[#ee8650] font-[Oswald] hidden md:block font-semibold uppercase cursor-pointer" onClick={handleOtherMenuToggle}>
                            Other
                        </span>
                        <Popover
                            content={menu}
                            visible={isOtherMenuOpen}
                            onVisibleChange={handleOtherMenuToggle}
                            placement="bottom"
                        >
                            <span className="text-[#ee8650] hidden md:block font-semibold uppercase cursor-pointer">
                                
                            </span>
                        </Popover>
                    </div>
                    <Link to={'/team'}><span className="text-[#ee8650] font-[Oswald] hidden md:block font-semibold uppercase">TEAM</span></Link>
                </div>
                <div className="col-span-5"></div>
                <div className="col-span-3 flex items-center justify-end text-[#ee8650] text-sm md:text-base">
                    <div className="flex items-center gap-2 font-semibold">
                        {/* LOGIN */}
                        <ConnectButton />
                        {/* {tmpAddress.slice(0, 6)}...{tmpAddress.slice(-4)} */}
                    </div>
                    <div className="p-2 rounded-md cursor-pointer ml-2 md:hidden">
                        <Popover
                            content={<div className="w-[250px]" onClick={() => setMenuOpen(false)}>
                                <div className="flex flex-col gap-3">
                                    <Link to={'/redeem'}><span className="text-[#ee8650] font-semibold uppercase">Redeem</span></Link>
                                    <Link to={'/create-link'}><span className="text-[#ee8650] font-semibold uppercase">Create</span></Link>
                                    <Link to={'/my-nft'}><span className="text-[#ee8650] font-semibold uppercase">My NFT</span></Link>
                                    {/* <Link to={''}><span className="text-[#ee8650] font-semibold uppercase">{tmpAddress.slice(0, 6)}...{tmpAddress.slice(-4)}</span></Link> */}
                                </div>
                            </div>}
                            visible={isMenuOpen}
                            placement="bottomRight"
                        >
                            {
                                isMenuOpen ? (
                                    <AiOutlineClose onClick={handleMenuToggle} className="text-2xl text-[#ee8650]" />
                                ) : (
                                    <AiOutlineMenu onClick={handleMenuToggle} className="text-2xl text-[#ee8650]" />
                                )
                            }
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
