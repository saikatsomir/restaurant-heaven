import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://192.168.0.102:5000/reviews")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="mt-10">
      <SectionTitle subTitle={"What Our Client Say"} title={"Testimonial"} />
      <Swiper
        navigation={true}
        autoplay={true}
        modules={[Navigation]}
        className="mySwiper w-9/12"
      >
        {info.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-40 text-center my-20">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FontAwesomeIcon icon={faQuoteLeft} size="7x" className="pt-10" />
              <br />
              <p className="text-base">{review.details}</p>
              <h1 className="text-orange-500 text-2xl uppercase font-mono pt-4">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
