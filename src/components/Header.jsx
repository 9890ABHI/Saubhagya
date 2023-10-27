import {
  Category,
  CategoryOutlined,
  Close,
  FavoriteBorder,
  Home,
  HomeOutlined,
  Login,
  Logout,
  Person,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { HeaderBottomData } from "../constants/index";
import LinkOptions from "./LinkOptions";
// import { logout } from "../redux/reducers/authReducer";

const Header = () => {
  // const dispatch = useDispatch();
  const Mobile = useMediaQuery("(max-width: 640px)");
  const [openSearch, setOpenSearch] = useState(false);

  // const HeaderBottomData = [
  //   { title: "Home", link: "/", icon: HomeOutlined },
  //   { title: "Category", link: "/shop", icon: CategoryOutlined },
  //   // { title: "Account", link: "/account", icon: { PersonOutline } },
  //   // { title: "Cart", link: "/cart", icon: { ShoppingCartOutlined } },
  // ];

  return (
    <>
      <Box
        className='w-full h-[105px] flex flex-col  max-sm:hidden'
        style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
      >
        <img
          src={require("../assets/Shaubhgya.png")}
          className="w-full h-8 object-fill"
        />
        <Box className="flex justify-between items-center px-10" 
        // style={{ border: "5px solid rgba(0,0,0,0.2)" }}
        >
          <div className="pl-2 ">
            {/* Logo */}
            <Link to={"/"}>
              <img
                src={require("../assets/Pisara Sarees logo.png")}
                alt="Company logo"
                // width={250}
                // height={40}
                className="w-[80px] h-[80px] object-contain rounded-sm px-2  bg-blend-multiply"
              />
              <div style={{
                height:80,
                width:80,
                backgroundImage: require('../assets/Pisara Sarees logo.png'),
                backgroundBlendMode:'screen',
              }} ></div>
            </Link>
          </div>

          <Box
            className="flex gap-4 pr-2 items-center justify-end "
            sx={{ width: openSearch ? "80%" : undefined }}
          >
            <Box className="" sx={{ width: "100%" }}>
              <SearchBar />
            </Box>

            <Button
              variant="contained"
              sx={{
                px:3,
                backgroundColor: "#ffa42f",
                color: "#000120",
                ":hover": {
                  backgroundColor: "#f88b69",
                  color: "#eee",
                },
              }}
              startIcon={<Login />}
            >
              SignIn
            </Button>

            {/* <Link>
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
            </Link> */}

            {/* <IconButton>
              <PersonOutline
                sx={{
                  color: "#f88b69",
                  scale: "1.4",
                  transition: "0.5s",
                  ":hover": { color: "#f88b69" },
                }}
              />
            </IconButton> */}
          </Box>
        </Box>
      </Box>
      {Mobile && (
        <>
          <Box className="fixed z-10 bottom-0 left-0 right-0 h-14 bg-[#f88b69] w-screen flex justify-center items-center">
            <Box className="flex justify-around items-center w-full">
              {HeaderBottomData.map((item) => {
                return (
                  <>
                    <LinkOptions
                      title={item.title}
                      icon={item.icon}
                      link={item.link}
                    />
                  </>
                );
              })}
            </Box>
          </Box>
        </>
      ) }
    </>
  );
};

export default Header;
