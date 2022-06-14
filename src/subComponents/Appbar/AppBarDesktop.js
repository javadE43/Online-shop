import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import { Navbar } from '../navbar/Navbar';
import {MenuDesktop}from '../menuDesktop/MenuDesktop'
import { useMediaQuery } from '@mui/material';
import {useTheme}from '@mui/material/styles'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Login } from '../login/Login';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import {useNavigate}from 'react-router-dom'



export function AppBarDesktop() {

  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Box>
            <Navbar/>  
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <LabelBottomNavigation/>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <MenuDesktop/>
          </Box>
    </Box>
  );
}




 function LabelBottomNavigation() {

  const navigate=useNavigate()
  const [value, setValue] = useState('login');
  const [openModal, setOpenModal] =useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = (e) => {
    setOpenModal(true)
    console.log(openModal)
  }
  return (
    <BottomNavigation sx={{
       width: 500,
       position:'fixed',
       bottom:'0',
       width:'100%',
       zIndex:'1000',
       background:'#d32f2f' 
       }} 
       
       value={value} onChange={handleChange}>
      <BottomNavigationAction
        value="login"
        icon={<PersonOutlinedIcon color='white'/>}
        onClick={handleClose}
        
      />
      <BottomNavigationAction
        value="home"
        icon={<HomeIcon color='white'/>}
        onClick={()=>navigate('/')}
      />
      <BottomNavigationAction 
      value="Cart" 
      icon={<ShoppingCartIcon color='white'/>} 
      onClick={()=>navigate('/cart')}
      />

      <Login setOpenModal={setOpenModal} openModal={openModal}/>
    </BottomNavigation>
  );
}