import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Run Tracking">
      <Container>
        <Title>
          Run Tracking <Badge>2021</Badge>
        </Title>
        <P>
          Run the Tracking app, an app to calculate your running distance and
          calculate possible calories burned. This application project is to
          fulfill the final semester exam for mobile programming courses.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/rezacahyono/runningTrack"
              target="_blank"
            >
              https://github.com/rezacahyono/runningTrack
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android.</span>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>
              Kotlin, Hilt, Room, MPAndroid Chart, Glide, Coroutines, Navigation
              Components, Google Maps SDK.
            </span>
          </ListItem>
        </List>
        <ProjectImage src="/images/contents/banner-run.png" alt="Gojek Clone" />
      </Container>
    </Layout>
  )
}

export default Project
