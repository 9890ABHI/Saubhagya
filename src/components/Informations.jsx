import {
  Box,
  Button,
  FormLabel,
  Input,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { PrimaryText, SecondaryText } from "./TextComponent";
import { Link } from "react-router-dom";

export function InformationDetails() {
  // { infoDetails }
  const infoDetails = [
    { title: "Product Code", description: "SAEJ#34WE" },
    { title: "Colors", description: "Rama Blue" },
    {
      title: "Work",
      description: "Applique, Embroidery, Hand-Paint, Printed",
    },
    { title: "Time To Dispatch", description: "10 to 15 Working days" },
  ];

  console.log(infoDetails);
  return (
    <>
      <Box className="flex flex-col w-full">
        {infoDetails.map((item) => (
          <>
            <Box className="flex items-center justify-start text-left my-2">
              <Box className="flex w-[35%] pl-14">
                <SecondaryText text={item.title + " : "} isInfo />{" "}
              </Box>
              <Box className="flex w-full">
                <PrimaryText text={item.description} isInfo />
              </Box>
              <Box></Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export function ReviewDetails() {
  // {reviewDetails}
  const [value, setValue] = React.useState(0);
  const [qualityValue, setQualityValue] = React.useState(0);
  const [priceValue, setPriceValue] = React.useState(0);
  const intitalState = {
    ratingname: "",
    summary: "",
    review: "",
    ratingquality: "",
    ratingvalue: "",
    ratingprice: "",
    ratngimage: "",
  };
  const [values, setValues] = useState(intitalState);
  const onSubmit = () => {};
  return (
    <>
      <Box className="flex flex-col justify-center items-center w-full pl-20 gap-4">
        <Typography variant="h6" color={"CaptionText"} className="">
          Write Your Own Review
        </Typography>

        <form onSubmit={onSubmit}>
          <Box className="flex flex-col  justify-center text-left gap-1 mt-3">
            <FormLabel className="text-xl ">Quaility</FormLabel>
            <Rating
              name="simple-controlled"
              value={qualityValue}
              size="large"
              onChange={(event, newValue) => {
                setQualityValue(newValue);
              }}
            />
          </Box>
          <Box className="flex flex-col justify-center text-left gap-1 mt-3">
            <FormLabel className="text-xl pr-20">Value</FormLabel>
            <Rating
              name="simple-controlled"
              value={value}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box className="flex flex-col  justify-center text-left gap-1 mt-3">
            <FormLabel className="text-xl pr-20">Price</FormLabel>
            <Rating
              name="simple-controlled"
              value={priceValue}
              size="large"
              onChange={(event, newValue) => {
                setValue(setPriceValue);
              }}
            />
          </Box>
          <Box className="flex flex-col gap-5 mt-5">
            <TextField
              label="Name"
              size=""
              type="name"
              name="ratingname"
              value={values.ratingname}
              // onChange={onc}
              variant="outlined"
            />
            <TextField
              label="Summary"
              size=""
              type="text"
              name="summary"
              value={values.summary}
              // onChange={onc}
              variant="outlined"
            />
            <TextField
              label="Review"
              size=""
              type="text"
              name="review"
              value={values.review}
              // onChange={onc}
              variant="outlined"
              multiline
              minRows={3}
            />
            <Box>
              <FormLabel>Select Image : </FormLabel>
              <Input
                type="file"
                name="images"
                placeholder="Browse Image"
                className="border-none"
              />
            </Box>
          </Box>
          <Button type="submit" variant="text" className=" text-base mt-5">
            Submit Review
          </Button>
        </form>
      </Box>
    </>
  );
}

export function ReturnsPolicyDetails() {
  return (
    <>
      <Box className="text-left gap-3 flex flex-col pl-20">
        <Typography variant={"body1"} className="text-xl">
          All stitched & customized products are not returnable.
          <Link className="text-blue-500"> Read more </Link> about our return
          policy.{" "}
        </Typography>
        <Typography variant={"body1"} className="text-xl">
          We do not accept returns on menswear.
        </Typography>
        <Typography variant={"body1"} className="text-xl">
          Accessories cannot be returned or exchanged.
        </Typography>
        <Typography variant={"body1"} className="text-xl">
          The actual color of the product may vary slightly from the image
          shown.
        </Typography>
      </Box>
    </>
  );
}

export const ProductPricing = ({ product, cart }) => {
  const offerOfProduct = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );
  return (
    <>
      <Box>
        <Box className="flex">
          <Typography
            variant="body2"
            className="text-xl mt-2 pb-1 pr-3 "
            sx={{ fontFamily: "Light", color: "red" }}
          >
            -{offerOfProduct}%
          </Typography>
          <Typography
            variant="body2"
            className="text-xl mt-2 pb-1"
            sx={{ fontFamily: "Regular" }}
          >
            ₹ {product.price} /-
          </Typography>
        </Box>
        <Box className="flex items-center">
          <Typography
            variant="body2"
            className="text-base"
            sx={{ fontFamily: "Light" }}
          >
            M.R.P : ₹
          </Typography>
          <Typography
            variant="body2"
            className="text-lg ml-2 line-through"
            sx={{ fontFamily: "Regular" }}
          >
            {product.oldPrice}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
