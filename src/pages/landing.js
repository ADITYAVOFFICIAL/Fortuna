import heroImg from '../assets/hero-img.png';
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import batGif from '../assets/bat.gif';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import backy from '../assets/bg.gif';

const LandingPage = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            AOS.init();
        }
    }, [])

    return (
        <div className='glowy' style={{ borderRadius: '25px',backgroundImage: `url(${backy})` }}>
            <div className="grid md:grid-cols-2 gap-y-20 md:gap-y-0">
                <div className="h-full flex gap-8 flex-col justify-center text-[Montserrat] order-2">
                    <div>
                        <h1 data-aos="fade-up" className="text-[#ee8650] uppercase text-7xl mx-10 font-semibold font-[Oswald] leading-normal tracking-narrow">FORTUNA</h1>
                        <h1 data-aos="fade-up" className="glow-text text-[#ee8650] uppercase mx-10 text-2xl font-semibold font-[Oswald] leading-normal tracking-narrow mt-2">TEAM MAVERICKS</h1>
                        <p data-aos="fade-up" data-aos-delay={100} className="text-[#ee8650] mx-10 my-6 font-semibold font-[Oswald] tracking-wide">A project inspired by our tradition of gifting & spreading the joys of life , but elevated to the realm of NFTs, developed for the Layers 2.0 hackathon.</p>
                    </div>
                    <div>
                        <Link to={'/create-link'}>
                            <button data-aos-delay={200} data-aos="fade-up" className="bg-[#ee8650] mx-10 font-[Oswald] tracking-wide rounded-md flex gap-2 px-3 py-2 items-center font-semibold">Create Your Giftbox Now <AiOutlineArrowRight className="text-xl" /></button>
                        </Link>
                    </div>
                    <div className="my-20 md:my-0">&nbsp;</div>
                </div>
                <div className="flex items-center justify-center order-1 md:order-2">
                    <img
                        data-aos="fade-left"
                        data-aos-delay={100}
                        src={heroImg}
                        className="md:w-[60%] w-[75%] h-auto rotating-image"
                        alt="Hero Image"
                    />
                </div>
            </div>
            <img
                src={batGif}
                alt="Bat"
                className="absolute bottom-0 left-0 w-20 h-auto animate-bat"
                style={{
                    animation: 'moveBat 6s linear infinite',
                    width: 'auto',
                    height: '140px'
                }}
            />
        </div>
    );
}

export default LandingPage;
