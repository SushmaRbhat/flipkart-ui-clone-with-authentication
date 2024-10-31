import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, Menu, MenuItem } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import {
  FaShoppingCart,
  FaUserCircle,
  FaPowerOff,
  FaHeart,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.scss";
import Login from "../Login/Login";
import { AppContext } from "../../context/context";
import { auth } from "../../firebase";

const imageUrl =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const imgurl2 =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentUser, openLoginModal } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMyAccount = (event) => {
    dispatch({ type: "SET_LOGIN_MODAL", payload: false });
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleLoginModal = () => {
    setAnchorEl(null);
    dispatch({ type: "SET_LOGIN_MODAL", payload: true });
  };

  const handleCloseLoginModal = () => {
    dispatch({ type: "SET_LOGIN_MODAL", payload: false });
  };

  const handleLogOut = () => {
    if (currentUser) {
      auth.signOut();
    }
  };

  const open1 = Boolean(anchorEl);

  return (
    <header className="header">
      <div className="logo">
        <img src={imageUrl} alt="logo" />
        <a className="link">
          <span>Explore </span> <span>Plus</span>
          <img src={imgurl2} alt="plus" />
        </a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for products and brand more" />
        <IoSearch />
      </div>
      <div className="nav-link">
        <button
          className={currentUser ? "account-btn" : "login-btn"}
          type="button"
          onClick={currentUser ? handleMyAccount : handleLoginModal}
        >
          {currentUser ? "My Account " : "Login"}
          {currentUser && (
            <span>
              <MdKeyboardArrowDown />
            </span>
          )}
        </button>
        <Menu
          anchorEl={anchorEl}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            onMouseLeave: handleClose1, // Close menu when mouse leaves the list
          }}
        >
          <MenuItem onClick={handleClose1} className="amenuItem">
            <FaUserCircle />
            <span> My Profile</span>
          </MenuItem>

          <MenuItem onClick={() => navigate("/wishlist")} className="amenuItem">
            <FaHeart />
            <span> My Wishlist</span>
          </MenuItem>

          <MenuItem onClick={handleLogOut} className="amenuItem">
            <FaPowerOff />
            <span> Logout</span>
          </MenuItem>
        </Menu>
        <Dialog
          open={openLoginModal}
          onClose={handleCloseLoginModal}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          maxWidth={"sm"}
          fullWidth
          PaperProps={{
            sx: { backgroundColor: "transparent", boxShadow: "none" },
          }}
        >
          <button className="close-button" onClick={handleCloseLoginModal}>
            &#x2715;
          </button>
          <div className="modal-container">
            <DialogContent id="dialog-description" sx={{ padding: 0 }}>
              <Login />
            </DialogContent>
          </div>
        </Dialog>
      </div>
      <div className="nav-link seller">
        <button className="account-btn" onClick={handleLogOut}>
          Become Seller
        </button>
      </div>
      <div className="nav-link">
        <button className="more-btn" type="button">
          More{" "}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </button>
      </div>
      <div className="nav-link">
        <button className="cart-btn">
          <FaShoppingCart />
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
