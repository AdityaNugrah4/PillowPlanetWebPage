import { features } from "."
import pillowPlanetFeature from "../Image/feature.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar"

function Feature() {
    return (
        <div className="mt-14.5">
            <Navbar />
            <div
                style={{ backgroundImage: `url(${pillowPlanetFeature})` }}
                className="flex items-end lg:items-start h-[50vh] bg-center bg-cover mt-10 mb-10"
            >
                <div className="flex items-end lg:items-start bottom-0 bg-linear-to-b lg:bg-linear-to-t from-transparent to-indigo-900 lg:to-sky-500 h-[50%] w-full">
                    <h2 id="AboutUs" className="ml-6 my-6 lg:ml-10 text-white text-5xl lg:text-7xl text-shadow-lg/20">Feature</h2>
                </div>
            </div>
            {features.map((feature, index) => (
                <div key={index} className="">
                    <div
                        style={{ backgroundImage: `url(${feature.image})` }}
                        className="group flex flex-col justify-center text-center lg:h-[40vh] hover:h-[65vh] bg-center bg-cover transition-all duration-300"
                    >
                        {/* <div className="relative">
                            <div className="z-40">
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full bg-white opacity-90 lg:opacity-40 group-hover:opacity-5 duration-500 transition-all"></div>
                        </div> */}
                        <div
                            className="relative flex justify-center"
                        >
                            <div className="flex z-40">
                                <div id="AboutUs" className="mx-4 flex flex-col justify-center items-center content-center text-white text-shadow-lg/20 transition-all duration-500">
                                    <h2>{feature.title}</h2>
                                    <p className="text-2xl">{feature.description}</p>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 lg:opacity-20 group-hover:opacity-50 duration-500 transition-all"></div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}
export default Feature