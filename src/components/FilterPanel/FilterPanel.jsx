import React from "react";
import "./FilterPanel.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MdExpandMore, MdOutlineStarPurple500 } from "react-icons/md";
import { filterOptions } from "../../const";

const FilterPanel = ({ filterValues, setFilterValues }) => {
  const handleFilterChange = (e, category) => {
    let newData = { ...filterValues };
    const { checked, value } = e.target;
    let val;
    val = category === "rating" ? Number(value) : value;
    if (checked) {
      newData[category].push(val);
    } else {
      const filteredItems = newData[category].filter((x) => x !== value);
      newData[category] = [...filteredItems];
    }
    setFilterValues(newData);
  };

  const clearFilter = () => {
    setFilterValues({
      brand: [],
      discount: [],
      sizes: [],
      rating: [],
    });
  };
  return (
    <div className="filter-conatiner">
      <div className="filter">
        <div className="filter-header">
          <h3 className="title">Filters</h3>
          {filterValues.brand.length ||
          filterValues.discount.length ||
          filterValues.sizes.length ||
          filterValues.rating.length ? (
            <button onClick={clearFilter}>Clear All</button>
          ) : null}
        </div>

        <div className="filter-options">
          {filterOptions &&
            filterOptions.map((x, i) => (
              <Accordion key={i}>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls={`panel${i}-content`}
                  id={`panel${i}-header`}
                  sx={{ textTransform: "capitalize" }}
                >
                  {x.name === "ratings" ? "Customer Ratings" : x.name}
                </AccordionSummary>
                <AccordionDetails>
                  {x.filters.map((y, i) => {
                    return (
                      <div className="filter-item" key={i}>
                        <input
                          type="checkbox"
                          onChange={(e) => handleFilterChange(e, x.name)}
                          value={y}
                          checked={filterValues[x.name]?.includes(y)}
                        />
                        {x.name === "ratings" ? (
                          <label>
                            {y} <MdOutlineStarPurple500 /> & above
                          </label>
                        ) : (
                          <label>{y}</label>
                        )}
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
