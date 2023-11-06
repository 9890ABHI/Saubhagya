import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <>
  
        <Box
          sx={{
            // borderBottom: "1px solid black",
            display: "flex",
            // ":-moz-read-write": {
            //   width: "150%",
            // },
          }}
          className="w-full border-solid border-gray-700 border-b-[1px] max-sm:border-none  "
          visibility={"IconButton"}
        >
          <IconButton type="button" aria-label="search" className="p-2">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ width: "100%" }}
            placeholder="Search "
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
     
    </>
  );
};

export default SearchBar;
