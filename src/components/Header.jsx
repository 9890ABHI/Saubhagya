import {
  FavoriteBorder,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const Mobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <div className="w-[100%] h-[75px] flex justify-between items-center border-b-[1px] border-black px-10 max-sm:hidden">
        <div className="pl-2">
          {/* Logo */}
          <img
            src={require("../assets/logo.png")}
            alt="Company logo"
            width={150}
            height={30}
            className="object-contain rounded-sm px-2"
          />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-4 pr-2">
          <Link>
            <FavoriteBorder sx={{ color: "black" }} />
          </Link>
          <Link>
            <ShoppingCartOutlined sx={{ color: "black" }} />
          </Link>
          <Link>
            <PersonOutline sx={{ color: "black" }} />
          </Link>
        </div>
      </div>
      {Mobile ? (
        <>
          <div>hiii</div>
        </>
      ) : null}
    </>
  );
};

export default Header;
