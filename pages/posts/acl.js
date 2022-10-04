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
  <Layout title="Anti-corruption Layer">
    <Container>
      <Title>
        ACL <Badge>2022</Badge>
      </Title>
      <P>
        The anti-corruption layer is a method used to integrate legacy API. Similar to a facade,
        the ACL acts like a template that does not contain business logic and allows for a 
        distributed shared context. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>References</Meta>
          <List ml={4} my={4}>
            <ListItem>
              <Link href="https://github.com/jjcoop/mercu">
                https://github.com/jjcoop/mercu <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mercu_01.png" alt="mercu" />
      <WorkImage src="/images/works/mercu_02.png" alt="mercu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
