import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Math.IO">
      <Container>
        <Title>
          Math IO <Badge>2022</Badge>
        </Title>
        <P>
          Simple application to calculate Rectangle Square Triangle Circle
          Parallelogram Rhombus. with a fresh and beautiful design.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/rezacahyono/Math.Io">
              https://github.com/rezacahyono/Math.Io
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android.</span>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Kotlin, Navigation Components, Circle Image View.</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/contents/banner-mathio.png"
          alt="Gojek Clone"
        />
        <ProjectImage
          src="/images/contents/banner-math_2.png"
          alt="Gojek Clone"
        />
      </Container>
    </Layout>
  )
}

export default Project
