import chefBG from "./chef-service.jpg";
const AboutRestaurant = () => {
  return (
    <section
      className="md:py-24 py-10 my-16 md:mt-4"
      style={{
        backgroundImage: `url(${chefBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text bg-center mx-auto md:p-16 py-4  px-10 text-center w-5/6 md:w-3/5 bg-white">
        <h1 className="uppercase text-red-600 text-2xl md:text-3xl font-bold italic">
          Restaurant Logo
        </h1>
        <p className="text-sm md:text-lg pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quas quis optio commodi in libero quaerat, aliquid adipisci impedit.
          Repellat, dicta praesentium? At impedit sint exercitationem eius
          similique eos consequuntur.
        </p>
      </div>
    </section>
  );
};

export default AboutRestaurant;
