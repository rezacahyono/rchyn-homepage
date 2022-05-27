import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbGojek from '../public/images/contents/banner-gojek.png'
import thumbMath from '../public/images/contents/banner-mathio.png'

const Project = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Project
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <ProjectGridItem
            id="gojek"
            title="Gojek Clone"
            thumbnail={thumbGojek}
          >
            Learn the <b>UI/UX</b> design from the Indonesian unicorn company
            Gojek.
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id="math" title="Math.IO" thumbnail={thumbMath}>
            Calculator a simple app for calculate Rectangle, Square, Triangle,
            Circle, Parallelogram, Rhombus.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Project
