import { LockOutlined } from '@mui/icons-material'
import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Link, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import  SignUp from '../signup/SignUp';




export const Login = ( {setOpenModal,openModal}) => {
  const [openSignup, setOpenSignup] =useState(false);

  const handleClose = () => setOpenModal(false);
  const handleSignup=(e)=>{
    e.preventDefault()
  setOpenModal(false)
  setOpenSignup(true)
  }
  console.log(openModal)
  return (
    <>
    <Modal
    open={openModal}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
   <Container maxWidth='xs'>
    <Grid>
       <Paper elevation={10} sx={{
           padding:'20px',
           height:'70vh',
           width:'300px',
           margin:'20px auto',
       }}>
           <Grid item>
            <Stack alignItems='center'>
                <Avatar sx={{background:"#d32f2f"}}><LockOutlined color='#f3f5f9'/></Avatar>
                   <Typography variant='h4'>Sign in</Typography> 
            </Stack>
           </Grid>
             
             <TextField sx={{marginTop:'1rem'}} label='Username' placeholder='Enter username' fullWidth required/>    
             <TextField sx={{marginTop:'1rem'}} label='Password' type='password' placeholder='Enter password' fullWidth required/>

             <FormControlLabel
              control={
                  <Checkbox
                //    checked={state.checked}
                //    onChange={handlerchange}
                   name='check'
                   color='error'
                  />

              }
              label='Remember me'
             />
             <Button variant='contained' type='submit' color='error' fullWidth>Sign in</Button>
             <Typography>
                 <Link href='#'>
                   Forget password ?
                 </Link>
             </Typography>
             <Typography>
                 Do you have an account?
                 <Link href='/' onClick={handleSignup}>
                    Sign up
                 </Link>
             </Typography>
       </Paper>
    </Grid>
    </Container>
    </Modal>
    {openSignup && <SignUp openModal={openSignup} setOpenModal={setOpenSignup}/>}
   
    </>
  )
}
