import React,{useEffect,useCallback, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { Autocomplete, Checkbox, Container, Divider, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Stack, TextField, Typography, useMediaQuery } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";


import {
  StyleImg,
  StyleIncrement,
  StyleButtonRemove,
  StylePrice,
  StyleOutlinedInput,
  StyleFormControl}from './index'
// import { useTheme } from '@emotion/react';
import { addToCart, decreaseCart, getTotal, removeallproducts, removeCart } from '../../reduxtolkit/featcher/cart/cartslice';
import { Box, useTheme } from '@mui/system';

import uniqid from 'uniqid';
import { countries } from '../../data/dataCountries';



 const Cart = () => {

  console.log('cartshopingPage')

  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.down('md'));
    const cart=useSelector((store)=>store.cart)
    const Dispatch=useDispatch();


    const handlerRemoveCart=useCallback((item)=>{
        Dispatch(removeCart(item))
    },[cart.cartItem])
     
    const handlerDecreaseCart=useCallback((item)=>{
      Dispatch(decreaseCart(item))
    },[cart.cartItem])
  
    const handlerremoveallproducts=useCallback(()=>{
      Dispatch(removeallproducts())
    },[])

    const handlerIncreaseCart=useCallback((item)=>{
      Dispatch(addToCart(item))
    },[cart.cartItem])

    useEffect(() => {
  
    }, [cart.cartItem])
    
  
  return (
    <Container maxWidth='xl' sx={{marginBottom:"4rem"}}>
       <Grid container spacing={2}>
         <Grid item xs={12}>
         <Typography color={theme.palette.text.secondary} variant="h3" component="h2" marginY={5} textAlign='center' >
            Shopping Cart
         </Typography>
         </Grid>
          <Grid item container spacing={2}  xs={12} md={8}> 
            {
                cart.cartItem.length>0?cart.cartItem.map((product)=>(
                <Grid key={uniqid()} item xs={12} position='relative'> 
                 <Paper square={false}  elevation={2} component='div' sx={{width:"100%",padding:'0.5rem'}}>
                    <Grid spacing={2} container item justifyContent='space-between'  flexDirection='row'>
                      <Grid item md={1} sm={2} xs={12}><StyleImg src={product.image} alt=''/></Grid>   
                      <Grid container item md={11} sm={10} xs={12} justifyContent='space-between' flexDirection='column'>
                          <Grid item sx={{paddingLeft:{xs:'0',md:'2rem'}}}><Typography variant="h6">{product.title}</Typography></Grid>    
                          <Grid container item justifyContent='space-between' sx={{paddingLeft:{xs:'0',md:'2rem'}}}>
                            <Grid item >
                              <StylePrice>
                                 <Typography display='flex' justifyContent='center' alignItems='center' color='#8f98aa'  component='span'>${product.price}<ClearIcon/></Typography>    
                                 <Typography color="error"  component='span' marginLeft='0.7rem'>${product.price*product.cartQuantity}</Typography>
                              </StylePrice>
                            </Grid>

                             <Grid item>
                               <StyleIncrement>                           
                                    <Button onClick={()=>handlerIncreaseCart(product)} variant="outlined" color='error'><AddIcon /></Button>                          
                                    <ListItemText primary={product.cartQuantity}/>
                                    <Button onClick={()=>handlerDecreaseCart(product)} variant="outlined" color='error'><RemoveIcon /></Button>
                                </StyleIncrement> 
                              </Grid>  
                          </Grid>
                          <StyleButtonRemove>
                              <IconButton onClick={()=>handlerRemoveCart(product)}>
                                    <CloseIcon/>
                              </IconButton>                               
                          </StyleButtonRemove>     
                      </Grid> 
                    </Grid>
                  </Paper>
                </Grid>
                ))
                :
                <Box height={{xs:'auto',md:'10%'}} padding='1rem' marginTop='3rem' width="100%" textAlign='center'  boxShadow={theme.shadows[7]}>
                  <Typography  fontSize={{sm:'1.5rem',md:'2rem'}} component='div' color={theme.palette.primary.main}>No Product</Typography>
                </Box>
            }
            </Grid> 
            <Grid item xs={12} md={4}>
                <SidebarCart/>
            </Grid>
            {cart.cartItem.length>0 &&
            <Grid item xs={12}>
                  <Box component='div' display='flex' justifyContent='center' marginTop='1rem'>
                    <Paper component='span'>
                      <Button variant='contained' onClick={handlerremoveallproducts}>
                         RemoveAll
                      </Button>
                    </Paper>
                </Box>
              </Grid>
              }
      </Grid>
    </Container>
  )
}



const currencies = [
  {
    value: 'USD',
    label: 'New York'
  },
  {
    value: 'EUR',
    label: 'Chicago',
  },

];


export const SidebarCart = () => {

  const [value,setValue]=useState({
    massege:'',
    voucher:'',
    country:'',
    city:'',
    zipCode:''
  })

  const [currency, setCurrency] = useState('');

  const cart=useSelector((store)=>store.cart)
  
  const handleChange = (event) => {
    setCurrency(event.target.value);

  }

  const handleOnsubmit=(e)=>{
    e.preventDefault();
    
  }

  return (
      <Paper sx={{
        padding:'1rem 0'
      }}>
        <Container>
          <Box
           display='flex'
           justifyContent='space-between'
           alignItems='center'
           padding='1rem 0'
          >
             <Typography component='span'>Total:</Typography>
             <Typography component='span'>${cart.total}</Typography>
          </Box>
          <Divider/>
          <Box
           display='flex'
           justifyContent='start'
           alignItems='center'
           padding='0.7rem 0'
          >
            <Typography component='span'>Additional Comments</Typography>
            <Typography 
            marginLeft='0.7rem' 
            bgcolor='#d32f2f' 
            fontSize='0.8rem'
            component='span'
            padding='0.3rem 0.5rem'
            >Note</Typography>
          </Box>
          <form onSubmit={(e)=>handleOnsubmit(e)}>
          <Box
          marginBottom='1rem'
          >
            <FormControl fullWidth>
            <TextField
              variant='outlined'
              placeholder='write massege'
              multiline
              rows={5}
              maxRows={10}
              fullWidth
            />  
            </FormControl>
          </Box>        
          <Divider/>
         
         <Box>
          <Stack>
          <FormControl fullWidth variant="outlined">
          <InputLabel sx={{top:'-0.5rem'}} htmlFor="voucher">Voucher</InputLabel>
          <StyleOutlinedInput
            id="voucher"
            type='text'
            // value={values.password}
            // onChange={handleChange('password')}
            label="voucher"
           
          />
        </FormControl>
           <Button 
           variant="outlined"
           sx={{margin:'1rem 0'}}
           >Apply Voucher 
           </Button>
          </Stack>
         </Box>
         <Divider/>
         <Box>
           <Stack>
              <Typography 
              marginTop='1.5rem' 
              marginBottom='1rem' 
              component='span'>Shipping Estimates</Typography>
              <StyleFormControl fullWidth >
                  <Autocomplete
                      id="country-select"
                      fullWidth
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                          ...params.inputProps,
                    autoComplete: 'new-password', 
                }}
               />
              )}
            />
              <TextField 
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChange}
                  // helperText="Please select your currency"
                  
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
               </TextField>
                <TextField label='Zip Code' placeholder='Zip Code' fullWidth /> 
        
                <Button 
                  variant="outlined"
                  sx={{margin:'1rem 0',textTransform:'capitalize'}}
                  type='submit'
                  >calculation Shipping 
                </Button>
                <Button 
                  variant="contained"
                  sx={{textTransform:'capitalize'}}
                  >Checkout Now
                </Button>
              </StyleFormControl>
            
           </Stack>
         </Box>
         </form>
        </Container>
      </Paper>
  )
}





export default React.memo(Cart)