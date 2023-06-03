import { OTHER_CAREERS } from '@/components/helpers/result-bank';
import Link from 'next/link';
import Arrow from '../../svg/arrow';

const Others = () => {
  return (
    <div className="h-max border-y border-l border-primary-2/100 bg-primary-2/0 px-5 py-10">
      <p className="mb-10 text-lg text-primary">
        You also scored high in these areas
      </p>
      {OTHER_CAREERS.map(others => (
        <div className="mb-10" key={others.id}>
          <p className="mb-2 text-xl font-bold text-primary">{others.career}</p>
          <p className="mb-3 text-secondary">{others.description}</p>
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
      <div className="mx-auto w-max">
        <Link
          href="/assessments"
          className="flex items-center gap-2.5 rounded-[1.25rem] border border-primary-2/400 px-7 py-3.5 text-lg font-bold text-primary-2/400"
        >
          <span>Retake Assessment</span>{' '}
          <span>
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Others;
