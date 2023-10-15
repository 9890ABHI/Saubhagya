import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Clothingproducts } from "../constants";
import { Typography, Box, Container } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productId = parseInt(id, 10);
    console.log(Clothingproducts);
    const filteredProducts = Clothingproducts.filter(
      (prod) => prod.id === productId
    );
    console.log(filteredProducts);
    filteredProducts.length > 0
      ? setProduct(filteredProducts[0])
      : setProduct(null);
  }, [id]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      <Container className="flex justify-between items-center pt-5">
        <Box
          sx={{
            width: "40%",
            height: 500,
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <img
              src={product.image}
              width={100}
              height={150}
              className="object-contain"
            />
            <img
              src={product.image}
              width={"100%"}
              height={150}
              className="object-contain"
            />
          </Box>
          <img
            src={product.image}
            width={400}
            height={"100%"}
            className="object-contain"
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <p> {product.category} </p>
        </Box>
      </Container>
    </>
  );
};

export default Details;
