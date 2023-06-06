import { OTHER_CAREERS } from '@/components/helpers/result-bank';
import Link from 'next/link';
import Arrow from '../../svg/arrow';
import RetakeBtn from '../../UI/retake-button';

const Others = () => {
  return (
    <div className="mr-6 h-max border border-primary-2/100 bg-primary-2/0 px-5 py-10 xl:mr-auto xl:border-y xl:border-l">
      <p className="mb-10 text-sm text-primary md:text-lg">
        You also scored high in these areas
      </p>
      {OTHER_CAREERS.map(others => (
        <div className="mb-10" key={others.id}>
          <p className="mb-2 text-base font-bold text-primary md:text-xl">
            {others.career}
          </p>
          <p className="mb-3 text-sm text-secondary md:text-base">
            {others.description}
          </p>
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-primary-2/400"
          >
            <span>Learn more</span>{' '}
            <span>
              <Arrow />
            </span>
          </Link>
        </div>
      ))}
      <RetakeBtn />
    </div>
  );
};

export default Others;
