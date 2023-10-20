import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
import { Add, Delete, Remove } from "@mui/icons-material";
import { ProductPricing } from "../components/Informations";
import { CartCard } from "../components/Card";

const Cart = () => {
  const [products, setProducts] = useState(Clothingproducts);
  const [quantity, setQuantity] = useState(1);

  const prods = products.slice(0, 4);
  const [filterProds, setFilterProds] = useState(prods);
  let sum = 0;
  let ogprice = 0;
  // iterate over each item in the array
  for (let i = 0; i < filterProds.length; i++) {
    // if (quantity > 0) {
    sum += filterProds[i].price;
    ogprice += filterProds[i].oldPrice;
    // }
  }
  const disccount = ogprice - sum;

  // useEffect(() => {
  //   const responce = prods.filter(removeItem);
  //   setFilterProds(responce);
  //   console.log("element remove useEffect");
  // }, []);

  return (
    <>
      <Box className="flex justify-around items-start bg-[#f2f2f2]">
        <Box className="w-[70%] flex flex-col justify-center items-center gap-2">
          {filterProds.map((item) => (
            <>
              <CartCard
                item={item}
                prods={prods}
                setFilterProds={setFilterProds}
                filterProds={filterProds}
              />
            </>
          ))}
        </Box>
        <Box
          className="w-[400px] h-[450px] "
          sx={{ border: "1px solid black" }}
        >
          <Box>
            <Typography className="text-xl">
              Total Purches {filterProds.length}
            </Typography>
            {sum} {ogprice} {disccount}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default Cart;
