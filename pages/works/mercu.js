import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mercury Cycles">
    <Container>
      <Title>
        Mercury Cycles <Badge>2021-2022</Badge>
      </Title>
      <P>
        A small group project for CSCI318 Software Engineering Principles and Practices.
        Creating N-tier micro-services in application built on the Java Spring Boot framework using the 
        domain driven design methodology. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/jjcoop/mercu">
          https://github.com/jjcoop/mercu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Spring Boot, JPA</span>
        </ListItem>
        <ListItem>
          <Meta>My Contribution</Meta>
          <span>front-end design with MUI, back-end for procurement and inventory, and 70% of the sales micro-services.</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mercu_01.png" alt="mercu" />
      <WorkImage src="/images/works/mercu_02.png" alt="mercu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
