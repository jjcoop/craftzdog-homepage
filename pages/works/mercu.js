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
        A project for CSCI318 Software Engineering Principles and Practices. 
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
      </List>

      <WorkImage src="/images/works/mercu_01.png" alt="mercu" />
      <WorkImage src="/images/works/mercu_02.png" alt="mercu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
