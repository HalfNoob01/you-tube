import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos,setVideos]= useState([])
  const  { id } = useParams();
  
  console.log("hello",channelDetail)
  useEffect(()=>{
  
    console.log("runing")
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
 },[id])
  return (
    <Box minHeight='100vh' width="100vw" height="100vh" overflow="scroll">
       <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(97,95,214,0.4992121848739496) 0%, rgba(67,67,235,1) 100%, rgba(0,212,255,1) 100%)',
         zIndex:10,height:"200px"
      }}/>
  
  <Link to={`/channel/${channelDetail?.id?.channelId}`}><ChannelCard marginTop="-130px" n  channelDetail={channelDetail}/></Link>
       <Box display="flex" p="2" >
           <Box >
            <Videos videos={videos}/>
           hello
          </Box>
       </Box>
       
       </Box>
    </Box>
  )
}

export default ChannelDetail
