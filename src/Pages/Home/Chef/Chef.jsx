import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Shared/SectionTitle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import chef1 from "./chef.jpeg";
import chef2 from "./chef.jpg";
import chef3 from "./chef1.avif";
import chef4 from "./chef2.avif";
import chef5 from "./chef2.jpg";
import { useEffect, useState } from "react";
import "../../../Shared/Shared.css";
const Chef = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setValue(1);
    } else {
      setValue(4);
    }
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto mt-20">
      <SectionTitle
        subTitle={"Expert Chefs"}
        title={"Meet Our Expert Chefs"}
      ></SectionTitle>
      <div>
        <Swiper
          autoplay={true}
          slidesPerView={value}
          spaceBetween={30}
          freeMode={true}
          className="md:mt-10 mb-20"
        >
          <SwiperSlide>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="card1 m-16 md:m-0"
            >
              <img src={chef1} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in-right" className="card1 m-16 md:m-0">
              <img src={chef2} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in-left" className="card1 m-16 md:m-0">
              <img src={chef3} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in-up" className="card1 m-16 md:m-0">
              <img src={chef4} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div data-aos="zoom-in-down" className="card1 m-16 md:m-0">
              <img src={chef5} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="card1 m-16 md:m-0"
            >
              <img src={chef1} className="w-6/6 md:w-[250px] chef-img" alt="" />
              <div className="card-body card-body2 flex justify-end">
                <h1 className="text-white font-mono text-lg w-fit p-2 md:p-2 rounded-t-lg bg-red-600 ">
                  Senior Chief
                </h1>

                <span className=" bg-white p-4 rounded ">
                  <p className="text-xl text-black-600 font-mono font-semibold pb-6 ">
                    Mari Curse
                  </p>
                  <nav className="flex gap-3 text-4xl">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className="fill-current rounded-full p-2 border-2 border-gray-400 cursor-pointer"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </nav>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Chef;
