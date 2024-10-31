import React from "react";
import Header from "../components/Header/Header";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import WishListSection from "../components/WishList/WishListSection";

const WishList = () => {
  return (
    <>
      <Header />
      <div className="layout wishlist">
        <ProfileSection />
        <WishListSection />
      </div>
    </>
  );
};

export default WishList;
