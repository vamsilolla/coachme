import React, { useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Landing() {

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
  }
  return (
    <div>
    <Typography variant='h4' textAlign='center'>Which would you like?</Typography>
    <Box textAlign='center'>
        <Button variant='outlined' onClick={() => handleClick('/tutor')}>Tutor</Button>
        <Button variant='outlined' onClick={() => handleClick('/coach')}>Coach</Button>
    </Box>
    </div>  
  )
}

export default Landing