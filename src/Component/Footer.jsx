import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Heading,
  useColorModeValue,
  Button,
  Center,
  Image,
  HStack,
  Input,
  Checkbox,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Center>
        <Box
        height={"30vh"}>
          <Text fontWeight={"600"} mt="40px">
            When you follow our links to visit a brand or retailer’s website or
            make a purchase, ModeSens may earn a commission.
          </Text>
        </Box>
      </Center>

      <Box
      width={'98%'}
      margin={"auto"} 
       borderBottom={'1px solid black'} 
       borderTop={'1px solid black'}

      color={useColorModeValue("gray.700", "gray.200")}>
        <Container as={Stack} maxW={"8xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={"flex-start"}>
              <Heading
                as="h4"
                mb={'5px'}
                size="md"
                fontSize={"15px"}
                fontWeight={"500"}
                letterSpacing={"3px"}
              >
                CUSTOMER CARE
              </Heading>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Shopper Protection
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Loyalty Program
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Help Center
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Size Guides
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Contact Us / Feedback
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Shipping / Returns
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Heading
                as="h4"
                mb={'5px'}
                size="md"
                fontSize={"15px"}
                fontWeight={"500"}
                letterSpacing={"3px"}
              >
                INFORMATION
              </Heading>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                About Us
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Influencer Program
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Partner Stores
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Sitemap
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Heading
                as="h4"
                mb={'5px'}
                size="md"
                fontSize={"15px"}
                fontWeight={"500"}
                letterSpacing={"3px"}
              >
                Legal
              </Heading>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Terms Of Use
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Disclosure
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Privacy Policy
              </Link>
              <Link
                fontSize={"15px"}
                color={"#7F7F7F"}
                lineHeight={"16px"}
                fontWeight={"600"}
                href={"#"}
              >
                Community Guidelines
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <Heading
                as="h4"
                mb={'5px'}
                size="md"
                fontSize={"15px"}
                fontWeight={"500"}
                letterSpacing={"3px"}
              >
                CONNECT WITH US
              </Heading>
              <HStack>
                <Image
                  src="https://cdn.modesens.com/static/img/20181127add_app.svg"
                  boxSize={"30px"}
                ></Image>

                <Link
                  fontSize={"15px"}
                  color={"#7F7F7F"}
                  lineHeight={"16px"}
                  fontWeight={"600"}
                  href={"#"}
                >
                  ModeSens App for IOS & Android
                </Link>
              </HStack>

              <HStack>
                <Image
                  src="https://cdn.modesens.com/static/img/20181127add_browse.svg"
                  boxSize={"30px"}
                ></Image>

                <Link
                  fontSize={"15px"}
                  color={"#7F7F7F"}
                  lineHeight={"16px"}
                  fontWeight={"600"}
                  href={"#"}
                >
                  Add to Browser
                </Link>
              </HStack>
            </Stack>

            <Stack align={"flex-start"}>
              <Heading
                as="h4"
                mb={'5px'}
                size="md"
                fontSize={"15px"}
                fontWeight={"500"}
                letterSpacing={"3px"}
              >
                NEWSLETTER SIGN UP
              </Heading>
              <Input placeholder="Enter Email" variant={'flushed'}/>
              <HStack mt="20px" spacing={'50px'} >
              <Checkbox >Women's</Checkbox>
              <Checkbox >Man's</Checkbox>
              </HStack>
              <br />
              <Button colorScheme={'blackAlpha'}  w={"100%"}>Submit</Button>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box
      m={'20px'}
      >
        <Container
          as={Stack}
          maxW={"8xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <HStack>
            <Image
              src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
              boxSize={"2rem"}
            ></Image>
            <Text fontWeight={"500"} fontSize={"14px"}>
              © 2022, ModeSens In
            </Text>
          </HStack>
          <Stack direction={"row"} spacing={6}>
            <HStack>
              <Image
                src="https://cdn.modesens.com/static/img/20181008footer-pit.svg"
                boxSize={"30px"}
                width={"50px"}
              ></Image>
              <Image
                src="https://cdn.modesens.com/static/img/20181008footer-tt.svg"
                boxSize={"30px"}
                width={"50px"}
              ></Image>
              <Image
                src="https://cdn.modesens.com/static/img/footer-p.svg"
                width={"50px"}
              ></Image>
              <Image
                src="https://cdn.modesens.com/static/img/footer-fb.svg"
                width={"50px"}
              ></Image>
              <Image
                src="https://cdn.modesens.com/static/img/footer-wb.svg"
                width={"50px"}
              ></Image>
              <Image
                src="https://cdn.modesens.com/static/img/footer-wx.svg"
                width={"50px"}
              ></Image>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
