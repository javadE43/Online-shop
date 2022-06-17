import React,{useEffect,useState} from 'react'

import {useGetAllProductsQuery} from '../../containers/featcher/producApi/productApi'

import {Grid,  Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';


import { Link } from 'react-router-dom';

import uniqid from 'uniqid';

import {StyleImage,StyleLink} from './index'
import topRatings1 from '../../assets/topRatings/camera-1.webp'
import topRatings2 from '../../assets/topRatings/mobile-1.webp'
import topRatings3 from '../../assets/topRatings/shoes-2.webp'
import topRatings4 from '../../assets/topRatings/watch-1.webp'



const topRatings=[
  {
    id:1,
    title:'camera',
    rating:5,
    image:topRatings1,
    price:3.300,
  },
  {
    id:2,
    title:'mobile',
    rating:4.6,
    image:topRatings2,
    price:400,
  },
  {
    id:3,
    title:'shoes',
    rating:4.7,
    image:topRatings3,
    price:999,
  },
  {
    id:4,
    title:'watch',
    rating:4.5,
    image:topRatings4,
    price:999,
  },
]




export const TopRatings = () => {

  const theme=useTheme();

  return (
    <Box component='section'>
      <Box
         sx={{display:"flex",justifyContent:'space-between',padding: '2rem 0 1rem 0'}}
        >
          <Stack component='span' flexDirection='row'>
             <Typography 
              marginBottom='1rem'
              variant='h5'
              component='span'
              color={theme.palette.text.primary}
              fontWeight={theme.typography.fontWeightBold}
              > Top Ratings</Typography>
            </Stack>
            <span>
              <Link to='/'>
              View all
              </Link>
            </span>
        </Box>
    <Paper square={false}  elevation={2} component='div' sx={{padding:'1rem'}}>
           <Grid container marginTop='-30px' sx={{transform:'translateX(-1rem)'}}>
 {/* API */}
             {/* {data && data.map((rtopatings)=>(
               rtopatings.rating.rate>4.6?
               <Grid item md={3} paddingLeft='32px' paddingTop='32px'>
               <StyleLink to='/'>
                 <Box>
                   <StyleImage>
                     <span>
                       <span></span>
                       <img src={rtopatings.image} alt=''/> 
                      </span>
                    </StyleImage>
                   <Box>
                    <Rating name="half-rating-read" value={rtopatings.rating.rate} precision={0.5} readOnly />     
                     </Box>
                   <Typography variant="h6" component="h2" color='#2b3445'>title</Typography>
                   <Typography variant="h6" component="h2" color='error'>${rtopatings.price}</Typography>
                 </Box>
               </StyleLink>
             </Grid>
               :null
             ))} */}

            { topRatings.map((rtopatings)=>(
               <Grid key={uniqid()} item md={3} sm={6} xs={6} paddingLeft='32px' paddingTop='32px'>
               <StyleLink to='/'>
                 <Box>
                   <StyleImage>
                     <span>
                       <span></span>
                       <img src={rtopatings.image} alt=''/> 
                      </span>
                    </StyleImage>
                   <Box>
                    <Rating sx={{fontSize:'1rem'}} name="half-rating-read" value={rtopatings.rating} precision={0.5} readOnly />     
                     </Box>
                   <Typography
                    fontSize='1rem'
                    variant="h6"
                    component="h2"
                    color={theme.palette.text.secondary}
                    >{rtopatings.title}</Typography>
                   <Typography
                    fontSize='1rem'
                    variant="h6"
                    component="h2"
                    color={theme.palette.primary.main}>$
                    {rtopatings.price}</Typography>
                 </Box>
               </StyleLink>
             </Grid> 
             ))}

        </Grid>
     </Paper>
    </Box>
  )
}
