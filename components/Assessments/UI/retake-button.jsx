import Link from 'next/link';
import Arrow from '../svg/arrow';

const RetakeBtn = () => {
  return (
    <div className="mx-auto w-max">
      <Link
        href="/assessments"
        className="flex items-center gap-2.5 rounded-[1.25rem] border border-primary-2/400 px-7 py-3.5 text-base font-bold text-primary-2/400 md:text-lg"
      >
        <span>Retake Assessment</span>{' '}
        <span>
          <Arrow />
        </span>
      </Link>
    </div>
  );
};

export default RetakeBtn;
