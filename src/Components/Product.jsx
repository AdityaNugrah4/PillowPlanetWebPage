import { FaShoppingCart } from "react-icons/fa"
import { products } from "./index"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Product() {
    return (
        <div className="mt-20 h-screen">
            <Navbar />
            <h1 className="text-center">Our Product</h1>
            <div className="mx-2 mb-8 lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-6">
                {products.map((pillow, index) => (
                    <div key={index} className="grid">
                        <div className="flex flex-col text-center justify-center items-center rounded-2xl p-2 my-4 border border-neutral-200 shadow-xl lg:shadow-xl/10 lg:shadow-none hover:shadow-xl/10 hover:-translate-y-2 transition-all ">
                            <img src={`${pillow.image}`} className="w-[60vw] h-[60vw] lg:w-[25vw] lg:h-[25vw] bg-center bg-cover rounded-md" />
                            <div className="justify-items-center">
                                <h2>{pillow.type}</h2>
                                <span className="text-green-600">{pillow.price}</span>
                                <div className=" grid bg-red-700 hover:bg-red-400 active:bg-transparent outline-1 outline-red-200 items-center justify-items-center w-1/3 my-2 py-1 bg text-white rounded-full shadow drop-shadow-md/20 transition-all duration-200">
                                    <span>Buy</span>
                                    <FaShoppingCart />
                                </div>
                                <p className="text-justify px-3">{pillow.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default Product