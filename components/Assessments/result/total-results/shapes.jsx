import Image from 'next/image';
import pentagon from '../../../../public/images/pentagon.png';
import pentagonSmall from '../../../../public/images/pentagon-small.png';
import triangle from '../../../../public/images/triangle.png';
import triangleSmall from '../../../../public/images/triangle-small.png';

const Shapes = () => {
  return (
    <div className="mx-auto my-10 flex w-max flex-col items-center gap-16 md:flex-row">
      <div className="relative">
        <Image src={pentagon} alt="pentagon" className="hidden xl:block" />
        <Image src={pentagonSmall} alt="pentagon" className="xl:hidden" />
        <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col gap-2.5 text-center font-bold text-primary-2/300">
          <p className="text-lg xl:text-[2rem]">70%</p>
          <p className="text-sm xl:text-lg">Creativity</p>
        </div>
      </div>
      <div className="relative">
        <Image src={triangle} alt="triangle" className="hidden xl:block" />
        <Image src={triangleSmall} alt="triangle" className="xl:hidden" />
        <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col gap-2.5 text-center font-bold text-accent-2">
          <p className="text-lg xl:text-[2rem]">40%</p>
          <p className="text-sm xl:text-lg">Analytical</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2.5 rounded-[20px] border-[6px] border-rectangle p-16 text-center font-bold text-rectangle md:p-10 xl:p-20">
          <p className="text-lg xl:text-[2rem]">30%</p>
          <p className="text-sm xl:text-lg">Logic</p>
        </div>
      </div>
    </div>
  );
};

export default Shapes;
