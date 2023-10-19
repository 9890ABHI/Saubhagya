import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ratings } from "./Rating";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import { ShoppingButton } from "./Button";

const Card = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Link
        to={`/shop/${item.id}`}
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
      >
        <Box
          className="w-[300px] h-[470px]  flex flex-col rounded-lg overflow-hidden bg-white"
          sx={{
            boxShadow: "1px 2px 5px rgba(0, 0, 0,0.5 )",
          }}
        >
          <div className=" overflow-hidden">
            <img
              src={item.image}
              alt="products"
              className="w-[300px] h-[370px] object-cover"
              style={
                {
                  // filter: "grayScale(50%)",
                }
              }
            />
          </div>
          <div>
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
                <div className="w-full flex justify-between items-center">
                  <div className="w-[20%] flex justify-center items-center">
                    <FavoriteBorder />
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

export default Card;
