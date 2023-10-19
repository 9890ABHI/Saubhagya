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

export const FilterData = (data, filterKey, filters, handleCheckboxChange) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FormControl component="fieldset" className="w-full flex justify-between">
        <Box
          className="w-[80%] flex justify-between px-5 py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            fontFamily: "SemiBold",
            color: "GrayText",
          }}
        >
          <Typography variant="h6" className="capitalize" color={"GrayText"}>
            {filterKey}
          </Typography>
          {!open ? <ExpandMore /> : <ExpandLess />}
        </Box>

        <Box classname="flex w-[80%] pl-9">
          {open && (
            <FormGroup>
              {data.map((item) => (
                <>
                  {filterKey === "colors" ? (
                    <>
                      <Box sx={{ pl: 9 }}>
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
                      <FormControlLabel
                        className="pl-8"
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
                    </>
                  )}
                </>
              ))}
            </FormGroup>
          )}
        </Box>
      </FormControl>
    </>
  );
};

export const FilterDataPrice = (filterKey, filters, handlePriceRangeChange) => {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(filters.priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(filters.priceRange[1]);
  const maximum = useState(filters.priceRange[1]);
  return (
    <>
      <FormControl component="fieldset" className="w-full justify-start">
        <Box
          className="w-[80%] flex justify-between px-5 py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          sx={{
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            fontFamily: "SemiBold",
            color: "GrayText",
          }}
        >
          <Typography variant="h6" className="capitalize">
            {filterKey}
          </Typography>
          {!open ? <ExpandMore /> : <ExpandLess />}
        </Box>

        <Box sx={{ width: "70%", pl: 3 }}>
          {open && (
            <>
              <Box className="flex ">
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
              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={minPrice}
                max={maxPrice}
                sx={{
                  color: "rgba(0,0,0,0.87)",
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#12edad",
                    "&:before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
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
