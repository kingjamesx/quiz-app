import { CAREERS } from '@/components/helpers/result-bank';

const Careers = () => {
  return (
    <div>
      <h4 className="mb-3 text-lg font-bold leading-9 text-primary md:text-2xl">
        Careers
      </h4>
      <p className="mb-10 mr-5 text-sm text-secondary md:mr-auto md:text-lg">
        There are several careers you’ll likely be a good fit for, check some
        out
      </p>
      <div className="flex flex-col gap-10 xl:gap-5">
        {CAREERS.map(career => (
          <div
            className="mr-6 flex flex-col text-lg md:flex-row md:gap-2.5 xl:ml-2.5"
            key={career.id}
          >
            <p className="text-sm font-bold text-primary md:text-base xl:w-[7.5rem]">
              {career.career}
            </p>
            <div className="xl:w-[45.5rem]">
              <p className="mb-3 text-sm text-secondary md:text-base">
                {career.description}
              </p>
              <div className="flex flex-col gap-2.5 text-xs text-accent-2 underline md:text-base xl:block">
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
