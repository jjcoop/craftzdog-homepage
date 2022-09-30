import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { LinkedGridItem } from '../components/grid-item'

import thumbKSM from '../public/images/works/ksm_01.png'
import thumbMercu from '../public/images/works/mercu_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <LinkedGridItem link="works" id="ksm" title="Kooper Security" thumbnail={thumbKSM}>
            Decentralised application that facilitates contractural agreements between
            an SME and a Security Expert.
          </LinkedGridItem>
        </Section>
        <Section>
          <LinkedGridItem link="works" id="mercu" title="mercu" thumbnail={thumbMercu}>
            A project designed using Domain Driven Development methodology.
          </LinkedGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
