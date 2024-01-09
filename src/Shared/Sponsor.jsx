import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brand1 from "./images/brand1.svg";
import brand2 from "./images/brand2.svg";
import brand3 from "./images/brand3.svg";
import brand4 from "./images/brand4.svg";
import brand5 from "./images/brand5.svg";
import brand6 from "./images/brand6.svg";
import brand7 from "./images/brand7.svg";
const Sponsor = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-lg mx-auto  my-14">
      <div className="divider">Global 3K+ Happy Sponsors With us</div>

      <Slider {...settings}>
        <div>
          <img className="cursor-pointer" src={brand1} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand2} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand3} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand4} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand5} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand6} alt="" />
        </div>
        <div>
          <img className="cursor-pointer" src={brand7} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sponsor;
