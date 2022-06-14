import React,{useContext, useEffect, useState} from 'react'

import { SnackbarProvider, useSnackbar } from 'notistack';
import {useFormContext}from '../../context/formContext'
import { AddCircleOutlineOutlined, LockOutlined } from '@mui/icons-material'
import { Avatar,
   Box,
   Button, 
   Checkbox,
   Container,
   FormControl,
   FormControlLabel,
   FormLabel,
   Grid,
   Link,
   Paper,
   Radio,
   RadioGroup,
   Stack,
   TextField,
   Typography } from '@mui/material'

import Modal from '@mui/material/Modal';
import ClickAwayListener from '@mui/material/ClickAwayListener';



 const SignUp = ({setOpenModal,openModal}) => {

  const {state,dispatch}=useContext(useFormContext)
  const { enqueueSnackbar } = useSnackbar();
  const [ success,setsuccess ] = useState(false);
  const [value,setValue]=useState({
    username:'',
    email:'',
    gender:'',
    password:'',
    confirmPass:'',
    phone:'',
    accept:false,
 })
    const handleClose = () => setOpenModal(false);
    const handleOnsubmit=(e)=>{
      e.preventDefault();
      setOpenModal(false)
      setsuccess(true)
      dispatch({type:'success',payload:value})
      localStorage.setItem('formdata',JSON.stringify(value))
    }


  
    const handleClickVariant = (variant) =>{
      enqueueSnackbar(`Welcome ${state.data.username}!`, { variant });
    };
  
    useEffect(() => {
      if(state && success){handleClickVariant('success')}
      setsuccess(false)
    }, [success])


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
           height:'auto',
           width:'350px',
           margin:'20px auto',
       }}>
           <Grid item>
            <Stack alignItems='center'>
                <Avatar sx={{background:"#d32f2f"}}><AddCircleOutlineOutlined color='#f3f5f9'/></Avatar>
                   <Typography variant='h4'>Sign in</Typography> 
                   <Typography sx={{marginTop:'0.7rem'}} fontWeight='700' variant='caption'>please fill this from to create an account !</Typography> 
            </Stack>
           </Grid>
           <form onSubmit={handleOnsubmit}>
                <TextField 
                variant='standard'
                sx={{marginTop:'1rem'}}
                label='Username'
                placeholder='Enter username'
                fullWidth 
                required
                value={value.username}
                onChange={(e)=>setValue({...value,username:e.target.value})}
                />    
                <TextField
                 variant='standard'
                 sx={{marginTop:'1rem'}}
                 label='Email'
                 type='email'
                 placeholder='Enter Email'
                 fullWidth 
                 required
                 value={value.email}
                 onChange={(e)=>setValue({...value,email:e.target.value})}
                      />

                <FormControl sx={{margin:'1rem 0'}} component='fieldset'>
                    <FormLabel component='legend' id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                         value="female"
                         control={<Radio />}
                         label="Female" 
                         onChange={(e)=>setValue({...value,gender:e.target.value})}
                        
                        
                         />
                        <FormControlLabel
                         value="male"
                         control={<Radio />}
                         label="Male" 
                         onChange={(e)=>setValue({...value,gender:e.target.value})}
                         
                           />
                    </RadioGroup>
                </FormControl>
                <TextField
                 variant='standard'
                 sx={{marginTop:'1rem'}}
                 label='Phone'
                 placeholder='Enter phone'
                 fullWidth
                 required
                 onChange={(e)=>setValue({...value,phone:e.target.value})}
                 value={value.phone}
                 />    
                <TextField
                 variant='standard'
                 sx={{marginTop:'1rem'}}
                 label='Password' 
                 type='Password' 
                 placeholder='Enter Password' 
                 fullWidth 
                 required
                 value={value.password}
                 onChange={(e)=>setValue({...value,password:e.target.value})}

                   />
                <TextField
                 variant='standard'
                 sx={{marginTop:'1rem'}}
                 label='Confirm'
                 type='Password'
                 placeholder='Enter Confirm Password'
                 fullWidth 
                 required
                 value={value.confirmPass}
                 onChange={(e)=>setValue({...value,confirmPass:e.target.checked})}
                 />
                <FormControlLabel
                  control={
                  <Checkbox
                //    checked={state.checked}
                //    onChange={handlerchange}
                   name='check'
                   color='error'
                   onChange={(e)=>setValue({...value,accept:e.target.value})}
                  />
              }
              label='I accept the terms and conditions'
             />
                <Button variant='contained' type='submit' color='error'>Sign up</Button>
           </form>
       </Paper>
      </Grid>
    </Container>
    </Modal>
    
    </>
  )
}

export default React.memo(SignUp)