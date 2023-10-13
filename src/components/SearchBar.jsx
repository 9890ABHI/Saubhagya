import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid black",
          display: "flex",
        }}
        visibility={"IconButton"}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ pt: 1 }}
          placeholder="Search "
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
