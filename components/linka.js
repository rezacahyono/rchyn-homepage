import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import thumbLinka from '../public/linka.png'

const Linka = () => {
  return (
    <Container>
      <Box align="center">
        <Image src={thumbLinka} />
      </Box>
    </Container>
  )
}

export default Linka
