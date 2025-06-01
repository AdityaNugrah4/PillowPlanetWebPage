import { aboutSections, introduction } from ".";
import { GiNightSleep, GiPlanetConquest } from "react-icons/gi";
import { BiAward, BiPlanet, BiSolidDiscount } from "react-icons/bi";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";
import { FaExternalLinkAlt, FaShippingFast, FaSpaceShuttle } from "react-icons/fa";
import Review from "./Review";
import PillowPlanetPicture from "../Image/4551.jpg";
import pillowProduct from '../Image/product.jpg';
import pillowAboutUs from '../Image/142857.jpg';
import pillowFeature from '../Image/feature.jpg'
import { label } from "motion/react-client";
import { href, Link } from "react-router-dom";
import { useRef, useState } from "react";

function Home() {
    const [isNavbar, setIsNavbar] = useState(false);
    const navbarRef = useRef(null);

    const homeAdvertisement = [
        { label: '1001 free night trial', icon: <GiNightSleep /> },
        { label: 'Shipping everywhere even to Pluto', icon: <span><FaShippingFast /> <BiPlanet /></span> },
        { label: 'First time discount', icon: <BiSolidDiscount /> },
        { label: '10 year guarantee', icon: <BiAward /> }
    ];

    const componentsHome = [
        {
            label: 'Product',
            image: pillowProduct,
            href: '/product',
            explanation: 'Discover our premium pillows and find your perfect match.'
        },
        {
            label: 'About Us',
            image: pillowAboutUs,
            href: '/about',
            explanation: 'Learn about our story, mission, and dedication to better sleep.'
        },
        {
            label: 'Feature',
            image: pillowFeature,
            href: '/feature',
            explanation: 'Explore the cutting-edge features that set our pillows apart.'
        }
    ];


    return (
        <div className="mt-14.5">
            <Navbar />
            <div className="">
                <div
                    style={{ backgroundImage: `url(${PillowPlanetPicture})` }}
                    className="flex items-end lg:items-start h-[50vh] bg-center bg-cover mt-10"
                >
                    <div className="flex items-end lg:items-start bottom-0 bg-linear-to-b lg:bg-linear-to-t from-transparent to-indigo-900 lg:to-sky-500 h-[50%] w-full">
                        <h2 id="AboutUs" className="ml-6 my-6 lg:ml-10 text-white text-5xl lg:text-7xl text-shadow-lg/20">Pillow Planet</h2>
                    </div>
                </div>
                <div className="grid lg:flex rounded-2xl lg:rounded-full bg-linear-to-t from-sky-500 to-indigo-500 py-2 my-4 text-sm lg:text-base font-bold lg:flex-row text-center lg:text-white shadow-md/20 lg:justify-around items-center align-middle">
                    {homeAdvertisement.map((advert, index) => (
                        <span key={index} className="lg:border-none my-0.5 lg:my-0 lg:bg-transparent text-white hover:text-black hover:rounded-full hover:bg-white hover:scale-110 hover:px-1 rounded-2xl transition-all">{advert.label} <span className="items-center text-3xl align-middle">{advert.icon}</span></span>
                    ))}
                </div>
                <div className="m-2 ">
                    <p className="text-justify lg:mx-44 lg:mt-10">{introduction}</p>
                    {componentsHome.map((home, indexHome) => (
                        <Link
                            key={indexHome}
                            to={home.href}
                            style={{ backgroundImage: `url(${home.image})` }}
                            className="group relative flex items-end lg:items-start h-[25vh] lg:h-[22vh] hover:h-[40vh] transition-all duration-500 bg-center bg-cover mt-10 no-underline hover:text-inherit visited:text-inherit active:text-inherit cursor-pointer"
                        >
                            <div className="flex flex-col z-40 items-end lg:items-start h-full w-full">
                                <h2 id="AboutUs" className="flex ml-2 my-2 mx-2 lg:ml-10 text-white text-5xl lg:text-7xl group-hover:translate-x-10 group-hover:text-shadow-lg/20 transition-all duration-500">
                                    {home.label}<span className="text-sm top-0 lg:opacity-0 group-hover:opacity-100 justify-start text-shadow-lg items-start duration-500 transition-all"><FaExternalLinkAlt /></span>
                                </h2>
                                <p className="mx-2 text-white group-hover:text-xl group-hover:translate-x-5 group-hover:text-shadow-lg/20 lg:opacity-25 group-hover:opacity-100 transition-all duration-500">{home.explanation}</p>
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30 lg:opacity-40 group-hover:opacity-5 duration-500 transition-all"></div>
                        </Link>
                    ))}
                </div>
            </div>
            <Review />
            <Footer />
        </div>
    )
}
export default Home