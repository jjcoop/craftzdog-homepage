import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <div>&copy; {new Date().getFullYear()} jjcoop.app</div>
      This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</a>.

    </Box>
  )
}

export default Footer
