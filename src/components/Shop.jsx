import { Box, Container } from "@mui/material";
import React from "react";
import ClothingBrand from "./filtered";

const Shop = ({ title }) => {
  return (
    <>
      <Container className="flex w-[100%]">
        {/* Filters */}
        <Box className=" w-[20%] flex flex-col">
          <ClothingBrand />
        </Box>
        {/*  */}

        {/* filter products */}
        <Box className="flex w-[80%]">Products</Box>
      </Container>
    </>
  );
};

export default Shop;
