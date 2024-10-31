import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaUser, FaPowerOff } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { RiContactsBookUploadFill } from "react-icons/ri";
import "./ProfileSection.scss";

const ProfileSection = () => {
  return (
    <div className="profile-container">
      <div className="card first-card">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
          alt="avatar"
        />
        <h3>Hello</h3>
      </div>
      <div className="second-card">
        <div className="card-item">
          <div className="item-list">
            <RiContactsBookUploadFill /> <span> My Orders</span>
          </div>
        </div>
        <div className="card-item">
          <div className="item-list">
            <FaUser />
            <span> Account Settings</span>
          </div>
          <div className="sub-item-list">
            <div>My Information</div>
            <div>Manage Address</div>
          </div>
        </div>
        <div className="card-item">
          <div className="item-list">
            <MdAccountBalanceWallet />
            <span>Payments</span>
          </div>
          <div className="sub-item-list">
            <div>Gift Cards</div>
            <div>Saved UPI</div>
          </div>
        </div>
        <div className="card-item">
          <div className="item-list">
            <BiSolidContact />
            <span>My Stuff</span>
          </div>
          <div className="sub-item-list">
            <div>My Coupons</div>
            <div>Wishlist </div>
          </div>
        </div>
        <div className="card-item">
          <div className="item-list">
            <FaPowerOff />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
