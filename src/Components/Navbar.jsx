import { act, useRef, useState } from "react";
import { FaHome, FaPhone, FaShoppingCart, FaStumbleupon, FaWindowClose } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";
import { LuSquareMenu } from "react-icons/lu";
import { MdFeaturedPlayList } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isNavbar, setIsNavbar] = useState(false);
    const [isActiveLink, setIsActiveLink] = useState(false);
    const [isPhone, setIsPhone] = useState(true)
    const navbarRef = useRef(null);

    const linkNavbar = [
        { label: 'Home', href: '/', icon: <FaHome /> },
        { label: 'About', href: '/about', icon: <GiPillow /> },
        { label: 'Shop Now', href: '/product', icon: <FaShoppingCart /> },
        { label: 'Feature', href: '/feature', icon: <MdFeaturedPlayList /> }
    ];

    const collapsibleNavbar = isNavbar ? `right-0` : `-right-[100%]`;
    const hideMenu = isNavbar ? 'opacity-0' : 'opacity-100';
    const overlayBlur = isNavbar ? 'opacity-100' : 'opacity-0  pointer-events-none';
    const activeLink = isActiveLink ? 'bg-red-500' : '';
    const phoneNumber = isPhone ? 'opacity-0' : 'opacity-100';

    // functioning
    return (
        <>
            <div ref={navbarRef} onClick={() => setIsNavbar(!isNavbar)} className={`fixed z-100 top-0 bg-transparent min-h-screen min-w-screen backdrop-blur-xs ${overlayBlur} transition-all`}></div>
            <div ref={navbarRef} onClick={() => setIsNavbar(!isNavbar)} className={`flex z-100 fixed bg-linear-to-t from-sky-500 to-indigo-500 shadow-md/30 backdrop-blur-lg top-0 Left-0 w-screen rounded-b-2xl h-14 ${hideMenu} lg:hidden transition-all`}></div>
            <div>
                <div ref={navbarRef} onClick={() => setIsNavbar(!isNavbar)} className={`flex z-100 fixed top-2 right-2 text-4xl active:bg-white rounded-xl p-0.5 ${hideMenu} lg:hidden transition-all`}><LuSquareMenu /></div>
                <div onClick={() => setIsPhone(!isPhone)} className={`flex z-100 fixed top-2.5 right-14 text-3xl active:bg-white rounded-xl p-0.5 ${hideMenu} lg:hidden transition-all`}><FaPhone /></div>
                <div className={`flex z-100 fixed top-15 right-14 font-extrabold text-xl text-shadow-md/20 border-1 active:bg-amber-400 rounded-sm p-0.5 ${phoneNumber} lg:hidden transition-all`}>(212) 555-0199</div>
                <div className={`flex z-100 fixed top-2.5 left-4 text-shadow-md/20 active:bg-amber-400 rounded-sm p-0.5 lg:hidden transition-all`}>
                    <h2 className="my-0 text-white">Pillow Planet</h2>
                </div>
            </div>

            <nav className={`fixed z-100 top-0 ${collapsibleNavbar} lg:right-0 lg:left-0 h-screen lg:h-fit bg-linear-to-t from-sky-500 to-indigo-500 z-10 items-center duration-150 ease-in-out transition-all`}>
                <ul className="list-none flex flex-col pl-4 lg:flex-row mt-1 lg:my-0">
                    <li ref={navbarRef} onClick={() => setIsNavbar(!isNavbar)} className="lg:hidden text-4xl text-white"><FaWindowClose /></li>
                    <div onClick={() => setIsPhone(!isPhone)} className={`flex z-100 fixed top-2.5 left-44 text-3xl text-white rounded-xl p-0.5 ${hideMenu} hidden lg:block transition-all`}><FaPhone /></div>
                    <div className={` z-100 fixed top-2.5 left-56 text-xl text-white font-extrabold border-1 rounded-sm p-1 hidden lg:flex transition-all`}>(212) 555-0199</div>
                    {linkNavbar.map(({ label, href, icon }, i) => (
                        <li key={i} className={`${i === 0 ? 'mr-auto' : 'mr-2'} ${activeLink} text-white hover:text-black font-extrabold flex`}>
                            <NavLink to={href} className={({ isActive }) => `${isActive ? 'bg-linear-to-t from-sky-300 to-indigo-300 text-white' : 'text-black'} hover:bg-neutral-200 py-2 lg:py-4 px-6 text-xl no-underline hover:text-inherit visited:text-inherit active:text-inherit transition-all`}>
                                {label} <span className="align-middle">{icon}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default Navbar