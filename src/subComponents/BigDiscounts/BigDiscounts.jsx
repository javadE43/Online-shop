import React,{useEffect,useState} from 'react'


import {useGetAllProductsQuery} from '../../reduxtolkit/featcher/producApi/productApi'


import { Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';


import { Link } from 'react-router-dom';



import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import {StyleImage,StyleLink} from './index'
import NewArrivals1 from '../../assets/NewArrivals/NewArrivals 1.webp'
import NewArrivals2 from '../../assets/NewArrivals/NewArrivals2.webp'
import NewArrivals3 from '../../assets/NewArrivals/NewArrivals3.webp'
import NewArrivals4 from '../../assets/NewArrivals/NewArrivals4.webp'
import NewArrivals5 from '../../assets/NewArrivals/NewArrivals5.webp'
import NewArrivals6 from '../../assets/NewArrivals/NewArrivals6.webp'

import './style.css'

import uniqid from 'uniqid';


const newArrivals=[
  {
    id:1,
    title:'camera',
    image:NewArrivals1,
    price:3.300,
  },
  {
    id:2,
    title:'mobile',
    image:NewArrivals2,
    price:400,
  },
  {
    id:3,
    title:'shoes',
    image:NewArrivals3,
    price:999,
  },
  {
    id:4,
    title:'watch',
    image:NewArrivals4,
    price:999,
  },
  {
    id:5,
    title:'watch',
    image:NewArrivals5,
    price:999,
  },
  {
    id:6,
    title:'watch',
    image:NewArrivals6,
    price:999,
  },
  {
    id:7,
    title:'watch',
    image:NewArrivals5,
    price:999,
  },
  {
    id:8,
    title:'watch',
    image:NewArrivals6,
    price:999,
  },
]




export const BigDiscounts = () => {

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
    <Box component='section'>
    <Box
       sx={{display:"flex",justifyContent:'space-between',padding: '2rem 0 1rem 0'}}
      >
        <Stack component='span' flexDirection='row'>
           <Typography 
           marginBottom='1rem'
           variant='h4'
           component='span'
           color={theme.palette.text.primary}
           fontWeight={theme.typography.fontWeightBold}
            >  Big Discounts</Typography>
          </Stack>
          <span>
            <Link to='/'>
            View all
            </Link>
          </span>
      </Box>
         <Swiper 
               modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
               spaceBetween={20}
               slidesPerView={5}
               navigation
               autoplay={{delay:5000}}
               breakpoints={{
                 "@0.00": {
                   slidesPerView: 2,
                   spaceBetween: 20,
                 },
                 "@0.75": {
                   slidesPerView: 2,
                   spaceBetween: 20,
                 },
                 "@1.00": {
                   slidesPerView: 2,
                   spaceBetween: 20,
                 },
                 "@1.50": {
                   slidesPerView: 5,
                   spaceBetween: 20,
                 },
               }}
               className='carouselMainCard'
         
         >
{/* API */}
           {data && data.map((rtopatings,index)=>(
             rtopatings.rating.rate>4.4?
              <SwiperSlide key={uniqid()} style={{background:"transparent"}}>     
               <Paper sx={{width:'100%',padding:'1rem'}}>   
             <StyleLink to={`/product/${rtopatings.id}`}>
               <Box>
                 <StyleImage>
                   <Box component='span'>
                     <Box component='span'></Box>
                     <img src={rtopatings.image} alt=''/> 
                    </Box>
                  </StyleImage>
                 <Typography 
                 textAlign='start'
                 variant="h6"
                 component="h2"
                 color={theme.palette.text.secondary}>Title</Typography>
                 <Typography 
                 textAlign='start'
                 variant="h6"
                 component="h2"
                 color={theme.palette.primary.main}>${rtopatings.price}</Typography>
               </Box>
             </StyleLink>
              </Paper> 
           </SwiperSlide>
             :null
           ))}

          {/* { newArrivals.map((newArrivals,index)=>(
               <SwiperSlide key={index} style={{background:"transparent"}}>     
               <Paper sx={{width:'100%',padding:'1rem'}}>       
               <StyleLink to='/'>
               <Box>
                 <StyleImage>
                   <span>
                     <span></span>
                     <img src={newArrivals.image} alt=''/> 
                    </span>
                  </StyleImage>
                 <Typography fontSize='1rem' variant="h6" component="h2" color='#2b3445'>{newArrivals.title}</Typography>
                 <Typography fontSize='1rem' variant="h6" component="h2" color='error'>${newArrivals.price}</Typography>
               </Box>
             </StyleLink>
             </Paper> 
           </SwiperSlide> 
           ))} */}
      </Swiper>
  </Box>
  )
}