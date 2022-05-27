import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import thumbLinka from '../public/linka.png'

const Linka = () => {
  return (
    <Container>
      <Box flexShrink={0} mt={{ base: 6, md: 0 }} ml={{ md: 6 }} align="center">
        <Image src={thumbLinka} />
      </Box>
    </Container>
  )
}

export default Linka
