import { Typography, Box } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect } from 'react'


function Coach() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  
    useEffect(() => {
        if(emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])
    
  return (
    <Box textAlign='center'>
    <div className="embla" ref={emblaRef}>
    <div className="embla__container">
      <div className="embla__slide">Slide 1</div>
      <div className="embla__slide">Slide 2</div>
      <div className="embla__slide">Slide 3</div>
    </div>
    <Box textAlign='center'>
      <Typography>info about current slide</Typography>
    </Box>
  </div>
  </Box>
  )
}

export default Coach