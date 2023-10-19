import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
import { Delete } from "@mui/icons-material";

const Cart = () => {
  const [products, setProducts] = useState(Clothingproducts);

  const prods = products.slice(0, 4);

  const totalprice = 0;
  for (let i = 0; i < prods.lenth; i++) {
    totalprice += prods[i].price;
  }

  return (
    <>
      <Box>
        <Box className="flex flex-col justify-center items-center">
          {totalprice}
          {prods.map((item) => (
            <>
              <Box className="px-4 py-2">
                <Box className="flex items-center overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[100px] h-[100px] object-cover overflow-hidden rounded-md"
                  />
                  <Box className="w-[50%] text-left pl-5">
                    <Typography>{item.title}</Typography>
                    <Typography className="font-semibold">
                      {item.price}
                    </Typography>
                  </Box>
                  <Box>
                    <Button>
                      Delete Item
                      <Delete color="error" />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        </Box>
        <Box>
          <Box>
            <Typography className="text-xl"></Typography>
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
