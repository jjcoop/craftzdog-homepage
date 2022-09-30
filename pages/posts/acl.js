import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Anti-corruption Layer">
    <Container>
      <Title>
        ACL <Badge>2021-2022</Badge>
      </Title>
      <P>
        Fill out the body of the text here.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>References</Meta>
          <List ml={4} my={4}>
            <ListItem>
              <Text>this is some txt</Text>
              <Text>this is some txt</Text>
              <Text>this is some txt</Text>
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
