const Selector = () => {
  return (
    <>
      <svg
        className="hidden xl:block"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H48C54.6274 0 60 5.37258 60 12V48C60 54.6274 54.6274 60 48 60H12C5.37258 60 0 54.6274 0 48V0Z"
          fill="#F58025"
        />
        <path
          d="M26.7758 35.4403L42.252 19.9642L44.633 22.3451L26.7758 40.2022L16.0615 29.488L18.4425 27.1071L26.7758 35.4403Z"
          fill="white"
        />
      </svg>

      <svg
        className="xl:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V0Z"
          fill="#F58025"
        />
        <path
          d="M10.3874 14.7202L18.1255 6.98209L19.316 8.17256L10.3874 17.1011L5.03027 11.744L6.22075 10.5535L10.3874 14.7202Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default Selector;
