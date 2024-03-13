import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillDollarCircle } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                console.log('Top NFTs:', topNFTsData);
            } catch (error) {
                console.error('Error fetching top NFTs:', error);
            }
        };

        fetchTopNFTs();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <h1 data-aos-delay={500} data-aos="fade-up" className="font-semibold flex rowdies-regular items-center text-4xl gap-1 uppercase mb-5" style={{ color:"#ee8650" }}>
                <AiFillDollarCircle className="text-4xl" /> TOP NFTs
            </h1>

            <div className="top-nfts-container" data-aos="fade-up">
                {topNFTs.map(nft => (
                    <div key={nft.identifier} className="nft-item glowy">
                        <img src={nft.image_url} alt={nft.name || "NFT"} />
                        <div className="nft-details">
                            <p className='font-[Oswald] tracking-wider'  style={{ color: "white" }}>Name: {nft.name || "Unnamed NFT"}</p>
                            <p className='font-[Oswald] tracking-wider' style={{ color: "white" , wordBreak: "break-word" }}>Contract: {nft.contract}</p>
                            <p  className='font-[Oswald] tracking-wider' style={{ color: "white" }}>Token Standard: {nft.token_standard}</p>
                            <p className='font-[Oswald] tracking-wider'  style={{ color: "white" }}>Type: Avalanche Fuji</p>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopNFT;
