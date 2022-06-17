import React,{useEffect,useState} from 'react'
import {useGetAllProductsQuery} from '../../containers/featcher/producApi/productApi'
import { Grid, Stack, Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import {StyleImage,StyleLink} from './index'
import NewArrivals1 from '../../assets/NewArrivals/NewArrivals 1.webp'
import NewArrivals2 from '../../assets/NewArrivals/NewArrivals2.webp'
import NewArrivals3 from '../../assets/NewArrivals/NewArrivals3.webp'
import NewArrivals4 from '../../assets/NewArrivals/NewArrivals4.webp'
import NewArrivals5 from '../../assets/NewArrivals/NewArrivals5.webp'
import NewArrivals6 from '../../assets/NewArrivals/NewArrivals6.webp'
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
  
]


export const SectionNewArrivals = () => {
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
            > New Arrivals</Typography>
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
             rtopatings.rating.rate>4.4?
             <Grid item md={2} xs={6} paddingLeft='32px' paddingTop='32px'>
             <StyleLink to='/'>
               <Box>
                 <StyleImage>
                   <Box component='span'>
                     <Box component='span'></Box>
                     <img src={rtopatings.image} alt=''/> 
                    </Box>
                  </StyleImage>
                 <Typography variant="h6" component="h2" color='#2b3445'>title</Typography>
                 <Typography variant="h6" component="h2" color='error'>${rtopatings.price}</Typography>
               </Box>
             </StyleLink>
           </Grid>
             :null
           ))} */}

          { newArrivals.map((newArrivals)=>(
             <Grid key={uniqid()} item md={2} sm={6} xs={6} paddingLeft='32px' paddingTop='32px'>
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
           </Grid> 
           ))}

      </Grid>
   </Paper>
  </Box>
  )
}
