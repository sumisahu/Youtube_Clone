import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,card,cardContent,cardMedia, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
 
import { demoChannelTitle,demoThumbnailUrl,demoVideoUrl,demoChannelUrl,demoVideoTitle } from '../utils/Constant'
import { width } from '@mui/system'
 import {motion} from 'framer-motion'

export default function VideoCard({video:{id:{videoId},snippet}}) {
      
   return (
   
    <motion.h1
    whileHover={{ scale: 1.08 , zIndex: 1,/*  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', */position:'relative',}}
    whileTap={{ scale: 0.8 }}
    transition={{ ease: "linear",stiffness: 100}}

     
>
   <Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:'none'}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url}
     alt={snippet?.title}
     sx={{width:358,height:180}}
     className='play_hovering'
    />
    
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px '}} 
    >
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight="bold" color='#fff' >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
    </Link>

    <Link to={snippet.channelId?`/channel/${snippet.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight="bold" color='gray' >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} />
        </Typography>
    </Link>

    </CardContent>
  
   </Card>
   </motion.h1>
  )
}
