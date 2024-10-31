import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import "./WishListSection.scss";
import { AppContext } from "../../context/context";

const WishListSection = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentUser, wishlist } = state;
  const handleDelete = (product) => {
    if (currentUser !== null) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    }
  };

  return (
    <div className="wishlist-container">
      <h3 className="title">{`My WishList (${wishlist?.length})`}</h3>
      <div className="list-wrapper">
        {wishlist.map((item) => (
          <div className="wishlist-card">
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="details-section">
              <div className="details">
                <p>{item.title}</p>
                <div className="ratings-container">
                  <div className="ratings">{item.rating.rate}</div>{" "}
                  <span className="ratings-number">{" (112)"}</span>
                </div>
                <div className="price-container">
                  <span>₹ {item.price}</span>{" "}
                  <span>₹ {item.originalPrice}</span>{" "}
                  <span className="offer">{item.offer}off</span>
                </div>
              </div>
              <div onClick={() => handleDelete(item)}>
                <MdDelete />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListSection;
