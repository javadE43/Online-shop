import React,{useEffect,useState} from 'react'
import { Grid ,List,ListItem,Paper,Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';

import {useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import {Card} from '../../subComponents/cardProducts/CardProducts'
import {SidebarCategory} from '../../subComponents/SidebarCategory/SidebarCategory'
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import axios from 'axios';
import {StylePaper} from './index'

export const SectionBrands = () => {

    const theme=useTheme();
    const [product,seProduct]=useState([])
    const {data,isLoading,error}=useGetAllProductsQuery()
   const productsCart=()=>{
     const localImage=JSON.parse(localStorage.getItem('CardBarand'));
     if (localImage) {
      seProduct(localImage)
     }if(data){
       localStorage.setItem('CardBarand',JSON.stringify(data))
     }
   }
   useEffect(()=>{
    productsCart()
   },[])


  return (
        <Box component='section' sx={{marginTop:'3rem'}}>
            <Grid container spacing={2}>
            <Grid sx={{ display: { xs: 'none', lg: 'flex'}}}  item  xs={12} md={2}>
                <Sidebar/>
            </Grid>
            <Grid item xs={12} md={10}>
            <Box >
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
                  > New Arrivals</Typography>
            </Stack>
            <span>
              <Link to='/'>
              View all
              </Link>
            </span>
             </Box>
              <Grid container spacing={3}>
                {
                   data && data.slice(0,6).map((card,index)=>(
                     <Grid key={uniqid()} item xs={12} sm={2} md={4}>
                           <Card item={card}/>
                     </Grid>
                   ))
                }
              </Grid>      
           </Box>
        </Grid>
     </Grid>
  </Box>
  )
}


const Sidebar = () => {
    const [category,setCategory]=useState({});
    useEffect(()=>{
    const getProduct= async ()=>{
     let data=await axios.get(`https://fakestoreapi.com/products/categories`);
     setCategory(data.data)
    }
    getProduct()
  
  },[])
  
      return (
        <Box>
             <Paper>
                 <List component='ul'>
                    {
                      category.length>1 && category.map((item,index)=>(
                      <ListItem key={uniqid()} >
                      <StylePaper sx={{width:'100%',background:'#f6f9fc'}}>
                      <Link to={`/products/category/${item}`} style={{textTransform:'capitalize'}}>
                        <Stack 
                          flexDirection='row'
                          padding='0.5rem'
  
                        >
                          <Box 
                          component='span'
                          marginRight='1rem'
                          >
                          </Box>
                          <Box component='span'>
                             {item}
                          </Box>
                        </Stack>
                        </Link>
                      </StylePaper>
                     </ListItem>
                      ))
                    }
                 </List>
             </Paper>
        </Box>
      )
    }