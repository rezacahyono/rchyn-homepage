import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Digital Clock">
      <Container>
        <Title>
          Digital Clock <Badge>2020</Badge>
        </Title>
        <P>
          Digital and analog clock into one part. with a beautiful design for
          the night because with a dark theme.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://clock-time.vercel.app/" target="_blank">
              https://clock-time.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/rezacahyono/clock-time"
              target="_blank"
            >
              https://github.com/rezacahyono/clock-time
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Browser.</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html, Css, Javascript.</span>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/contents/banner-clock.png"
          alt="Gojek Clone"
        />
      </Container>
    </Layout>
  )
}

export default Project
