import { Helmet } from "react-helmet";
import DownloadApp from "../../../Shared/DownloadApp";
import Reservation from "../../../Shared/Reservation";
import Sponsor from "../../../Shared/Sponsor";
import Testimonial from "../../../Shared/Testimonial";
import TodaysSpecial from "../../../Shared/TodaysSpecial";
import AboutRestaurant from "../AboutRestaruant/AboutRestaurant";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category />
      <AboutRestaurant />
      <Items />
      <Chef />
      <Sponsor />
      <TodaysSpecial />
      <Reservation />
      <br />
      <br />
      <DownloadApp />
      <Testimonial />
    </div>
  );
};

export default Home;
