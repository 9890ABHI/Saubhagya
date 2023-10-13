import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* home page container 1 */}
      <Container
        sx={{
          width: "100%",
          backgroundColor: "cornsilk",
        }}
        className="max-sm:hidden pb-10"
      >
        <Link to={`/shop`}>
          <img
            src={
              "https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
            }
            alt="home"
            className="object-cover w-[100%] h-[100%] rounded-md"
          />
        </Link>
      </Container>
      {/* home page container 2 */}
      <Container
        sx={{
          width: "100%",
          height: 800,
        }}
        className="flex justify-between items-center max-sm:hidden  pb-10 "
      >
        <Box
          sx={{ width: "35%", height: "100%" }}
          className="flex items-center"
        >
          <img
            src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
            alt=""
            width={"100%"}
            className="object-fill"
          />
        </Box>
        <Box
          sx={{ width: "60%" }}
          className="flex flex-col justify-center items-center"
        >
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
          </Box>
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <Typography className="pt-2 font-semibold">Text 1 </Typography>
              <Typography className="pt-2 font-light">
                description 1{" "}
              </Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* home page container 3 */}
      <Container
        sx={{
          width: "100%",
          height: 600,
        }}
        className="flex justify-center  max-sm:hidden  pb-10 relative"
      >
        <Box className="flex justify-center gap-7">
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex  z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
          <Box className="w-[250px] h-[400px] flex z-10">
            <img
              src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
              alt=""
              width={"100%"}
              height={"80%"}
              className="object-cover rounded-sm"
            />
          </Box>
        </Box>
        <Box className="absolute w-[100%] h-[350px] bg-slate-400 bottom-10 left-0 right-0 z-0" />
      </Container>

      {/* home page container 6 */}
      <Container
        sx={{
          width: "100%",
          height: 800,
        }}
        className="flex justify-between items-center max-sm:hidden  pb-10 "
      >
        <Box
          sx={{ width: "60%" }}
          className="flex flex-col justify-center items-center"
        >
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
          </Box>
          <Box className="flex">
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <img
                src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
                alt=""
                width={"100%"}
                height={"80%"}
                className="object-contain"
              />
              <Typography className="pt-2 font-semibold">Shop Now</Typography>
            </Box>
            <Box className="w-[200px] h-[350px] p-2 flex flex-col justify-center">
              <Typography className="pt-2 font-semibold">Text 1 </Typography>
              <Typography className="pt-2 font-light">
                description 1{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ width: "35%", height: "100%" }}
          className="flex items-center"
        >
          <img
            src="https://img.freepik.com/free-photo/still-life-spring-wardrobe-switch_23-2150479001.jpg?size=626&ext=jpg&ga=GA1.1.2085897651.1682179198&semt=sph"
            alt=""
            width={"100%"}
            className="object-fill"
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
