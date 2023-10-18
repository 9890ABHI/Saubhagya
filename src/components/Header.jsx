import {
  FavoriteBorder,
  Logout,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IconButton, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducer";

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const Mobile = useMediaQuery("(max-width: 640px)");
  const handleLogout = () => {
    dispatch(logout());
    navigation("#/login");
  };
  return (
    <>
      <div className="w-[100%] h-[75px] flex justify-between items-center border-b-[1px] border-black px-10 max-sm:hidden">
        <div className="pl-2">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={require("../assets/logo.png")}
              alt="Company logo"
              width={150}
              height={30}
              className="object-contain rounded-sm px-2"
            />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex gap-4 pr-2 items-center">
          <Link>
            <FavoriteBorder sx={{ color: "black" }} />
          </Link>
          <Link>
            <ShoppingCartOutlined sx={{ color: "black" }} />
          </Link>
          <Link to={"/login"}>
            <PersonOutline sx={{ color: "black" }} />
          </Link>
          <IconButton onClick={() => handleLogout}>
            <Logout sx={{ color: "black" }} />
          </IconButton>
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
