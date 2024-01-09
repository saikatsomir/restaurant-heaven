const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="max-auto text-center flex flex-col gap-y-6 items-center">
      <h1
        style={{ fontFamily: "Pacifico" }}
        className="text-red-600 text-xl md:text-2xl"
      >
        --- {subTitle} ---
      </h1>
      <h1 className="font-mono text-xl md:text-3xl uppercase font-semibold border-y-2 border-gray-300 max-w-fit py-4 px-2 ">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
