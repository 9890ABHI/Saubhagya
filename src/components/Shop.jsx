import { Box, IconButton, Typography } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Close, Filter } from "@mui/icons-material";
import { Card } from "./Card";
// import { setProducts as setProductAction } from "../redux/actions/productActions";

const Shop = ({ title }) => {
  const Secondaryproducts = useSelector((state) => state);
  console.log("all products", Secondaryproducts);
  const dispatch = useDispatch();

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
    priceRange: [0, 400],
  });

  useEffect(() => {
    // Fetch products from an API or set products in state
    // Example: fetchProducts().then((data) => setProducts(data));
    setProducts(Clothingproducts);
    // dispatch(setProductAction(filteredProducts));
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
      <div className="flex w-[100%]  bg-[#f2f2f2] justify-around pt-5 gap-5 px-20">
        {/* Filters */}

        <Box className="w-[250px] h-screen  flex flex-col pl-0 text-left">
          <Box className="bg-white w-[100%] px-2 py-5 rounded-md">
            {/* <div className="text-center mb-7">
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "SemiBold",
                  color: "GrayText",
                  mx: 2,
                }}
              >
                Filters
              </Typography>
            </div>
            <hr
              style={{ borderTop: "1px solid rgba(248, 139, 105,0.5 )" }}
              className="w-[100%]"
            /> */}
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
              {FilterData(
                Occasions,
                "occasions",
                filters,
                handleCheckboxChange
              )}
              {FilterData(Looks, "looks", filters, handleCheckboxChange)}
            </Box>
          </Box>
        </Box>

        {/*  */}

        {/* filter products */}

        <Box className="w-[75%] flex justify-end pb-10 h-screen">
          <Box className="w-[100%] h-[100%] flex flex-wrap gap-5 justify-between overflow-scroll">
            {filteredProducts.map((item) => (
              <>
                <Card item={item} />
              </>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Shop;
