const Cta = () => {
  return (
    <section className="mx-6 my-20 rounded-[20px] bg-cta px-2 py-7 text-center text-white md:m-20 md:px-16 md:py-16">
      <h3 className="text-2xl font-bold md:text-[2rem]">Save your result</h3>
      <p className="my-10 text-sm md:my-10 md:text-lg">
        Save this result and others by creating an account. Gain access to
        exclusive features, receive personalized recommendations, get regular
        newsletters, and stay up-to-date with our latest news and updates.{' '}
      </p>
      <button className="mx-auto w-max rounded-[20px] bg-primary-2/400 px-7 py-3.5 text-base font-bold md:text-lg">
        Create an account
      </button>
    </section>
  );
};

export default Cta;
