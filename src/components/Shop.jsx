import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilterDataPrice } from "./filtered";
import {
  BottomStyles,
  Category,
  Clothingproducts,
  Colors,
  Fabrics,
  Looks,
  Occasions,
  Sizes,
  Styles,
} from "../constants";

import { FilterData } from "./filtered";
import Card from "./Card";

const Shop = ({ title }) => {
  const [products, setProducts] = useState([]); // Your clothing products data
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    colors: [],
    fabrics: [],
    sizes: [],
    styles: [],
    bottomStyles: [],
    occasions: [],
    looks: [],
    priceRange: [0, 200],
  });

  useEffect(() => {
    // Fetch products from an API or set products in state
    // Example: fetchProducts().then((data) => setProducts(data));
    setProducts(Clothingproducts);
  }, []);

  useEffect(() => {
    // Apply filters whenever filter criteria change
    const filtered = products.filter((product) => {
      const {
        category,
        price,
        color,
        fabric,
        size,
        style,
        bottomStyle,
        occasion,
        look,
      } = product;
      const {
        category: selectedCategories,
        colors,
        fabrics,
        sizes,
        styles,
        bottomStyles,
        occasions,
        looks,
        priceRange,
      } = filters;

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(category)
      ) {
        return false;
      }

      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }

      if (colors.length > 0 && !colors.includes(color)) {
        return false;
      }

      if (fabrics.length > 0 && !fabrics.includes(fabric)) {
        return false;
      }

      if (sizes.length > 0 && !sizes.includes(size)) {
        return false;
      }

      if (styles.length > 0 && !styles.includes(style)) {
        return false;
      }

      if (bottomStyles.length > 0 && !bottomStyles.includes(bottomStyle)) {
        return false;
      }

      if (occasions.length > 0 && !occasions.includes(occasion)) {
        return false;
      }

      if (looks.length > 0 && !looks.includes(look)) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleCheckboxChange = (filterKey, event) => {
    setFilters({
      ...filters,
      [filterKey]: event.target.checked
        ? [...filters[filterKey], event.target.value]
        : filters[filterKey].filter((value) => value !== event.target.value),
    });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  return (
    <>
      <div className="flex w-[100%]">
        {/* Filters */}
        <Box className=" w-[30%] flex flex-col pl-10 text-left">
          <div className="w-[80%] text-center mb-3">
            <Typography variant="h4" className="font-sans">
              Filters
            </Typography>
          </div>
          <Box className="flex flex-col">
            {FilterData(Category, "category", filters, handleCheckboxChange)}
            {FilterDataPrice("Price", filters, handlePriceRangeChange)}
            {FilterData(Colors, "colors", filters, handleCheckboxChange)}
            {FilterData(Fabrics, "fabrics", filters, handleCheckboxChange)}
            {FilterData(Sizes, "sizes", filters, handleCheckboxChange)}
          </Box>

          <Box>
            {FilterData(Styles, "styles", filters, handleCheckboxChange)}
            {FilterData(
              BottomStyles,
              "bottomStyles",
              filters,
              handleCheckboxChange
            )}
            {FilterData(Occasions, "occasions", filters, handleCheckboxChange)}
            {FilterData(Looks, "looks", filters, handleCheckboxChange)}
          </Box>

          <div></div>
        </Box>
        {/*  */}

        {/* filter products */}

        <Box className="flex w-[80%] flex-wrap gap-5">
          {filteredProducts.map((item) => (
            <>
              <Card item={item} />
            </>
          ))}
        </Box>
      </div>
    </>
  );
};

export default Shop;
