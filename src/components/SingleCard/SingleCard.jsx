import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import "./SingleCard.scss";
import { AppContext } from "../../context/context";
import { Snackbar } from "@mui/material";

const SingleCard = ({ product }) => {
  const { state, dispatch } = useContext(AppContext);
  const { currentUser, wishlist } = state;
  const {
    id,
    brand,
    image,
    price,
    originalPrice,
    offer,
    sizes,
    rating,
    title,
  } = product;
  const wishlisted = wishlist?.find((x) => x?.id === product?.id);
  const [notify, setNotify] = useState(false);

  const handleClick = () => {
    setNotify(true);
  };

  const handleClose = () => {
    setNotify(false);
  };

  const addToWishList = () => {
    if (currentUser !== null) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    } else {
      // alert("Kindly register or Login");
      handleClick();
      dispatch({ type: "SET_LOGIN_MODAL", payload: true });
    }
  };
  const removeFromWishList = () => {
    if (currentUser !== null) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    } else {
      alert("Kindly register or Login");
    }
  };

  return (
    <>
      <div className="single-card">
        <div
          className="heart-icon"
          onClick={wishlisted ? removeFromWishList : addToWishList}
        >
          <FaHeart color={wishlisted ? "#ff4343" : "grey"} />
        </div>
        <img src={image} alt={title} />
        <div className="product-details">
          <span className="brand">{brand}</span>
          <span className="name">{title}</span>
          <span className="name">{rating.rate}</span>
          <span className="price">
            <span>₹{price}</span> <span>₹{originalPrice}</span>{" "}
            <span className="offer">{offer} off</span>
          </span>
          <div className="size">
            <span>Size </span>
            {sizes && sizes.map((x) => <span key={x}>{x} </span>)}
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={notify}
        autoHideDuration={3000}
        onClose={handleClose}
        message={
          <div>
            <IoIosAlert color="red" size={20} />{" "}
            <span style={{ verticalAlign: "top" }}>
              Please login for wishlisting product.
            </span>
          </div>
        }
      />
    </>
  );
};

export default SingleCard;
