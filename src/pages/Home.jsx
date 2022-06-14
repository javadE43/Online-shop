import React,{useEffect,useState} from 'react'


import {useGetAllProductsQuery } from "../reduxtolkit/featcher/producApi/productApi";
import { CarouselHome } from "../subComponents/slider/CarouselHome";
import { Box, Container } from "@mui/material";


import { SectionProductsRatings } from "../subComponents/sectionProductsRatings/SectionProductsRatings";
import { CardProducts } from '../subComponents/cardProducts/CardProducts';
import { NewArrivals } from '../subComponents/NewArrivals/NewArrivals';
import { BigDiscounts } from '../subComponents/BigDiscounts/BigDiscounts';
import { BrandsJackate } from '../subComponents/sectionBrandsJacket/BrandsJackate';
import BannerCategory from '../subComponents/bannercategory/BannerCategory'

const Home = () => {

//   const [product,seProduct]=useState([])
//   const {data,isLoading,error}=useGetAllProductsQuery()
 
//  const productsData=()=>{
//    const products=JSON.parse(localStorage.getItem('products'));
//    if (products) {
//     seProduct(products)
//    }else if(data){
//      localStorage.setItem('products',JSON.stringify(data))
//    }
//  }
 
//  useEffect(()=>{
//   productsData()
//  },[])

    return (
      <Box marginBottom='70px'>
      <CarouselHome/>
        <Container fixed
        >
           <CardProducts/> 
           <BannerCategory/>
           <SectionProductsRatings/>
           <NewArrivals/>
           <BigDiscounts/>
           <BrandsJackate/>
       </Container>
     </Box>
    )
};

export default React.memo(Home)





