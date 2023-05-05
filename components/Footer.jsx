import Twitter from "../public/icons/twitter-fill.svg"
import Sms from "../public/icons/sms.svg"
import linkedin from "../public/icons/linkedin-fill.svg"
import Instagram from "../public/icons/instagram-fill.svg"
import Image from "next/image"
const Footer = () => {
  return (
    <div className="bg-[#011A1A] bg-footer-pattern text-white text-base p-5 md:p-20 pb-10" >
        <section className="max-w-[1200px] mx-auto">
            <p className="font-bold text-2xl mb-5">Awaskill</p>
            <div className="flex flex-col lg:flex-row justify-between mb-10">
                <span>Assess, learn, grow - all in one place</span>
             
                    <ul className="flex flex-col md:flex-row justify-between gap-8 mt-5 lg:mt-0">
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Cookie policy</li>
                        <li>Accessibility</li>

                    </ul>
                
            </div>
            <div className="border  border-white"></div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-10">
                <p>© 2023 Assesify. All rights reserved.</p>
                <span className="flex gap-5 mt-5 md:mt-0">
                    <Image src={Twitter} alt='twitter'/>
                    <Image src={linkedin} alt='twitter'/>
                    <Image src={Instagram} alt='instagram'/>
                    <Image src={Sms} alt='email'/>

                </span>
            </div>
        </section>
    </div>
  )
}

export default Footer