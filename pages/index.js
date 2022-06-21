import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Button,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../lib/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('purple.500', 'purple.200')}
          p={3}
          mb={6}
          align="center"
          color={useColorModeValue('white', 'black')}
        >
          Hello there👋,I&apos;m a junior android developer based in south
          jakarta!
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
          <Heading
            as="h3"
            variant="section-title"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
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
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in South Jakarta👶.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Graduated from junior high school in South Jakarta🧑‍🎓.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Graduated from high school in South Jakarta with social science
            study program🧑‍🎓.
          </BioSection>
          <BioSection>
            <BioYear>2019 to present</BioYear>
            Currently studying for a bachelor&apos;s degree at a private
            university, taking an information science study program👨‍💻.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            I💜
          </Heading>
          <Paragraph>
            Art, <Link>Drawing</Link>, Playing Game,
            <Link> Automotive</Link>.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            color={useColorModeValue('purple.500', 'purple.200')}
          >
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.instagram.com/rezacahyno/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @rezacahyno
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/rezacahyn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Rezacahyn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/rezacahyono" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @rezachyno
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
