import { useState } from "react";
import SectionTitle from "./SectionTitle";
import dish from "./images/dish.png";
import transition from "./images/transition.png";
import restaurantVideo from "./video/restaurant-video.mp4";
import bgImage from "./images/restaurant.jpg";
import "./Shared.css";
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
const Reservation = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  console.log(setCurrentDate);
  return (
    <div>
      <SectionTitle subTitle={"Booking Table"} title={"Make A Reservation"} />
      <div className="mt-24 mb-40 flex flex-col md:flex-row">
        <div className="flex  relative justify-center md:justify-normal ">
          <div className="flex items-start image-div">
            <img
              className="absolute image-1 md:top-8 w-32 md:w-48 top-4"
              src={transition}
              alt=""
            />
            <img src={dish} alt="" />
          </div>
          <div className="absolute left-48 top-48 md:left-96 md:top-96">
            <video
              className="  bg-gray-950 w-32 h-32  md:w-60 md:h-60 rounded-full  "
              autoPlay
              loop
              muted
              // controls
              src={restaurantVideo}
              type="video/mp4"
            ></video>
          </div>
        </div>
        <div
          className="items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: "rgba(14, 14, 14, 0.405)",
            padding: "10px 50px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            // maxWidth: "50%",
          }}
        >
          <h1 className="uppercase text-2xl text-white py-4 font-bold">
            Make A Reservation
          </h1>
          <div className="flex gap-4">
            <input
              type="text"
              className="p-3  w-72 outline-none rounded-sm"
              placeholder={currentDate}
              id=""
            />
            <input
              type="text"
              className="p-3  w-72 text-sm outline-none rounded-sm"
              placeholder={"Give Us A Your Wish Time"}
              id=""
            />
          </div>
          <br />
          <input
            type="number"
            className="p-3  w-[590px] outline-none rounded-sm"
            placeholder={"Give Us A Your Wish Time"}
            id=""
          />
          <br /> <br />{" "}
          <textarea
            name="text"
            id=""
            placeholder="Write Message"
            className="w-[590px] p-3 outline-none rounded-sm"
            rows="5"
          ></textarea>
          <br />
          <br />
          <button className="btn uppercase text-xl bg-red-600 hover:bg-slate-800 border-none rounded-sm text-white px-6">
            send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
