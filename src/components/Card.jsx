import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <Link to={`/shop/${item.id}`}>
        <Box className="w-[300px] h-[470px]  py-1 bg-slate-200 flex flex-col">
          <div className="w-[300px] h-[370px] overflow-hidden">
            <img
              src={item.image}
              alt="products"
              width={"100%"}
              height={"100%"}
              className="object-cover"
            />
          </div>
          <div className="w-[100%] text-left px-2 pt-2">
            <p>{item.category}</p>
            <p>$ {item.price}</p>
          </div>
          <div className="w-[100%] text-left px-2 pt-2">
            <p className="px-2 py-1 text-lime-50 bg-black rounded-md w-fit">
              {item.size}
            </p>
          </div>
        </Box>
      </Link>
    </>
  );
};

export default Card;
