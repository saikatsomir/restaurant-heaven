import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Shared/Shared.css";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const OrderMenu = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="">
      <div className=" card w-72 card-compact text-start h-96 bg-base-100 shadow-xl rounded-none hover:border hover:border-red-500 ease-in duration-700 shopCard">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <span className="bg-red-200 text-red-600 font-mono font-bold text-lg py-1 px-3 w-fit rounded-sm">
            ${price}
          </span>
          <h2 className="card-title uppercase">{name}</h2>
          <p className="text-xs">{recipe}</p>
          {/* <div className="card-actions justify-start">
            <button className="btn btn-primary">Add To Bookin</button>
          </div> */}
          <div className="shopHover pt-20">
            <div className="flex flex-col items-end gap-y-4 cardCart">
              <section className="cardCartBox">
                <section className="cardCartBoxHover text-white">
                  Quick View
                </section>
                <FontAwesomeIcon
                  className="cartIcon"
                  icon={faEye}
                  style={{ color: "#ffffff" }}
                  size="xl"
                />
              </section>
              <section className="cardCartBox">
                <section className="cardCartBoxHover text-white">
                  Add To Cart
                </section>
                <FontAwesomeIcon
                  className="cartIcon"
                  icon={faCartShopping}
                  style={{ color: "#ffffff" }}
                  size="xl"
                />
              </section>
              <section className="cardCartBox">
                <section className="cardCartBoxHover text-white">
                  Add Wishlist
                </section>
                <FontAwesomeIcon
                  className="cartIcon"
                  icon={faHeartCircleCheck}
                  style={{ color: "#ffffff" }}
                  size="xl"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
