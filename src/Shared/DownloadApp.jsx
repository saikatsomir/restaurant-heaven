import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import downloadBg from "./images/download_bg_2.jpg";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
const DownloadApp = () => {
  return (
    <div className=" justify-center mx-16 rounded-3xl">
      <section
        className="relative"
        style={{
          backgroundImage: `url(${downloadBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "375px",
        }}
      >
        <div className="absolute top-24 left-20 ">
          <h1 className="capitalize text-4xl text-black font-mono font-bold">
            Download food app For <br /> order today
          </h1>
          <br />
          <section className="flex gap-4 items-center">
            <button className="bg-red-600 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700">
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="3x"
                style={{ color: "#ffffff" }}
              />
              <div>
                <h1 className="uppercase text-xs text-white">Download From</h1>
                <h1 className="text-xl text-white font-bold">Google Play</h1>
              </div>
            </button>
            <button className="bg-orange-500 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700">
              <FontAwesomeIcon
                icon={faApple}
                size="3x"
                style={{ color: "#ffffff" }}
              />
              <div>
                <h1 className="uppercase text-xs text-white">Download From</h1>
                <h1 className="text-xl text-white font-bold">Google Play</h1>
              </div>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DownloadApp;
