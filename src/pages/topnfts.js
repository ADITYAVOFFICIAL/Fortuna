import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopNFT = () => {
    const [topNFTs, setTopNFTs] = useState([]);

    useEffect(() => {
        const fetchTopNFTs = async () => {
            try {
                const response = await axios.get('https://api.opensea.io/api/v2/collection/chikn/nfts?limit=50', {
                    headers: {
                        'X-API-KEY': 'e238fc3516a847fe934466edd688f83c'
                    }
                });
                const topNFTsData = response.data.nfts;
                setTopNFTs(topNFTsData);
            } catch (error) {
                console.error('Error fetching top NFTs:', error);
            }
        };

        fetchTopNFTs();
    }, []);

    return (
        <div>
            <h1 style={{ color: "white" }}>Top NFTs</h1>
            <div className="top-nfts-container">
                {topNFTs.map(nft => (
                    <div key={nft.identifier} className="nft-item">
                        <img src={nft.image_url} alt={nft.name || "NFT"} />
                        <div className="nft-details">
                            <p style={{ color: "white" }}>Name: {nft.name || "Unnamed NFT"}</p>
                            <p style={{ color: "white" }}>Owner: {nft.owner}</p>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopNFT;
