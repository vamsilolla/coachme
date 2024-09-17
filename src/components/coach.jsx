import { Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'
import Carousel from "./Carousel"

function Coach() {

  
const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <Box textAlign='center'>
    <Carousel slides={SLIDES} options={OPTIONS}/>
    <Box textAlign='center'>
      <Typography>info about current slide</Typography>
    </Box>
  </Box>
  )
}

export default Coach