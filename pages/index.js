import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Button,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../lib/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('purple.200', 'purple.500')}
          p={3}
          mb={6}
          align="center"
        >
          Hello👋,I&apos;m a junior android developer based in jakarta!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant={'page-title'}>
              Reza Cahyono
            </Heading>
            <p>Java, Kotlin, Android, Javascript, Figma </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderWidth={2}
              borderColor={useColorModeValue(
                'blackAlpha.500',
                'whiteAlpha.800'
              )}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/reza.png"
              alt="Avatar Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Reza is a junior android developer based in South Jakarta. He
            already has several projects stored in his github repository. He
            enjoys solving problems at hand and pouring them into technology. He
            wants to be Steve Jobs a visionary and Bill Gates a businessman. Not
            only that, he is passionate about fine arts😊.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Project
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Jakarta Selatan👶.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Graduated from SMPN 267, South Jakarta🧑‍🎓.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated from SMAN 86, South Jakarta with the Social Sciences study
            program🧑‍🎓.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Currently studying for a bachelor&apos;s degree at a private
            university, Budi Luhur University, an information science study
            program👨‍💻.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I🤍
          </Heading>
          <Paragraph>
            Art, <Link>Drawing</Link>, Playing Game, <Link>Otomotif</Link>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
