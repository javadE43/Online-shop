import  React,{useContext, useState} from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import {useTheme}from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import {StyleButton,StyledAppbar,StyleDrawer} from './index'
import Paper from '@mui/material/Paper';

import { useFormContext } from '../../../context/formContext';
import { CartShopping } from '../../cartShopping/CartShopping';
import  SignUp  from '../../signup/SignUp';
import { Login } from '../../login/Login';
import { Link } from 'react-router-dom';
import {MenuDesktop}from '../../menuDesktop/MenuDesktop'
import { SearchBar } from '../../searchbar/SearchBar';

export function AppBarDesktop() {

  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
    <Paper elevation={7} component='div'>
      <StyledAppbar sx={{maxHeight:'100px',justifyContent:'center',height:'98px'}} position="static">
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Box>
            <Toolbar>
              <CartShopping/>             
              <SignIn/>
            </Toolbar>
            </Box>
            <Box>
               <SearchBar/>
            </Box>
              <TitleNavbar/>    
        </Toolbar>
      </StyledAppbar>  
    </Paper>
    <MenuDesktop/>
    </>
  )
}


export const TitleNavbar = () => {
  return (
    <>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },color:'#4a5260' }}
          >
            <Link to='/'>
                Mojstar
            </Link> 
          </Typography>
        </Box>
    </>
  )
}

export const SignIn = () => {

  const {state,dispatch}=useContext(useFormContext)
  const [openModal, setOpenModal] =useState(false);
  const [type, setType] =useState('');
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenModal(true)
    setType(e.target.textContent)
    localStorage.removeItem('formdata')
    dispatch({type:'LOGOUT',payload:[]})
  };
  return (
    <>
        <>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <StyleButton onClick={handleClick} variant="outlined" endIcon={<PersonSharpIcon />} color='white'>
               {state.data.username?<>{state.data.username}</>:<>Sigin in</>} 
              </StyleButton>   
           </Typography>
          <Menu 
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{width:'100%'}}
          >
            <MenuItem sx={{width:'110px'}} onClick={handleClose}>rejester</MenuItem>
            <MenuItem sx={{width:'110px'}} onClick={handleClose}>login</MenuItem>
            <MenuItem sx={{width:'110px'}} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
        {type == 'rejester' &&  <SignUp setOpenModal={setOpenModal} openModal={openModal}/>}
        {type == 'login' &&  <Login setOpenModal={setOpenModal} openModal={openModal}/>}
    </>
  )
}
