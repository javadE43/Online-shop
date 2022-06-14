import React,{useEffect,useState} from 'react'

import { Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import {StyleBox,StyleLink,StyleList} from './index'


const dataFooter=[
    {
    },
]



 const Footer = (props) => {
  return (
    <StyleBox 
      component='section'
    >
        <Container maxWidth='xl' 
         sx={{padding:'80px 0'}}
        >
             <Grid container>
                <Grid item md={4} sm={6} xs={12} >
                    <Stack>
                        <StyleLink to='/' 
                         style={{marginBottom:'20px'}}
                        >
                          <Typography variant='h4' component='h2'>
                                 Mojstar
                          </Typography>
                        </StyleLink>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                               libero id et, in gravida. Sit diam duis mauris nulla cursus. 
                               Erat et lectus vel ut sollicitudin elit at amet
                          </Typography>
                           <Box 
                            display='flex'
                           >
                               <StyleLink to='/'>
                                 <Box 
                                 margin='8px'
                                 padding='10px 16px'
                                 borderRadius='5px'
                                 color='#fff'
                                 bgcolor='#0C2A4D'
                                 display='flex'
                                 >
                                      <GoogleIcon/>
                                      <Stack
                                      marginLeft='8px'
                                      >
                                        <Typography fontWeight='600' fontSize='8px' component='span'>
                                            git it on
                                        </Typography>
                                        <Typography fontWeight='900' fontSize='14px' component='span'>
                                        Google Play
                                        </Typography>
                                       </Stack>
                                 </Box>
                               </StyleLink> 
                               <StyleLink to='/'>
                                 <Box 
                                 margin='8px'
                                 padding='10px 16px'
                                 borderRadius='5px'
                                 color='#fff'
                                 bgcolor='#0C2A4D'
                                 display='flex'
                                 >
                                      <GoogleIcon/>
                                      <Stack
                                      marginLeft='8px'
                                      >
                                        <Typography fontWeight='600' fontSize='8px' component='span'>
                                            git it on
                                        </Typography>
                                        <Typography fontWeight='900' fontSize='14px' component='span'>
                                        Google Play
                                        </Typography>
                                       </Stack>
                                 </Box>
                               </StyleLink>
                          </Box>     
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6} xs={12} >
                    <Stack>
                        <Typography marginBottom='20px' fontWeight='600' fontSize='25px' component='span' color='#fff'>
                               About us
                        </Typography>
                        <StyleList 
                        component='ul'
                        sx={{display:'flex',justifyContent:'center',flexDirection:'column',color:'#fff'}}
                        >
                            <ListItem>
                                <Link  to='/'>Careers</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Our Stores</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Our Cares</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Terms & Conditions</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Privacy Policy</Link>
                            </ListItem>
                        </StyleList>
                    </Stack>
                        
                </Grid>
                <Grid item md={3} sm={6} xs={12} >
                    <Stack>
                        <Typography marginBottom='20px' fontWeight='600' fontSize='25px' component='span' color='#fff'>
                            Customer Care
                        </Typography>
                        <StyleList 
                        component='ul'
                        sx={{display:'flex',justifyContent:'center',flexDirection:'column',color:'#fff'}}
                        >
                            <ListItem>
                                <Link  to='/'>Help Center</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>How to Buy</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Track your Order</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Corporate & Bulk Purchasing</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>Returns & Refunds</Link>
                            </ListItem>
                        </StyleList>
                    </Stack>
                        
                </Grid>
                <Grid item md={3} sm={6} xs={12} >
                    <Stack>
                        <StyleLink to='/' 
                         style={{marginBottom:'20px'}}
                        >
                          <Typography variant='h4' component='h2'>
                          Contact Us
                          </Typography>
                        </StyleLink>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                             70 Washington Square South, New York, NY 10012, United States
                          </Typography>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                             Email: uilib.help@gmail.com
                          </Typography>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                             Phone: +1 1123 456 780
                          </Typography>
                           <Box 
                            display='flex'
                           >
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                     <FacebookOutlinedIcon color='error'/>
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                     <TwitterIcon  color='error'/>
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                     <GoogleIcon  color='error'/>
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                     <LinkedInIcon  color='error'/>
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                    <GoogleIcon  color='error'/>
                                  </IconButton>
                              </StyleLink>
                          </Box>     
                    </Stack>
                </Grid>
             </Grid>  
        </Container>

    </StyleBox>
  )
}


export default React.memo(Footer)