import { Link } from "react-router-dom";
import CoverBanner from "./CoverBanner";
import MenuItem from "./MenuItem";

const MenuCategory = ({ item, title, subTitle, coverBannerImage }) => {
  return (
    <div>
      {title && (
        <CoverBanner
          title={title}
          subTitle={subTitle}
          coverBannerImage={coverBannerImage}
        />
      )}
      <br />
      <div className="md:grid max-w-screen-lg mx-auto grid-cols-2 gap-10 f md:mt-10 border-dotted border-4 md:p-10 rounded-xl ">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <br />
      <div className="max-w-72 mx-auto flex justify-center">
        {title && (
          <Link to={`/shop/${subTitle}`}>
            <button className="btn uppercase rounded ">
              Order Your Favourite Food
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
