import { Login, Logout, Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Box, Button, IconButton, Typography, useMediaQuery } from "@mui/material";
import { HeaderBottomData } from "../constants/index";
import LinkOptions from "./LinkOptions";
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/actions";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItem = useSelector((state) => state.auth.cart)
  // console.log(cartItem);
  // console.log(user);
  // console.log(location);
  const location = useLocation()
  const dispatch = useDispatch();
  const Mobile = useMediaQuery("(max-width: 640px)");
  const navigation = useNavigate()
  const [
    openSearch,
    //  setOpenSearch
  ] = useState(false);

  const handleLogout = () => {
    // Dispatch the LOGOUT action when the button is clicked
    dispatch(logout());
    navigation('/login')

  };
  // const HeaderBottomData = [
  //   { title: "Home", link: "/", icon: HomeOutlined },
  //   { title: "Category", link: "/shop", icon: CategoryOutlined },
  //   // { title: "Account", link: "/account", icon: { PersonOutline } },
  //   // { title: "Cart", link: "/cart", icon: { ShoppingCartOutlined } },
  // ];

  return (
    <>
      <Box
        className="w-full h-[75px] flex flex-col  max-sm:hidden pt-1 top-0 bg-white"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
      >
        {/* <img
          src={require("../assets/Shaubhgya.png")}
          className="w-full h-8 object-fill"
          alt=""
        /> */}
        <Box
          className="flex justify-between items-center px-10"
          // style={{ border: "5px solid rgba(0,0,0,0.2)" }}
        >
          <div className="pl-2 ">
            {/* Logo */}
            <Link to={"/"}>
              <img
                src={require("../assets/Pisara Sarees logo_1 2.PNG")}
                alt="Company logo"
                // width={250}
                // height={40}
                className="w-full h-[65px] object-contain rounded-sm px-2  bg-blend-multiply"
              />
            </Link>
          </div>

          <Box
            className="flex gap-4 pr-2 items-center justify-end "
            sx={{ width: openSearch ? "80%" : undefined }}
          >
            {!user ? (
              <>
                <Link to="/login">
                  <Button
                    variant="contained"
                    sx={{
                      px: 3,
                      background:'#c90f72' ,
                        // "linear-gradient(to right,  #c90f7290, #c90f72)",
                      color: "#fff",
                      transition: "0.5s",
                      ":hover": {
                        background:
                          "linear-gradient(to left,  #c90f7290, #c90f72)",
                        color: "pink",
                      },
                    }}
                    startIcon={<Login />}
                  >
                    SignIn
                  </Button>
                </Link>
              </>
            ) : <>
            <Box className="" sx={{ width: "100%" }}>
              <SearchBar />
            </Box>
            <Link to={"/account"} className="w-[75%]">
              <Box className='flex justify-evenly gap-2 px-3 py-2 rounded-lg border-solid border-2 border-gray-400'>
                <Typography className="flex">
                  My Account
                </Typography>
              <Person2Outlined color="disabled" sx={{ color: "#c90f72", scale: "1.1" }} />
              </Box>
            </Link>

                </>}

            {/* <Link>
              <IconButton>
                <FavoriteBorder sx={{ color: "#f88b69", scale: "1.2" }} />
              </IconButton>
            </Link>
          */}
          <Link to={'/cart'}>
            <IconButton>
              <Box className="absolute right-2 top-[-7px] pt-[2px] text-xs font-medium bg-[#000000a1] text-white w-5 h-5 justify-items-center rounded-2xl">
                {cartItem.length}
              </Box>
              <ShoppingCartOutlined sx={{ color: "#c90f72", scale: "1.2" }} />
            </IconButton>
          </Link> 
          {/* {
            user && (
              <>
              <IconButton onClick={() => dispatch(logout())}>
               <Logout sx={{ color: "#c90f72", scale: "1.1" }} />
              </IconButton>
              </>
            )
          } */}

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
        <><Box className='sticky z-20 top-0 flex justify-between items-center  bg-white w-full h-fill'>

        <Box className=' w-full flex justify-between items-center px-3 bg-gradient-to-t from-[#c388a790] to-[#f3e8ee]'>
          {
            !user && <><Box onClick={handleLogout}>LOGOUT</Box></>
          }
          <Box>
            <img src={require('../assets/Pisara Sarees logo_1 2.PNG')} className="w-[70px] h-[70px] object-contain"/>
          </Box>
          <Box className='w-[70%] flex justify-center py-1 bg-white rounded-md  '>
            <SearchBar />
            </Box>
        </Box>
          </Box>
        {/* <Box className='fixed z-10 bottom-0 h-14 w-full bg-white'>

          <Box
            className="
           w-full flex justify-center items-center"
            sx={{
              // background:'linear-gradient(90deg, #c90f7290 0% 2%, #c90f72 0% 20%);'
              background:
                (location.pathname === '/' &&
                  "linear-gradient(to right,  #c90f7290, #c90f72 , #c90f72 , #c90f72)") ||
                (location.pathname ===  "/shop" &&
                  "linear-gradient(to right,  #c90f72, #c90f7290 , #c90f72 , #c90f72)") ||
                  (location.pathname === "/cart" &&
                  "linear-gradient(to right,  #c90f72, #c90f72 , #c90f7290 , #c90f72)") ||
                (location.pathname === "/account" &&
                  "linear-gradient(to right,  #c90f72, #c90f72 , #c90f72 , #c90f7290)") ||  "linear-gradient(to right,  #c90f72, #c90f72 , #c90f72 , #c90f7290)"
                }}
          >
            <Box className="flex justify-around items-center w-full">
              {HeaderBottomData.map((item) => {
                return (
                  <>
                    <LinkOptions
                      id={item.id}
                      title={item.title}
                      icon={item.icon}
                      link={item.link}
                      // setCount={setCount}
                      />
                  </>
                );
              })}
            </Box>
              </Box> */}
          {/* </Box> */}
        </>
      )}
    </>
  );
};

export default connect()(Header);
