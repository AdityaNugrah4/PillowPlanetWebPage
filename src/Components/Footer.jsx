import { FaApple, FaCcAmazonPay, FaCcApplePay, FaCcMastercard, FaCcVisa, FaFacebook, FaGooglePay, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    const socialMedia = [<FaFacebook />, <FaInstagram />, <FaApple />, <BsTwitterX />]
    return (
        <footer className="flex flex-col bg-neutral-900 text-white text-2xl py-12 items-center justify-center">
            <div className="flex flex-col gap-4 text-center lg:grid lg:grid-cols-4">
                <div className="flex flex-col mx-1.5 mb-4">
                    <h3 className="my-0">Contact</h3>
                    <div className="text-base flex flex-col lg:text-left">
                        <span><span><FaPhoneAlt /></span> (212) 555-0199</span>
                        <span><span><GiMailbox /></span> info@pillowplanet.com</span>
                    </div>

                </div>
                <div className="flex flex-col mx-1.5 mb-4">
                    <h3 className="my-0">Payment</h3>
                    <div className="flex justify-around lg:text-left">
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaCcApplePay />
                        <FaCcAmazonPay />
                        <FaGooglePay />
                    </div>
                </div>
                <div className="flex flex-col mx-1.5 mb-4">
                    <h3 className="my-0">Social Media</h3>
                    <div className="flex justify-around lg:text-left">
                        {socialMedia.map((sosMed, indexSosMed) => (
                            <div key={indexSosMed} className="cursor-pointer hover:scale-125 active:scale-110 transition-all">
                                {sosMed}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mx-1.5 mb-4">
                    <h3 className="my-0">Privacy Policy</h3>
                </div>

                <span><span></span></span>
            </div>
            <div className="text-center mx-1">© 2025 Gandalf. All rights are reserved by a wizard.</div>
        </footer>
    )
}
export default Footer