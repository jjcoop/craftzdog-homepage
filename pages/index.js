import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        id="ello"
      >
        Hello, I&apos;m a CompSci Student completing my degree at UOW!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jacob Cooper
          </Heading>
          <p>Digital Crafts-person ( Engineer / Dev / Design )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="90px"
            h="90px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jacob.jfif"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jacob is a full time student at Wollongong University undertaking a
          computer science bachelor majoring in cybersecurity and software
          engineering. He enjoys learning the curriculum as well as home labbing.
          He enjoys planning and implementing cloud based systems, and currently holds
          a {' '}
          <Link href="https://www.credly.com/badges/1cd6353a-7ab7-4bbd-9fb6-b809f942f26b/public_url" target="_blank" rel='noopener noreferrer'>
          CCP 
          </Link>
           {' and '}
          <Link href="https://www.credly.com/badges/b5bd7698-2be9-48cb-bea3-d2b50879dbec/public_url" target="_blank" rel='noopener noreferrer'>
            SAA
          </Link>
          {' '} from AWS. Recently interested in domain driven development
          of micro-services. When not online, he enjoys spending time with his young
          family and getting out into nature.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>199?</BioYear>
          Born in Australia.
        </BioSection>
        <BioSection>
          <BioYear>2000</BioYear>
          Moved to TX, USA.
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Highschool back in Australia.
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Joined the Australian Defence Force!
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Diploma of Information Technology Networking, Information Technology.
        </BioSection>
        <BioSection>
          <BioYear>2020 to Present</BioYear>
          Completing Bachelor of Computer Science, majoring in Software
          Engineering and Cybersecurity at the University of Wollongong.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          👍 Likes
        </Heading>
        <Paragraph>
          SEED labs, {' '}
          <Link href="/works/ksm" target="_blank" rel='noopener noreferrer'>
            DApps
          </Link>
          , Nextjs, IaaS, cybersecurity, skateboarding
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jjcoop" target="_blank" rel='noopener noreferrer'>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @jjcoop
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/cooper-jacob" target="_blank" rel='noopener noreferrer'>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @me
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
