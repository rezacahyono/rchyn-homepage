import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Run UI/UX">
      <Container>
        <Title>
          Run UI/UX <Badge>2019</Badge>
        </Title>
        <P>
          A simple design running app for mobile. Build using figma tools. With
          beutiful design and fresh.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://www.figma.com/file/Q2hFi9QVHARkFpNayPqaPU/Running?node-id=201%3A3230">
              figma.com/runui
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile.</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/contents/banner-runui.png" alt="Run UI/UX" />
      </Container>
    </Layout>
  )
}

export default Project
