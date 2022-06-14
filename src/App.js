import {useSelector,useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';

import { SnackbarProvider, useSnackbar } from 'notistack';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {useGetAllProductsQuery} from './reduxtolkit/featcher/producApi/productApi'

import ConfigPages  from './configPages/ConfigPages';
import Header from './components/Header'
import { Box, ThemeProvider } from '@mui/system';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import theme from './theme';
import  Footer from './components/footer/Footer';
import { store } from './reduxtolkit/store';
import { productsFatch } from './reduxtolkit/featcher/product/productSlice';
import { Slide, Typography } from '@mui/material';
import { UseFormProvider } from './context/formContext';



function App() {
  const {data,isLoading,error}=useGetAllProductsQuery()
  const [product,setProduct]=useState([])
  const [loding,setLoding]=useState(false)

  const productsCart=()=>{
    setLoding(true)
    let listproduct=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
    return new Promise((res,rej)=>{
      if (listproduct.length>=1) {
        res(listproduct)
        setLoding(false)
        return
       }
       if(data){
        localStorage.setItem('products',JSON.stringify(data))
       res(data)
       setLoding(false)
       return
      }
    })
  }

   useEffect(()=>{
       productsCart()
       .then(res=>setProduct(res))
   },[data])
  return (
    <>
    {loding?
    <Box 
       height='100vh'
       width='100vw'
       bgcolor='#0c0e30'
       display='flex'
       justifyContent='center'
       alignItems='center'
       >
      <Typography 
        color='#fff' 
        variant='h2' 
        component='span'>Loding</Typography></Box>:
      //   <Box 
      //  height='100vh'
      //  width='100vw'
      //  bgcolor='#333'
      //  display='flex'
      //  justifyContent='center'
      //  alignItems='center'
      //  >
      // <Typography 
      //   color='#fff' 
      //   variant='h2' 
      //   component='span'>Problem with server</Typography></Box>
        
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
    TransitionComponent={Slide}
      >
      <UseFormProvider>
      <div style={{background:'#f6f9fc',overflow:'hidden'}}>
          <Header/> 
          <ToastContainer/>
          <ConfigPages/>
          <Footer/>
      </div>
      </UseFormProvider>
      </SnackbarProvider>
   </ThemeProvider>
  
  }
   </>
  );
}

export default App;



