import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <Link to={`/shop/${item.id}`}>
        <Box
          className="w-[300px] h-[470px]  flex flex-col rounded-lg overflow-hidden"
          sx={{
            boxShadow: "1px 2px 5px rgba(248, 139, 105,0.5 )",
            "& .hover": { transform: "scale(2)" },
          }}
        >
          <div className=" overflow-hidden">
            <img
              src={item.image}
              alt="products"
              className="w-[300px] h-[370px] object-cover"
            />
          </div>
          <div>
            <div className="w-[100%] text-left px-2 pt-2 text-black">
              <p>{item.category}</p>
              <p className="">{item.price}</p>
            </div>
            <div className="w-[100%] text-left px-2 pt-2 ">
              <p
                className="px-2 py-1 text-lime-50 rounded-md w-fit"
                style={{
                  background: "linear-gradient(to left,  #f88b69, #f7797d)",
                }}
              >
                {item.size}
              </p>
            </div>
          </div>
        </Box>
      </Link>
    </>
  );
};

export default Card;
