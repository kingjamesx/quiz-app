import Twitter from '../../public/icons/twitter-fill.svg';
import Sms from '../../public/icons/sms.svg';
import linkedin from '../../public/icons/linkedin-fill.svg';
import Instagram from '../../public/icons/instagram-fill.svg';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-[#011A1A] bg-footer-pattern p-5 pb-10 text-base text-white md:p-20">
      <section className="mx-auto max-w-[1200px]">
        <p className="mb-5 text-2xl font-bold">Awaskill</p>
        <div className="mb-10 flex flex-col justify-between lg:flex-row">
          <span>Assess, learn, grow - all in one place</span>

          <ul className="mt-5 flex flex-col justify-between gap-8 md:flex-row lg:mt-0">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="border  border-white"></div>
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p>© 2023 Assesify. All rights reserved.</p>
          <span className="mt-5 flex gap-5 md:mt-0">
            <Image src={Twitter} alt="twitter" />
            <Image src={linkedin} alt="twitter" />
            <Image src={Instagram} alt="instagram" />
            <Image src={Sms} alt="email" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
