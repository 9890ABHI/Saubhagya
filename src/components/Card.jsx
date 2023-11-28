import { Box, Button, Typography } from "@mui/material";
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
import { ShoppingButton } from "./Button";
import { useDispatch } from "react-redux";
import { UpdateCartProduct } from "../Store/actions";

export const Card = ({ item }) => {
  const [show, setShow] = useState(false);
  const offerOfProduct = Math.round(
    ((item.oldPrice - item.price) / item.oldPrice) * 100
  );

  // const Mobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <Link
        to={`/shop/${item.id}`}
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Box className="h-[300px] max-sm:w-[140px] md:w-[260px] md:h-[430px] flex flex-col rounded-sm md:rounded-md overflow-hidden bg-white shadow-md">
          <div className=" overflow-hidden">
            <img
              src={item.image}
              alt="products"
              className="w-[100%] h-[180px]md:w-fit md:h-[370px] object-cover"
            />
          </div>
          <div
          // className="hidden md:block"
          >
            <div className="w-[100%] px-2 pt-2 text-black flex flex-col-reverse">
              <Typography
                variant="subtitle2"
                className="text-sm hidden md:flex"
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle2"
                className="text-sm flex md:hidden"
              >
                {item.title.slice(0, 50) + "..."}
              </Typography>
              <div className="flex flex-col w-[100%] gap-1 justify-start md:justify-center md:flex-col-reverse">
                <Box className="flex gap-2 ">
                  <Typography variant="subtitle2" className="text-red-400">
                    {offerOfProduct}%
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="line-through text-gray-400"
                  >
                    ₹ {item.oldPrice}{" "}
                  </Typography>
                </Box>
                <Box className="flex">
                  <Typography
                    variant="subtitle2"
                    className="text-sm text-gray-800"
                  >
                    MRP: ₹
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="text-sm text-gray-700"
                  >
                    {item.price}
                  </Typography>
                </Box>
                <hr className="w-[100%] py-1 md:hidden" />
              </div>
            </div>
            <div className="w-[100%] text-left px-2 py-2 justify-center hidden md:block">
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
            {show ? (
              <>
                <div
                  className="w-full  justify-between items-center hidden md:flex "
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
            ) : undefined}
          </div>
        </Box>
      </Link>
    </>
  );
};

export const CartCard = ({
  item,
  Feature,
  cart,
  total,
  setTot,
  price
}) => {
  const [quantity, setQuantity] = React.useState(item.quntity);
  const dispatch = useDispatch();
  // React.useEffect(() => {setTotal(quantity * price + total)} , [quantity])
  React.useEffect(() => {
    setTot(quantity * price + total);
  }, [cart]);
  console.log('settotal in card',setTot);
  
  function handleRemove(id) {
    quantity <= 1 ? removeItem(id) : setQuantity(quantity - 1);
  }
  
  const removeItem = (id) => {
  //   const responce = filterProds.filter((prod) => prod.id !== id);
  //   // console.log(responce);
  //   setFilterProds(responce);
  };
  return (
    <>
      <Box
        className="p-2 md:px-4 md:py-2 md:w-full rounded-md bg-[#fff]"
        // sx={{ boxShadow: "0px 0px 7px rgba(0,0,0,0.2)" }}
      >
        <Box className="flex items-center overflow-hidden justify-between ">
          <Box className="md:w-[20%]">
            <img
              src={item?.image}
              alt=""
              className={`w-[100px] h-[100px] object-fill overflow-hidden rounded-md ${
                Feature && "w-[85px] h-[95px ]"
              }`}
            />
          </Box>
          <Box
            className={` w-[70%] md:w-[90%] flex justify-between items-center text-left`}
          >
            <Box className={`w-[50%] md:w-[80%]  ${Feature && "w-[75%] pl-2"}`}>
             <Typography sx={{ fontFamily: "Regular" }} className="hidden max-sm:flex ">
              {
                Feature && (
                 item.title.slice(0, 20) + "..."
                )
              }
              
            </Typography>
             {/* <Typography sx={{ fontFamily: "Regular" }} className="max-sm:hidden">
              {
                Feature ? (
                  item?.title.length >= 40
                ? item?.title.slice(0, 40) + "..."
                : item?.title
                ) : (
                  item?.title.length >= 90
                  ? item?.title.slice(0, 90) + "..."
                : item?.title
                )
              }
              
            </Typography> */}
              <Box
                className={`flex ${Feature && "hidden"} justify-between pt-3`}
              >
                <Box className="flex gap-2 items-center">
                  {/* <Button
                  variant="outlined"
                  
                  sx={{
                    width: 20,
                  }}
                  > */}
                  <Box className="flex px-3 py-2 rounded-md border ">
                    <Remove
                      onClick={() => {
                        setQuantity(quantity - 1);
                        console.log(quantity);
                        cart.map((item) => {
                          console.log(item);
                          if (item.id === item.id) {
                            item.quntity = quantity - 1;
                          }
                        });
                        console.log(cart);
                        dispatch(UpdateCartProduct(cart));
                      }}
                      color="primary"
                    />
                  </Box>
                  {/* </Button> */}
                  <Box className="flex px-3 py-2 rounded-md border ">
                    <Typography>{quantity}</Typography>
                  </Box>
                  {/* <Button
                  variant="outlined"
                  
                  > */}
                  <Box className="flex px-3 py-2 rounded-md border ">
                    <Add
                      onClick={() => {
                        setQuantity(quantity + 1);
                        console.log(quantity);
                        cart.map((item) => {
                          console.log(item);
                          if (item.id === item.id) {
                            item.quntity = quantity + 1;
                          }
                        });
                        console.log(cart);
                        dispatch(UpdateCartProduct(cart));
                      }}
                      // () => setQuantity(quantity + 1)

                      color="primary"
                    />
                  </Box>
                  {/* </Button> */}
                </Box>
                <Button
                  variant="text"
                  // startIcon={<Delete color="error" />}
                  onClick={() => removeItem()}
                  className="flex items-center md:pr-10 max-sm:pl-10"
                  sx={{
                    ":hover": {
                      color: "red",
                    },
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Box>
            <Box
              className={` ${
                Feature
                  ? "w-[55%] flex flex-col gap-2 justify-between pl-2"
                  : " w-[80%] md:w-[20%] max-sm:pl-6 max-sm:pb-6 pl-6"
              }`}
            >
              <Typography
                variant="body1"
                className="text-sm font-semibold "
                // sx={{ fontFamily: "" }}
              >
                ₹ {item?.price * quantity} /-
              </Typography>
              {Feature && (
                <>
                  <Button
                    variant="contained"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#000",
                      "&.MuiButton-root": {
                        // background: "linear-gradient(to left,  #f88b6965, #c90f7270)",
                        background:
                          "linear-gradient(to right,  #c90f72, #c90f7290)",
                      },
                      fontSize: 10,
                      fontWeight: 700,
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {/* <ShoppingCart sx={{fontSize:10}} /> */}
                    Add to Cart
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const OrderCard = ({ item }) => {
  return (
    <>
      <Box className="flex justify-between md:w-full max-sm:w-[95%] items-center md:px-10 px-3 py-2 bg-[#fff] rounded-md">
        <Box>
          <img
            className="md:w-[100px] md:h-[100px] object-cover rounded-md"
            alt=""
            src={item.image}
          />
        </Box>
        <Box className="flex max-sm:flex-col w-full pl-10 max-sm:pl-5 justify-between md:items-center">
          {/* <Box */}
            {/* <Typography >
          {item.title}
        </Typography> */}
            <Typography sx={{ fontWeight: 400 , color:'GrayText' }}>₹ {item.price}</Typography>
          {/* </Box> */}
          <Box className="flex flex-col justify-start items-start">
            <Typography>Deliverd on Nov 01,2023</Typography>
            <Typography>your item has been deliver</Typography>

            <Ratings product={item.rating} ratings={item.ratings} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
