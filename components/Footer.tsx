import { FaLocationArrow, FaWhatsapp } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import MagicButton from './MagicButton';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s build{' '}
          <span className="text-purple">something amazing</span> together!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Whether it&apos;s a brand-new idea or enhancing your current platform,
          I&apos;m here to bring it to life.
        </p>

        <a href="mailto:kishore15421@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentYear} CRK
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={info.link}
              target="_blank"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
          <a
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            href="https://wa.me/917981067942"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
