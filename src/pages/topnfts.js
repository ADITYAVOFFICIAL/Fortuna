// TopNFT.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopNFT = () => {
    const [topNFTs, setTopNFTs] = useState([]);

    useEffect(() => {
        const fetchTopNFTs = async () => {
            try {
                const response = await axios.get('https://api.opensea.io/api/v2/assets?order_direction=desc&limit=10');
                const topNFTsData = response.data.assets;
                setTopNFTs(topNFTsData);
            } catch (error) {
                console.error('Error fetching top NFTs:', error);
            }
        };

        fetchTopNFTs();
    }, []);

    return (
        <div>
            <h1 style={{color:"white"}}>Top NFTs</h1>
            <div className="top-nfts-container">
                {topNFTs.map(nft => (
                    <div key={nft.id} className="nft-item">
                        <img src={nft.image_url} alt={nft.name} />
                        <div className="nft-details">
                            <p>Name: {nft.name}</p>
                            <p>Owner: {nft.owner.address}</p>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopNFT;
