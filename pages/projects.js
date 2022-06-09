import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbGojek from '../public/images/contents/banner-gojek.png'
import thumbMath from '../public/images/contents/banner-mathio.png'
import thumbClock from '../public/images/contents/banner-clock.png'
import thumbRun from '../public/images/contents/banner-run.png'
import thumbTodo from '../public/images/contents/banner-todo.png'
import thumbRunUI from '../public/images/contents/banner-runui.png'
import Layout from '../lib/article'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
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
          <Section delay={0.1}>
            <ProjectGridItem
              id="clock"
              title="Digital Clock"
              thumbnail={thumbClock}
            >
              Digital clock design a simple.
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem id="run" title="Run Tracking" thumbnail={thumbRun}>
              Run Tracking app, an application to calculate your running
              distance and calculate the probability of calories burned.
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem id="todo" title="Todo App" thumbnail={thumbTodo}>
              Todo App using jetpack compose for design and implement clean
              architecture.
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              id="runui"
              title="Run UI/UX"
              thumbnail={thumbRunUI}
            >
              A simple desing running app, using figma.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
