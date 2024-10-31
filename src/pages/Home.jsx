import React, { useContext, useState } from "react";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import ProductSection from "../components/ProductSection/ProductSection";
import { AppContext } from "../context/context";
import Header from "../components/Header/Header";

const Home = () => {
  const { state } = useContext(AppContext);
  const { products, loading } = state;
  const [sortVal, setSortVal] = useState("");
  const [filterValues, setFilterValues] = useState({
    brand: [],
    discount: [],
    sizes: [],
    rating: [],
  });
  const renderProducts = () => {
    let filteredProducts = products;
    if (sortVal) {
      if (sortVal === "ascending")
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      if (sortVal === "descending")
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (filterValues.brand.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        filterValues.brand.includes(item.brand)
      );
    }
    if (filterValues.discount.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        filterValues.discount.includes(item.offer)
      );
    }
    if (filterValues.sizes.length > 0) {
      filteredProducts = filteredProducts.filter((item, i) =>
        filterValues.sizes.map((x) => item.sizes.includes(x)).includes(true)
      );
    }
    if (filterValues.rating.length > 0) {
      filteredProducts = filteredProducts.filter((item) => {
        return filterValues.rating.some((y) => y < item.rating.rate);
      });
    }

    return filteredProducts;
  };

  return (
    <>
      <Header />
      <div className="layout">
        <FilterPanel
          sortVal={sortVal}
          setSortVal={setSortVal}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
        />
        <ProductSection
          loading={loading}
          sortVal={sortVal}
          setSortVal={setSortVal}
          products={renderProducts()}
        />
      </div>
    </>
  );
};

export default Home;
