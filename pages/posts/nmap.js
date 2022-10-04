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
  <Layout title="Basic Pen-test">
    <Container>
      <Title>
        Penetration Testing with Metasploitable2 <Badge>2022</Badge>
      </Title>
      <P>
        A basic demonstration on information gathering, scanning, enumeration, and exploit.
        The lab is set up using the same NAT on VMware Workstation 16 Pro.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Resources</Meta>
          <List ml={4} my={4}>
            <ListItem>
              <ListItem>
              <Link href="https://www.kali.org/get-kali/#kali-installer-images/" target='_blank' rel='noopener noreferrer'>
                Kali <ExternalLinkIcon mx="2px" />
              </Link>
              </ListItem>
              <ListItem>   
              <Link href="https://docs.rapid7.com/metasploit/metasploitable-2/" target='_blank' rel='noopener noreferrer'>
                Metasploitable2 <ExternalLinkIcon mx="2px" />
              </Link>
              </ListItem>
              <ListItem>
              <Link href="https://securitytrails.com/blog/nmap-commands" target='_blank' rel='noopener noreferrer'>
                nmap commands <ExternalLinkIcon mx="2px" />
              </Link>
              </ListItem>
              <ListItem>
              <Link href="https://www.kali.org/tools/netdiscover/" target='_blank' rel='noopener noreferrer'>
                ARP reconnaissance tool <ExternalLinkIcon mx="2px" />
              </Link>
              </ListItem>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <WorkImage src="/images/posts/nmap/enumerate.png" alt="kali" />
      <WorkImage src="/images/posts/nmap/exploit.png" alt="kali" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
