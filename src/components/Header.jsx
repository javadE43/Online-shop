import React from 'react'
import {useMediaQuery}from '@mui/material'
import {useTheme}from '@mui/material/styles'
import { AppBarDesktop } from '../subComponents/Appbar/AppBarDesktop';

 const Header = () => {
  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>{matches?<AppBarDesktop/>:<AppBarDesktop/>}</div>
  )
}


export default React.memo(Header)