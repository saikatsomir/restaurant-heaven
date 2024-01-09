import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import image1 from "./images/today-item1.jpg";
import image2 from "./images/today-item2.jpg";
import image3 from "./images/today-item3.jpg";
import SectionTitle from "./SectionTitle";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function getDate() {
  const today = new Date();
  //   const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const monthName = monthNames[today.getMonth()];
  return `${date} ${monthName}, ${year}`;
}
const TodaysSpecial = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  console.log(setCurrentDate);

  return (
    <div className="max-w-screen-lg mx-auto pb-20">
      <div className="mb-10">
        <SectionTitle subTitle={"Blog & News"} title={"Get Update Our Foods"} />
      </div>
      <div className="carousel carousel-center gap-8">
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                This is trendy restaurant that
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                10 Reasons to do digital detox
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                New Restaurant Town Our ple Award{" "}
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image2} alt="Shoes" />
            </figure>

            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                This is trendy restaurant that
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                10 Reasons to do digital detox
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="card w-80 bg-base-100 mb-10 "
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <figure>
              <img src={image3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title capitalize md:text-2xl font-bold">
                New Restaurant Town Our ple Award{" "}
              </h2>
              <span className="text-base text-red-500">{currentDate}</span>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="divider text-gray-300 py-0 my-0">x</div>
              <a className="uppercase w-fit font-semibold text-red-600 font-mono border-none">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysSpecial;
