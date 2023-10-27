import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ratings } from "./Rating";
import {
  Add,
  Delete,
  FavoriteBorder,
  Remove,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { QuantityButtton, ShoppingButton } from "./Button";

export const Card = ({ item }) => {
  const [show, setShow] = useState(false);
  
  const Mobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Link
        to={`/shop/${item.id}`}
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
      >
        <Box
          className="h-[200px] w-[100px] md:h-[430px] flex flex-col rounded-md overflow-hidden bg-white"
          sx={{
            width: 270,
            boxShadow: "1px 2px 5px rgba(0, 0, 0,0.5 )",
          }}
        >
          <div className=" overflow-hidden">
            <img
              src={item.image}
              alt="products"
              className="w-[100%] h-[370px] object-cover"
              style={
                {
                  // filter: "grayScale(50%)",
                }
              }
            />
          </div>
          <div className="hidden md:block">
            <div className="w-[100%] px-2 pt-2 text-black">
              <p>{item.category}</p>
              <div className="flex w-[100%] gap-1 justify-center">
                <p>MRP: ₹</p>
                <p>{item.price}</p>
              </div>
            </div>
            <div className="w-[100%] text-left px-2 py-2 justify-center ">
              {/* <p
                className="px-2 py-1 text-lime-50 rounded-md w-fit"
                style={{
                  background: "linear-gradient(to left,  #f88b69, #f7797d)",
                }}
              >
                {item.size}
              </p> */}
              <Ratings product={item.rating} />
            </div>
            {show && (
              <>
                <div
                  className="w-full flex justify-between items-center  "
                  style={{ borderTop: "1px solid rgba(0,0,0,0.2)" }}
                >
                  <div className="w-[20%] flex justify-center items-center ">
                    <FavoriteBorder
                      sx={{
                        ":hover": {
                          color: "#f88b69",
                        },
                      }}
                    />
                  </div>
                  <div className="w-[80%]">
                    <ShoppingButton
                      title={"Add To Cart"}
                      icon={<ShoppingCartOutlined fontSize={"9px"} />}
                      sizes
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </Box>
      </Link>
    </>
  );
};

export const CartCard = ({ item, setFilterProds, filterProds }) => {
  const [quantity, setQuantity] = useState(1);

  const removeItem = (id) => {
    const responce = filterProds.filter((prod) => prod.id != id);
    // console.log(responce);
    setFilterProds(responce);
  };

  return (
    <>
      <Box
        className="px-4 py-2 w-[700px] rounded-md"
        sx={{ boxShadow: "0px 0px 7px rgba(0,0,0,0.2)" }}
      >
        <Box className="flex items-center overflow-hidden justify-between ">
          <Box className="w-[20%]">
            <img
              src={item.image}
              alt=""
              className="w-[100px] h-[100px] object-cover overflow-hidden rounded-md"
            />
          </Box>
          <Box className="w-[60%] text-left pl-5 ">
            <Typography sx={{ fontFamily: "Regular" }}>
              {item.title.length >= 70
                ? item.title.slice(0, 70) + "..."
                : item.title}
            </Typography>
            <Box className="flex justify-between">
              <Box className="flex gap-2 items-center">
                <Button
                  variant="outlined"
                  onClick={() => setQuantity(quantity - 1)}
                  sx={{
                    width: 20,
                  }}
                >
                  <Remove />
                </Button>
                <Typography className="w-3">{quantity}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Add />
                </Button>
              </Box>
              <Button
                startIcon={<Delete color="error" />}
                onClick={() => removeItem(item.id)}
                className="flex items-center"
              >
                Delete
              </Button>
            </Box>
          </Box>
          <Box className="w-[20%]">
            <Typography
              variant="body2"
              className="text-sm mt-2 pb-1"
              sx={{ fontFamily: "Light" }}
            >
              ₹ {item.price * quantity} /-
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
