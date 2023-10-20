import {
  Close,
  FavoriteBorder,
  Logout,
  Person,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
// import { logout } from "../redux/reducers/authReducer";

const Header = () => {
  // const dispatch = useDispatch();
  const Mobile = useMediaQuery("(max-width: 640px)");
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <div
        className={`w-[100%] h-[95px] flex flex-col  max-sm:hidden ${
          openSearch && "relative"
        }`}
        style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
      >
        <img
          src={require("../assets/Shaubhgya.png")}
          className="w-screen h-8 object-fill"
        />
        <Box className="flex justify-between items-center px-10">
          <div className="pl-2 ">
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

          <Box
            className="flex gap-4 pr-2 items-center justify-end "
            sx={{ width: openSearch ? "80%" : undefined }}
          >
            <Box className="" sx={{ width: "70%" }}>
              <SearchBar />
            </Box>

            <Link>
              <IconButton>
                <FavoriteBorder sx={{ color: "#f88b69", scale: "1.2" }} />
              </IconButton>
            </Link>
            <Link>
              <IconButton>
                <Box className="absolute right-2 top-[-7px] text-xs font-medium bg-[#000000a1] text-[#f88b69] w-5 h-5 justify-items-center rounded-2xl">
                  2
                </Box>
                <ShoppingCartOutlined sx={{ color: "#f88b69", scale: "1.2" }} />
              </IconButton>
            </Link>

            <IconButton>
              <PersonOutline
                sx={{
                  color: "#f88b69",
                  scale: "1.4",
                  transition: "0.5s",
                  ":hover": { color: "#f88b69" },
                }}
              />
            </IconButton>
          </Box>
        </Box>
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
