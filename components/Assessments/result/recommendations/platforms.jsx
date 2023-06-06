import Image from 'next/image';

const Platforms = props => {
  const { heading, description, note, platforms } = props;
  return (
    <div>
      <h3 className="mb-5 text-base font-bold leading-9 text-primary md:text-2xl">
        {heading}
      </h3>
      <p className="mb-2.5 mr-6 text-base text-secondary md:mr-20 md:text-lg">
        {description}
      </p>
      {note && (
        <p className="text-[0.625rem] text-secondary md:text-sm">
          <span className="text-primary-2/900">***</span>
          {note}
        </p>
      )}
      <div
        className={`mt-10 grid w-full snap-x snap-mandatory scroll-px-4 auto-cols-[14.625rem] grid-flow-col gap-[1.35rem] overflow-auto`}
      >
        {platforms.map(platform => (
          <div
            key={platform.id}
            className="w-full snap-start overflow-hidden rounded-[20px] border border-platform bg-white"
          >
            <Image
              src={platform.logo}
              alt={platform.name}
              className="mx-4 mt-4 rounded-t-[12px] border border-platform"
            />
            <figcaption className="mb-6 ml-4 mt-8 pr-2 text-[0.625rem] font-bold text-secondary md:text-lg">
              {platform.name}
            </figcaption>
          </div>
        ))}
      </div>
      <div className="mx-auto w-max">
        <button className="my-10 text-base font-bold text-primary-2/400 md:text-lg">
          See all
        </button>
      </div>
    </div>
  );
};

export default Platforms;
