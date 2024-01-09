import OrderMenu from "../OrderMenu/OrderMenu";
const OrderFetch = ({ items }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 justify-center align-center items-center gap-y-9 max-w-screen-lg  mx-auto my-20">
      {items.map((item) => (
        <OrderMenu key={item._id} item={item}></OrderMenu>
      ))}
    </div>
  );
};

export default OrderFetch;
