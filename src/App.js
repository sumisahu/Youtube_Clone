import React, { useEffect } from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import {Box} from '@mui/material'
 import NavBar from './Component/NavBar'
 import Feed from './Component/Feed'
 import VideoDetail from './Component/VideoDetail'
 import ChannelDetail from './Component/ChannelDetail'
 import SearchFeed from './Component/SearchFeed'
  export default function App() {

   
  return (
    
   <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
         <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        
      </Routes>


     </Box>
   
   
   </BrowserRouter>
  )
 

  
}
 
