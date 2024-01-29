import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';

export const AddCowDataForm = () => {
  const form = useForm ({
    defaultValues: {
      ID: "",
      Name: "",
      BirthDate: "",
      MotherID: "",
    },
  });

  const {register, handleSubmit} = form;

  
  const onSubmit =(data)=>{
    const postData = Object.entries(data)
  .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
  .join('&');

    fetch("https://script.google.com/macros/s/AKfycbw3fKeWEhF1z4J6hoymlonBcucL9sxIWpofrSQndRm5iy5ZZJKL4f4kxcknWL6Mlr0N/exec",{
      method: "POST",
      body: postData,
      headers:{
        "Content-Type": "text/plain;charset=utf-8",
      },
      redirect : "follow"
    })
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
     
        <TextField
          id="outlined-number"
          label="ID"
          type="ID"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("ID")}
        />
        <TextField
          required
          id="outlined-required"
          label="Name"
          {...register("Name")}
        />
        <TextField
          required
          id="outlined-required"
          label="BirthDate"
          {...register("BirthDate")}
        />
        <TextField
          required
          id="outlined-required"
          label="MotherID"
          {...register("MotherID")}
        />
        {/* <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        /> */}
       
        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
     
    </Box>
  );
}
