import CoverBanner from "../../../Shared/CoverBanner";
import Order from "../Order/Order";
import coverBannerImage from "./shopBanner.jpg";
import "../../../Shared/Shared.css";
import Sponsor from "../../../Shared/Sponsor";
import DownloadApp from "../../../Shared/DownloadApp";

const ShopHome = () => {
  return (
    <div>
      <CoverBanner
        coverBannerImage={coverBannerImage}
        subTitle={"our shop"}
        title={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
      />
      <Sponsor />
      <br />
      <br />
      <Order />
      <DownloadApp />
      <br />
      <br />
    </div>
  );
};

export default ShopHome;
