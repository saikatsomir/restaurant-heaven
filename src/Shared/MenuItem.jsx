const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex item-image ">
      <img
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        className="  rounded-full border-8 border-white  w-32 h-32 i-img"
        src={image}
        alt={name}
      />
      <div className="pl-4">
        <div className="text-xl cursor-pointer font-bold font-mono hover:text-red-600 text-black flex justify-between">
          <p>{name} &nbsp;&nbsp;</p>
          <button className=" py-1 px-4 rounded-md bg-red-100 text-red-600 h-10">
            ${price}
          </button>
        </div>
        <h1>{recipe}</h1>
      </div>
    </div>
  );
};

export default MenuItem;
