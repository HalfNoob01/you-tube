import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
     .then((data)=> setvideos(data.items))
  },[selectedCategory])

  return(
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } ,backgroundColor:"black"}} > 
    <Box
      sx={{
        height: { sx: "100vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
      <Sidebar  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#fff" }}
         display={{sx:"none"}}
      >
        Copyright 2024 JSM Media
      </Typography>
    </Box>

    <Box p={2} sx={{overflow: 'scroll', height:"92vh",flex : 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color : 'white'}}>
        {selectedCategory} <span style={{color:'#f31503'}}>videos</span>
      </Typography>
      <Videos style={{posation:"fixed"}} videos={videos}/>
    </Box>
  </Stack>
)}

export default Feed;
