import React,{useEffect,useState} from 'react'

import { Grid, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import CategoryIcon from '@mui/icons-material/Category';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import uniqid from 'uniqid';

import {StyleBox,StyleImage,StyleTitle,StyleSection}from './index'
import './style.css'
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../containers/featcher/producApi/productApi';

 const CarouselCategory = () => {
  
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
      console.log('error')
    }
   }
 useEffect(()=>{
  getproduct()
 },[])

  return (
    <StyleSection>
           <Box
             sx={{display:"flex",justifyContent:'space-between',padding: '2rem 0 1rem 0'}}
           >
             <Stack component='span' flexDirection='row'>
              <CategoryIcon color="error"/>
              <Typography 
                marginBottom='1rem'
                variant='h4'
                component='span'
                color={theme.palette.text.primary}
                fontWeight={theme.typography.fontWeightBold}
              > Top Category</Typography>
            </Stack>
            <span>
              <Link to='/'>
                 View all
              </Link>
            </span>
        </Box>
                <Grid container>
                  <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                  spaceBetween={0}
                  navigation
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  className='carouselMainB'
                  >
                       {
                          product && product.map((category)=>(
                              <SwiperSlide key={uniqid()}>
                                <StyleBox>
                                    <Link to={`products/category/${category.category}`}>
                                    <StyleImage>
                                        <img src={category.image} alt=""/>
                                    </StyleImage>
                                    <StyleTitle>
                                    <Typography variant="h4" component="p">
                                         {category.category}
                                    </Typography>
                                    </StyleTitle>
                                    </Link>                                          
                                 </StyleBox>       
                              </SwiperSlide>
                          ))
                       }
                  </Swiper>
                </Grid>
    </StyleSection>
  )
}


export default React.memo(CarouselCategory)