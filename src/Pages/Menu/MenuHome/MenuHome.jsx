import { Helmet } from "react-helmet";
import CoverBanner from "../../../Shared/CoverBanner";
import coverBannerImage from "../../../Shared/images/coverBannerBg.jpg";
import useMenus from "../../../hooks/useMenus";
import MenuCategory from "../../../Shared/MenuCategory";
import SectionTitle from "../../../Shared/SectionTitle";
import dessertImg from "../../../Shared/images/dessert.jpg";
import pizzaImg from "../../../Shared/images/pizza.jpg";
import saladImg from "../../../Shared/images/salad.jpg";
import Sponsor from "../../../Shared/Sponsor";
const MenuHome = () => {
  const [menu] = useMenus();

  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Restaurant || Menu</title>
      </Helmet>
      <CoverBanner
        subTitle={"Our Menu"}
        title={"Would you like to try e dish?  It's may pleasure for you"}
        coverBannerImage={coverBannerImage}
      />
      <br />
      <br />
      <br />
      <SectionTitle
        subTitle={"don't miss"}
        title={"todays offer"}
      ></SectionTitle>
      <MenuCategory item={offered} />
      <br />
      <br />
      <br />
      <MenuCategory
        coverBannerImage={dessertImg}
        item={desserts}
        subTitle={"dessert"}
        title={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <br />
      <br />
      <br />
      <MenuCategory
        coverBannerImage={saladImg}
        item={salad}
        subTitle={"salad"}
        title={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <br />
      <br />
      <br />
      <MenuCategory
        coverBannerImage={pizzaImg}
        item={pizza}
        subTitle={"pizza"}
        title={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, "
        }
      />
      <Sponsor />
      <br />
    </div>
  );
};

export default MenuHome;
