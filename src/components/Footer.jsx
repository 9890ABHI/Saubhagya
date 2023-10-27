import { Box, FormLabel, Input, TextField, Typography } from "@mui/material";
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
        <Box className="w-full flex justify-center items-center bg-[#000111]">
          <img src={require("../assets/Pisarasarees.com Designed By NerdTech-2.png")} alt="/Pisarasarees.com Designed By NerdTech" className="w-[700px] h-[550px] object-fill" />
        </Box>
        <Box className="w-full flex flex-col justify-center items-center bg-[#000111] pb-10">
          <Typography className="text-gray-400 ">
            <Copyright color="#eee" className="pr-1" />
            2023 PSAREE.COM. ALL RIGHTS RESERVED.
          </Typography>

          <Typography className="text-gray-400 ">Powerd By NerdTech</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
