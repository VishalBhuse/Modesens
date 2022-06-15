import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Heading,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';



export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>CUSTOMER CARE</Heading>
            <Link href={'#'}>Shopper Protection</Link>
            <Link href={'#'}>Loyalty Program</Link>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Size Guides</Link>
            <Link href={'#'}>Contact Us / Feedback</Link>
            <Link href={'#'}>Shipping / Returns</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>INFORMATION</Heading>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Influencer Program</Link>
            <Link href={'#'}>Partner Stores</Link>
            <Link href={'#'}>Sitemap</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>Legal</Heading>
            <Link href={'#'}>Terms Of Use</Link>
            <Link href={'#'}>Disclosure</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>CONNECT WITH US</Heading>
            <Link href={'#'}>ModeSens App for IOS & Android</Link>
            <Link href={'#'}>Add to Browser</Link>
            
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>SHARE THE LOVE</Heading>
            <p>Your friends will thank you - more than once</p>
            <input w={'100%'} type="text" placeholder='Eneter email addresss separated by commas'/>
            <Button w={'100%'}>INVITE FRIENDS</Button>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'8xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'Twitter'} href={'#'}> */}
              <FaTwitter />
            {/* </SocialButton> */}
            {/* <SocialButton label={'YouTube'} href={'#'}> */}
              <FaYoutube />
            {/* </SocialButton> */}
            {/* <SocialButton label={'Instagram'} href={'#'}> */}
              <FaInstagram />
            {/* </SocialButton> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}