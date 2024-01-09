import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bg from "./wood.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import burger from "./burger.png";
import pizza from "./pizza.png";
import sandwich from "./sandwich.png";
import "../../../Shared/Shared.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={true}
        showIndicators={false}
        autoPlay={true}
        autoFocus={false}
        infiniteLoop={true}
      >
        <div
          style={{
            backgroundImage: `url(${bg})`,
            opacity: 100,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "90vh",
          }}
        >
          <div className=" flex justify-center items-center lg:pt-20 ">
            <div data-aos="fade-right" className="w-2/6 left-0">
              <div className="absolute" style={{ fontFamily: "Pacifico" }}>
                <a className="text-black text-2xl font-semibold ">
                  Welcome to Atlas...
                </a>
              </div>
              <br />
              <p
                className="lg:text-5xl leading-10 relative font-semibold text-white text-left "
                style={{ fontFamily: "train one", lineHeight: "80px" }}
              >
                THE HEALTHY BURGER FOR YOUR KIDS
              </p>
              <br />
              <div className="absolute ">
                <button className="btn border-none rounded-none text-white bg-red-600 text-left  ">
                  Explore Menu
                </button>
              </div>
            </div>
            <div className="" data-aos="zoom-in-down">
              <img className="bannerImage" src={burger} alt="Burger" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            opacity: 100,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "90vh",
          }}
        >
          <div className=" flex justify-center items-center lg:pt-24 ">
            <div data-aos="fade-down-right" className="w-2/6 left-0">
              <div className="absolute" style={{ fontFamily: "Pacifico" }}>
                <a className="text-black text-2xl font-semibold ">
                  Welcome to Atlas...
                </a>
              </div>
              <br />
              <p
                className="lg:text-5xl leading-10 relative font-semibold text-white text-left "
                style={{ fontFamily: "train one", lineHeight: "70px" }}
              >
                ENJOY YOUR FAVORITE FOOD WITH FAMILY
              </p>
              <br />
              <div className="absolute ">
                <button className="btn border-none rounded-none text-white bg-red-600 text-left  ">
                  Explore Menu
                </button>
              </div>
            </div>
            <div className="" data-aos="zoom-in">
              <img className="bannerImage" src={pizza} alt="Pizza" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            opacity: 100,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "90vh",
          }}
        >
          <div className=" flex justify-center items-center lg:pt-24 ">
            <div data-aos="fade-right" className="w-2/6 left-0">
              <div className="absolute" style={{ fontFamily: "Pacifico" }}>
                <a className="text-black text-2xl font-semibold ">
                  Welcome to Atlas...
                </a>
              </div>
              <br />
              <p
                className="lg:text-5xl leading-10 relative font-semibold text-white text-left "
                style={{ fontFamily: "train one", lineHeight: "70px" }}
              >
                GET BEST QUALITY FOOD FROM US
              </p>
              <br />
              <div className="absolute ">
                <button className="btn border-none rounded-none text-white bg-red-600 text-left  ">
                  Explore Menu
                </button>
              </div>
            </div>
            <div className="" data-aos="zoom-out-up">
              <img className="bannerImage" src={sandwich} alt="Sandwich" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
