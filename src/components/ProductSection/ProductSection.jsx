import React from "react";
import "./ProductSection.scss";
import SingleCard from "../SingleCard/SingleCard";
import { sortBy } from "../../const";

const ProductSection = ({ products, loading, sortVal, setSortVal }) => {
  return (
    <div className="product-container">
      <h3>Clothing</h3>
      <div className="sort-container">
        <span>Sort by</span>
        {sortBy.map((x) => (
          <div
            key={x.id}
            className={
              x.type == sortVal ? "active-sort-tab" : "inactive-sort-tab"
            }
            onClick={() => setSortVal(x.type)}
          >
            {x.name}
          </div>
        ))}
      </div>
      {!loading ? (
        <div className="product-list">
          {products?.map((item) => (
            <SingleCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div style={{ margin: "10px auto" }}>Loading...</div>
      )}
    </div>
  );
};

export default ProductSection;
