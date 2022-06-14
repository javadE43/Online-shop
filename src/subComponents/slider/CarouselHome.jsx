import React,{useEffect, useState} from 'react'

import banner from'../../assets/image/poster_1.jpg'
import imageShose from'../../assets/image/nike-black.png'


import { styled } from '@mui/system';
import { Box, Button, Container, Grid, Toolbar, useMediaQuery } from '@mui/material'
import {useTheme}from '@mui/material/styles'


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import uniqid from 'uniqid';


import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { useGetAllProductsQuery } from '../../reduxtolkit/featcher/producApi/productApi';


import './style.css';
import { SliderContainer,Slider,Description,CartSlide,StyleButton } from './index';


export const CarouselHome = () => {
  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.down('md'));

 const [image,setImage]=useState([])
 const {data,isLoading,error}=useGetAllProductsQuery()

 const getproduct= async ()=>{
   try {
     let listproduct=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):null;
     if (listproduct.length>0) {
       setImage(listproduct)
      }
      else{
       setImage(data)
      }
   } catch (error) {
     console.log('error')
   }
 
  }
 useEffect(()=>{
   getproduct()
 },[])

  return (
    <section>
            <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log('')}
      // onSlideChange={() => console.log('')}
      autoplay={{delay:5000}}
      className="mySwiper carouselMain"
    >
        {
            image && image.slice(0,3).map((item,index)=>{
             return(
              <SwiperSlide key={uniqid()}>
                  <SwiperItemSlide item={item} matches={matches}/>
              </SwiperSlide>
             )
            })
        }
    </Swiper>
    </section>
  )
}




export const SwiperItemSlide = ({item,matches}) => {

  return (
    
    <Slider style={{background:`#fff`}}>
      <Container maxWidth='xl'>
        <Grid 
        container
        justifyContent='space-between'
        flexDirection='row'

        >
          <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}} item xs={12} md={5} order={matches?'1':'2'}>
        <Description>
            <h2>New Products</h2>
            <p>{item.description}</p>
            <div>
            <StyleButton variant="contained">Shop now</StyleButton>
            </div>
         </Description>
        </Grid>
        <Grid item xs={12} md={4}>
        <CartSlide>
          <img src={imageShose} alt=''/>
        </CartSlide>
          </Grid>
        </Grid>
        </Container>
        </Slider>
     
  )
}
