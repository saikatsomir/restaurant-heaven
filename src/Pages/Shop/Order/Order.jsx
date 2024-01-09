import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../../../hooks/useMenus";
import OrderFetch from "./OrderFetch";
import "../../../Shared/Shared.css";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salad", "pizza", "soups", "drinks", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenus();
  // console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="text-center">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"border-none font-mono uppercase font-semibold"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Drinks</Tab>
          <Tab>Dessert</Tab>
        </TabList>

        <TabPanel>
          <OrderFetch items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderFetch items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderFetch items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderFetch items={drinks} />
        </TabPanel>
        <TabPanel>
          <OrderFetch items={dessert} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
