const CoverBanner = ({ subTitle, title, coverBannerImage }) => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url(${coverBannerImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-mono uppercase">
              {subTitle}
            </h1>
            <p className="mb-5 text-base uppercase font-semibold mx-0 px-0">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverBanner;
