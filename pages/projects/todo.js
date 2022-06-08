import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Todo App">
      <Container>
        <Title>
          Todo App <Badge>2021</Badge>
        </Title>
        <P>
          a simple app to jot down what you need to do. with{' '}
          <b>high, medium, and low</b> priority levels. This application is made
          using Jetpack Compose with a clean architecture.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/rezacahyono/To-Do-App"
              target="_blank"
            >
              https://github.com/rezacahyono/To-Do-App
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android.</span>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Kotlin, Hilt, Jetpack Compose, Room, Data Store.</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/contents/banner-todo.png"
          alt="Gojek Clone"
        />
      </Container>
    </Layout>
  )
}

export default Project
