import React,{useEffect,useState} from 'react'
import { addToCart, decreaseCart, removeallproducts, removeCart,getTotal } from '../../containers/featcher/cart/cartslice';
import { useDispatch, useSelector } from 'react-redux'

import {useGetAllProductsQuery} from '../../containers/featcher/producApi/productApi'

import { Container, Divider, Grid, List, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import StarBorderPurple500TwoToneIcon from '@mui/icons-material/StarBorderPurple500TwoTone';

import uniqid from 'uniqid';

import { Link } from 'react-router-dom';

import {StyleImage,StyleLink} from './index'
import featured1 from '../../assets/featured/jim.webp'
import featured2 from '../../assets/featured/britches.webp'

const featured=[
  {
    id:1,
    title:'jim & jago',
    rating:5,
    image:featured1,
    price:3.300,
  },
  {
    id:2,
    title:'mobile',
    rating:4.6,
    image:featured2,
    price:400,
  },
]
export const FeaturedBanner = () => {

    const theme=useTheme();

    const [product,setProduct]=useState([])
    const {data,isLoading,error}=useGetAllProductsQuery()
    
    const getproduct= async ()=>{
      try {
        let listproduct=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):null;
        if (listproduct.length>0) {
          setProduct(listproduct)
         }
         else{
          setProduct(data)
         }
      } catch (error) {
        // console.log('error')
      }
    
     }
    useEffect(()=>{
      getproduct()
    },[])

  return (
      
    <Box component='section'>
      <Box
         sx={{display:"flex",justifyContent:'space-between',padding: '2rem 0 1rem 0'}}
        
        >
          <Stack component='span' flexDirection='row'>
              <StarBorderPurple500TwoToneIcon color="error"/> 
              <Typography 
              marginBottom='1rem'
              variant='h5'
              component='span'
              color={theme.palette.text.primary}
              fontWeight={theme.typography.fontWeightBold}
               > Featured Brands</Typography>

            </Stack>
            <span>
              <Link to='/'>
                 view all
              </Link>
            </span>
        </Box>

         <Paper square={false}  elevation={2} component='div' sx={{padding:'1rem'}}>
            <Grid container  marginTop='-30px' sx={{transform:'translateX(-1rem)'}}>
                 {/* API */}
             {/* {data && data.slice(0,2).map((featured)=>(
               <Grid item md={6} paddingLeft='32px' paddingTop='32px'>
               <StyleLink to='/'>
                 <Box>
                   <StyleImage>
                     <span>
                       <span></span>
                       <img src={featured.image} alt=''/> 
                      </span>
                    </StyleImage>
                   <Typography variant="h6" component="h2" color='#2b3445'>title</Typography>
                 </Box>
               </StyleLink>
             </Grid>
             ))} */}


                {featured.slice(0,2).map((featured)=>(
               <Grid key={uniqid()} item md={6} sm={12} xs={12} paddingLeft='32px' paddingTop='32px'>
               <StyleLink to='/'>
                 <Box>
                   <StyleImage>
                     <span>
                       <span></span>
                       <img src={featured.image} alt=''/> 
                      </span>
                    </StyleImage>
                   <Typography variant="h6" component="h2" color='#2b3445'>{featured.title}</Typography>
                 </Box>
               </StyleLink>
             </Grid>
             ))}

            </Grid>
        </Paper>
    </Box>
  )
}
