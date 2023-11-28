import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const FilterData = (data, filterKey, filters, handleCheckboxChange ) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
  
      <FormControl component="fieldset" className="w-full flex justify-between relative">
        <Box
          className="w-[100%] flex justify-between items-center px-5 py-2 cursor-pointer max-sm:bg-white"
          onClick={() => setOpen(!open)}
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            fontFamily: "SemiBold",
            color: "GrayText",
          }}
        >
          <Typography variant="h6" className={`capitalize `}  color={"GrayText"}>
            {filterKey}
          </Typography>
          {!open ? <ExpandMore /> : <ExpandLess />}
        </Box>

          {open && (
        <Box classname=" bg-white w-full absolute">
            <FormGroup className="">
              {data.map((item) => (
                <>
                  {filterKey === "colors" ? (
                    <>
                      <Box sx={{ pl: 4 }} className="">

                        <FormControlLabel
                          key={item.title}
                          control={
                            <Checkbox
                              checked={filters[filterKey].includes(item.title)}
                              onChange={(e) =>
                                handleCheckboxChange(filterKey, e)
                              }
                              icon={
                                <Box
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: item.title,
                                    borderRadius: "100%",
                                    filter: "blur(1px)",

                                    overflow: "hidden",
                                  }}
                                />
                              }
                              checkedIcon={
                                <Box
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: item.title,
                                    filter: "blur(2px)",
                                    borderRadius: "100%",
                                    overflow: "hidden",
                                  }}
                                />
                              }
                              value={item.title}
                            />
                          }
                          label={item.title}
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                    <Box className=" ">

                      <FormControlLabel
                        className="md:pl-8 max-sm:pl-2"
                        key={item.title}
                        control={
                          <Checkbox
                          checked={filters[filterKey].includes(item.title)}
                            onChange={(e) => handleCheckboxChange(filterKey, e)}
                            value={item.title}
                            color="info"
                            />
                          }
                          label={item.title}
                      />
                          </Box>
                    </>
                  )}
                </>
              ))}
            </FormGroup>
        </Box>
          )}
      </FormControl>
    </>
  );
};

export const FilterDataPrice = (filterKey, filters, handlePriceRangeChange ) => {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(filters.priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(filters.priceRange[1]);
  const maximum = useState(filters.priceRange[1]);
  return (
    <>
      <FormControl component="fieldset" className="w-full justify-start relative ">
        <Box
          className="w-[100%] flex justify-between px-5 py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            fontFamily: "SemiBold",
            color: "GrayText",
          }}
        >
          <Typography variant="h6" className={`capitalize`}>
            {filterKey}
          </Typography>
          {!open ? <ExpandMore /> : <ExpandLess />}
        </Box>

        <Box  className=' max-sm:absolute max-sm:left-[75px] max-sm:bg-white max-sm:w-fit'>
          {open && (
            <>
              <Box className="flex  w-full ">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Min
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    placeholder={filters.priceRange[0]}
                    // onChange={handlePriceRangeChange}
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Max
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    placeholder={maxPrice}
                    value={maxPrice}
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    onChange={(e) => setMaxPrice(e)}
                  />
                </FormControl>
              </Box>
              <Box className="flex px-5 py-2">

              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={minPrice}
                max={maxPrice}
                sx={{
                  color: "rgba(0,0,0,0.87)",
                  // paddingInline: 10,
                  "& .MuiSlider-track": {
                    border: "none",
                    color:"#12adad"
                  },
                  "& .MuiSlider-thumb": {
                    width: 20,
                    height: 20,
                    backgroundColor: "#12edad",
                    "&:before": {
                      boxShadow: "0 0 5px rgba(0,0,0,0.9)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
                />
                </Box>
            </>
          )}
        </Box>
      </FormControl>
      {/* <Box>
          <FormControl className="w-[75%]">
            <Typography variant="h6" sx={{ borderBottom: "1px solid black" }}>
              Price Range
            </Typography>
            
          </FormControl>
        </Box> */}
    </>
  );
};
