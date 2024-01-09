import SectionTitle from "../../../Shared/SectionTitle";
import useMenus from "../../../hooks/useMenus";
import MenuCategory from "../../../Shared/MenuCategory";

const Items = () => {
  const [menu] = useMenus();
  const popular = menu.filter((item) => item.popular === "popular");
  return (
    <div>
      <div>
        <div>
          <SectionTitle
            subTitle={"Best Food Menu"}
            title={"Our best food menus"}
          ></SectionTitle>
        </div>
        <MenuCategory item={popular} />
      </div>
    </div>
  );
};

export default Items;
