import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Kooper Security">
    <Container>
      <Title>
        Kooper Security <Badge>2021-2022</Badge>
      </Title>
      <P>
        A Capstone Project
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ksm.jjcoop.app/">
          https://ksm.jjcoop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, web3modal, Infura IPFS/RPC, Mumbai Testnet</span>
        </ListItem>
        <ListItem>
          <Meta>User Guide</Meta>
          <Link href="https://ksm.jjcoop.app/UserGuide">
            Set up the MetaMask extension with this userguide and interact with our
            expert stall demo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>My Contribution</Meta>
          <span>full-stack; infrastructure architecture, solidity code, hardhat local env, live deployments, smart contract tests, some web-dev</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ksm_01.png" alt="ksm" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/nrdiUv0iyAQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
