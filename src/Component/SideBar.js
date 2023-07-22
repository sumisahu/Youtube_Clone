import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/Constant'

 
export default function SideBar(props) {

    

  return (
     <Stack
       
     direction="row"
     sx={{overflowY:"auto",
     height:{sx:'auto',md:'95%'},
     flexDirection:{md:'column'}

    }}
     >
        {categories.map((item)=>(
           
           <button
             onClick={()=>props.setSelectedCategory(item.name)}
             className='category-btn'
              style={{
                background:item.name==props.selectedCategory && '#FC1503',
                color:'white',

             
            }}
        
            key={item.name}

           >
            <span style={{color:item.name==props.selectedCategory ?'white':'red',marginRight:10}}>{item.icon}</span>
            <span style={{opacity:item.name==props.selectedCategory?'1':'0.8'}}>{item.name}</span>
                 
           </button>

        ))}

     </Stack>
  )
}
