import { Container, Badge } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title } from '../../components/project'
// import P from '../../components/paragraph'
import Layout from '../../lib/article'

const Project = () => {
  return (
    <Layout title="Gojek Clone">
      <Container>
        <Title>
          Gojek Clone UI <Badge>2020</Badge>
        </Title>
      </Container>
    </Layout>
  )
}

export default Project