import React,{useEffect,useState} from 'react'
import { addToCart, decreaseCart, removeallproducts, removeCart,getTotal } from '../../reduxtolkit/featcher/cart/cartslice';
import { useDispatch, useSelector } from 'react-redux'

import { Rating, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import ButtonBase from '@mui/material/ButtonBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';
import BoltIcon from '@mui/icons-material/Bolt';
import Stack from '@mui/material/Stack';


import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useGetAllProductsQuery } from '../../reduxtolkit/featcher/producApi/productApi';


import {
  StyleContentItemAddProduct,
  StyleContentItemIcone,
  StyleContentItem,
  StyleContent,
  StyleIconsHeader,
  StyleContainer,
  StyleImageCartd,
  StyleChip}from './index'
import './style.css'
import { Link,useNavigate } from 'react-router-dom';


import uniqid from 'uniqid';


export const CardProducts = () => {
  const theme=useTheme();
  const [product,seProduct]=useState([])
  const {data,isLoading,error}=useGetAllProductsQuery()
 
 const getproduct= async ()=>{
  try {
    let listproduct=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):null;
    if (listproduct.length>0) {
      seProduct(listproduct)
     }
     else{
      seProduct(data)
     }
  } catch (error) {
    console.log('error')
  }

 }
 
 useEffect(()=>{
  getproduct()
 },[])

    return (
      <section style={{margin:'3rem 0'}}>
        
        <Box
         sx={{display:"flex",justifyContent:'space-between',padding: '2rem 0 1rem 0'}}
        
        >
          <Stack component='span' flexDirection='row'>
              <BoltIcon color="error"/>
              <Typography 
                 marginBottom='1rem'
                 variant='h4'
                 component='span'
                 color={theme.palette.text.primary}
                 fontWeight={theme.typography.fontWeightBold}
              > Flash Deals</Typography>
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
        slidesPerView={4}
        navigation
        autoplay={{delay:5000}}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className='carouselMainCard'
      >
          {
              product && product.map((item,index)=>{
               return( 
                <SwiperSlide key={uniqid()}  style={{background:'transparent'}}>
                    <Card item={item}/>
                </SwiperSlide>
               )
              })
          }
      </Swiper>
      </section>
    )
  }
  
  
  
  export const Card = ({item}) => {
        
    const [select,seSelect]=useState(false)
    const cart=useSelector((store)=>store.cart);
    const {cartItem}=useSelector((store)=>store.cart);

const Dispatch=useDispatch();

const handlerDecreaseCart=(item)=>{
  Dispatch(decreaseCart(item))
}

const handlerIncreaseCart=(item)=>{
  Dispatch(addToCart(item))
  console.log(item)
}

React.useEffect(()=>{
  Dispatch(getTotal())
},[cart])

    return (
      <>
      <Paper square={false}  elevation={2} component='div' sx={{width:"100%"}}>
        <StyleContainer>
           <Box>
                <StyleIconsHeader>
                  <ButtonBase>
                      <IconButton  component="span">
                       <VisibilityIcon/>
                    </IconButton>
                  </ButtonBase>
                       
                  <ButtonBase onClick={()=>seSelect(!select)} >
                      <IconButton component="span">
                        {select?<FavoriteIcon color='#ff0000'/>:<FavoriteBorderIcon/>}                      
                    </IconButton>
                  </ButtonBase>
                </StyleIconsHeader>
                <StyleChip>
                  <Chip label="25% off" color="error" />
                </StyleChip>
                <StyleImageCartd sx={{textAlign:'center'}}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image}/>
                  </Link>                
                </StyleImageCartd>
            </Box>
  
            <StyleContent>
                <StyleContentItem>
                  <span style={{maxHeight:'20px',overflow:'hidden',textAlign:'initial'}}>{item.title}</span>
                  <span>
                  <Rating name="size-medium" defaultValue={item.rating.rate} size="small" />
                  </span>
                  <span>
                    ${item.price}
                  </span>
                </StyleContentItem>
                <StyleContentItemIcone>               
                <ButtonBase onClick={()=>handlerIncreaseCart(item)}> 
                <IconButton color="primary" component="span">
                  <ShoppingCartIcon fontSize='medium'/>
                </IconButton>
                </ButtonBase>
                <StyleContentItemAddProduct>
                 <ButtonBase>
                <IconButton color="primary" component="span" onClick={()=>handlerIncreaseCart(item)}>
                  <AddBoxOutlinedIcon fontSize='medium'/>
                </IconButton>
                </ButtonBase>
                {cartItem&&
                cartItem.map((product)=>(
                  product.id===item.id?<React.Fragment key={uniqid()}>
                  <span>{product.cartQuantity}</span>
                  <ButtonBase onClick={()=>handlerDecreaseCart(item)}>
                  <IconButton color="primary" component="span">
                    <CancelPresentationRoundedIcon fontSize='medium'/>
                  </IconButton>
                  </ButtonBase>
                  </React.Fragment>
                  :null
                ))
                 }
                </StyleContentItemAddProduct>
                </StyleContentItemIcone>
            </StyleContent>
        </StyleContainer>
      </Paper>
      </>
    )
  }
  
  
  
  
  
  

  
  