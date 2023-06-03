import useWindowResize from '@/components/hooks/window-resize';
import icons from '../../../public/images/Icons-and-avatars.png';
import iconsSmall from '../../../public/images/Icons-and-avatars-mobile.png';
import Image from 'next/image';

const ResizeFloatingImage = () => {
  const windowSize = useWindowResize();
  const md = 768;

  const BigImage = () => {
    return (
      <Image
        src={icons}
        alt="icons"
        className="absolute left-[50%] top-[50%] -z-10 -translate-x-[50%] md:w-[50rem] md:-translate-x-[50%] md:-translate-y-[20%] xl:w-[62.625rem] xl:-translate-y-[10%]"
      />
    );
  };

  const SmallImage = () => {
    return (
      <Image
        src={iconsSmall}
        alt="icons-small"
        className="absolute left-[50%] top-[50%] -z-10 -translate-y-[16%] translate-x-[-50%]"
      />
    );
  };

  return windowSize >= md ? <BigImage /> : <SmallImage />;
};

export default ResizeFloatingImage;
