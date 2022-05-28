import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Linka from '../linka'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/rc.ico" type="image/x-icon" />
        <title>Rchyno - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <Linka />
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
