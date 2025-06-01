import { aboutSections } from ".";
import Navbar from "./Navbar";
import aboutUsPhoto from '../Image/142857.jpg';
import pillow1944 from '../Image/pillowPlanet1944.png';
import Footer from "./Footer";

function About() {
    return (
        <div className="lg:mt-14.5">
            <Navbar />
            <div className="">
                <div
                    style={{ backgroundImage: `url(${aboutUsPhoto})` }}
                    className="flex items-end lg:items-start h-[50vh] bg-center bg-cover mt-10"
                >
                    <div className="flex items-end lg:items-start bottom-0 bg-linear-to-b lg:bg-linear-to-t from-transparent to-indigo-900 lg:to-sky-500 h-[50%] w-full">
                        <h2 id="AboutUs" className="ml-6 my-6 lg:ml-10 text-white text-5xl lg:text-7xl text-shadow-lg/20">About Us</h2>
                    </div>

                </div>
                {aboutSections.map((section, index) => (
                    <div key={index} className="lg:bg-linear-to-tr from-indigo-100 to-transparent lg:flex lg:flex-row lg:my-4 lg:shadow-md/10">
                        <img src={`${section.image}`} className="w-[100vw] h-[60vw] lg:w-[25vw] lg:h-[25vw] bg-center" />
                        <div className="lg:flex lg:flex-col">
                            <h2 className="mx-2">{section.title}</h2>
                            <p className="text-justify mx-2">{section.description}</p>
                        </div>

                    </div>
                ))}
                <h2 className="mt-16 text-center">Trusted Since 1944</h2>
                <div
                    style={{ backgroundImage: `url(${pillow1944})` }}
                    className="flex items-center h-[50vh] bg-center bg-cover lg:mt-1 mb-2"
                >
                    <div className="flex bg-neutral-900/30 h-full w-full hover:opacity-40 transition-all duration-500">
                        <p className="mx-2 lg:mx-6 my-2 lg:my-6 lg:ml-10 text-white content-center text-justify lg:font-semibold lg:text-2xl text-shadow-lg/30">
                            During the liberation of Paris in 1944, citizens carried our iconic pillows through the streets, symbolizing resilience, comfort, and the promise of better days. From those historic celebrations to today’s bedrooms around the globe, PillowPlanet has been a trusted name for over 100 years. Our legacy of craftsmanship and comfort continues to support generations of dreamers and doers.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About