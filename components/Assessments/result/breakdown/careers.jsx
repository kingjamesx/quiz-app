import { CAREERS } from '@/components/helpers/result-bank';

const Careers = () => {
  return (
    <div>
      <h4 className="mb-3 text-2xl font-bold leading-9 text-primary">
        Careers
      </h4>
      <p className="mb-10 text-lg text-secondary">
        There are several careers you’ll likely be a good fit for, check some
        out
      </p>
      <div className="flex flex-col gap-5">
        {CAREERS.map(career => (
          <div className="ml-2.5 flex gap-2.5 text-lg" key={career.id}>
            <p className="w-[7.5rem] font-bold text-primary">{career.career}</p>
            <div className="w-[45.5rem]">
              <p className="mb-3 text-secondary">{career.description}</p>
              <div className="text-accent-2 underline">
                <a href={career.readLink} className="block" target="_blank">
                  {career.readText}
                </a>
                <a href={career.watchLink} className="block" target="_blank">
                  {career.watchText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
