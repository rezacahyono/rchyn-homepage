import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Gojek Clone">
      <Container>
        <Title>
          Gojek Clone UI <Badge>2022</Badge>
        </Title>
        <P>
          An app clone from the Indonesian unicorn company, Gojek. This clone is
          to learn application design in terms of color, size, layout, and
          sequence.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/rezacahyono/GojekClone"
              target="_blank"
            >
              https://github.com/rezacahyono/GojekClone
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android.</span>
          </ListItem>
          <ListItem>
            <Meta>Tech</Meta>
            <span>Kotlin, ViewPager2, Navigation Components, Camerax.</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/contents/banner-gojek.png"
          alt="Gojek Clone"
        />
        <ProjectImage
          src="/images/contents/banner-gojek_2.png"
          alt="Gojek Clone"
        />
      </Container>
    </Layout>
  )
}

export default Project
