import { Box,  Input, Typography } from "@mui/material";
import React from "react";
import { FooterData } from "../constants";
import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Payment,
  Phone,
  Place,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box className="max-sm:hidden">
        <Box className="w-full flex justify-center items-center bg-[#000111] pt-10">
          <Box className="flex px-10 gap-5 justify-center">
            {FooterData.map((item) => (
              <>
                <Box className=" w-[17%] text-left pr-6 ">
                  <Typography variant="h6" className="text-white">
                    {item.title}
                  </Typography>
                  {item.info.map((item) => (
                    <>
                    <Link to={item.link}>
                      <Box className="flex pt-2 ">
                        {item.logo ? (
                          <>
                            {item.logoinfo === "Location" ? (
                              <>
                                <Place color="info" className="pr-2" />
                              </>
                            ) : (
                              <>
                                <Phone color="info" className="pr-2" />
                              </>
                            )}
                          </>
                        ) : (
                          <></>
                          )}
                        <Typography className="text-gray-400">
                          {item.title}
                        </Typography>
                      </Box>
                          </Link>
                    </>
                  ))}
                </Box>
              </>
            ))}
            <Box className="">
              <Box className="text-left ">
                <Typography variant="h6" className="text-white">
                  Join the List
                </Typography>
                <Input
                  placeholder="write your email"
                  color="primary"
                  sx={{
                    backgroundColor: "none",
                    color: "#eee",
                    borderBottom: "1px solid #eee",
                  }}
                  startAdornment={
                    <>
                      <Mail className="pr-2" color="info" />
                    </>
                  }
                />
                <Box className="flex justify-between items-center pt-5 px-4">
                  <Typography className="text-gray-400" variant="subtitle1">
                    Follow us{" "}
                  </Typography>
                  <Box className="flex gap-1">
                    <Facebook color="info" />
                    <Instagram color="info" />
                    <Twitter color="info" />
                  </Box>
                </Box>
                <Box className="flex justify-between items-center pt-5 px-4">
                  <Typography className="text-gray-400" variant="subtitle1">
                    Payment Options{" "}
                  </Typography>
                  <Box className="flex gap-1">
                    <Payment color="info" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center items-center bg-[#000111] pt-24 pb-52">
          <img src={require("../assets/pb.png")} alt="/Pisarasarees.com Designed By NerdTech" className="w-[800px] h-full  object-fill" />
        </Box>
        <Box className="w-full flex flex-col justify-center items-center bg-[#e80071] pb-10">
          
          <img src={require("../assets/NT.png")} alt="/Pisarasarees.com Designed By NerdTech" className="w-[700px] h-full object-fill" />
          {/* <Typography className="text-gray-400 ">Powerd By NerdTech</Typography> */}
          <Typography className="text-gray-100 ">
            <Copyright color="#eee" className="pr-1" />
            2023 PSAREE.COM. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
