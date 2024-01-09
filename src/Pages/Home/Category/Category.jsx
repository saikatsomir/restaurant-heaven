import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../../Shared/SectionTitle";
import barger from "./barger.png";
import cheese from "./cheeseburger.png";
import ham from "./hamburger1.png";
import brief from "./briefburger.png";
import { useEffect } from "react";
const Category = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-10 mb-20">
      <SectionTitle
        subTitle={"From 10:00 AM to 11:00 PM"}
        title={"Order YOur best choices food"}
      />
      <section className="p-0 pt-10  grid grid-cols-1  lg:grid-cols-4  gap-24  ">
        <div
          data-aos="flip-up"
          className="card place-self-center w-80 md:w-64 rounded-none justify-center items-center shadow-xl  hover:border border-red-600 hover:left-0 hover:right-0 "
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <figure className="px-10 pt-10">
            <img src={cheese} alt="Shoes" className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center px-0">
            <h2 className="card-title  font-bold font-mono text-lg md:text-xl ">
              Delicious Chesseburger
            </h2>
            <p className="text-lg">Barbecue Italian Cuisine</p>
            <div className="card-actions">
              <h3 className="text-red-600 font-semibold text-3xl">$ 27.0</h3>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="card place-self-center w-80 md:w-64   rounded-none justify-center items-center shadow-xl   hover:border border-red-600 hover:left-0 hover:right-0 "
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <figure className="px-10 pt-10">
            <img src={brief} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center px-0">
            <h2 className="card-title  font-bold font-mono text-lg md:text-xl ">
              Brief Burger
            </h2>
            <p className="text-lg">Japanese Cuisine Chicken</p>
            <div className="card-actions">
              <h3 className="text-red-600 font-semibold text-3xl">$ 27.0</h3>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="card place-self-center w-80 md:w-64   rounded-none justify-center items-center shadow-xl   hover:border border-red-600 hover:left-0 hover:right-0 "
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <figure className="px-10 pt-10">
            <img src={ham} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center px-0 ">
            <h2 className="card-title  font-bold font-mono text-lg md:text-xl ">
              Hamburger
            </h2>
            <p className="text-lg">Barbecue Italian Cuisine</p>
            <div className="card-actions">
              <h3 className="text-red-600 font-semibold text-3xl">$ 27.0</h3>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="card place-self-center w-80 md:w-64   rounded-none justify-center items-center shadow-xl   hover:border border-red-600 hover:left-0 hover:right-0 "
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <figure className="px-10 pt-10">
            <img src={barger} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center px-0">
            <h2 className="card-title  font-bold font-mono text-lg md:text-xl ">
              Special Barger
            </h2>
            <p className="text-lg">Barbecue Italian Cuisine Barger</p>
            <div className="card-actions">
              <h3 className="text-red-600 font-semibold text-3xl">$ 27.0</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
