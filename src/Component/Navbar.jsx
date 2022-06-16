import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  Link,
  useColorModeValue,
  Image,
  useDisclosure,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon  } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"sticky"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Heading color={"grey.700"} fontSize={"1xl"}>
            MODESENS
          </Heading>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Menu>
            <MenuButton>
              <VscLock />
            </MenuButton>
            <MenuButton>
              <AiOutlineUser />
            </MenuButton>
            <MenuList fontSize={"13px"}>
              <MenuItem>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <VStack align={"left"}>
                  <Text>Earn Points</Text>
                  <Text>Sign up to unlock all the benifits</Text>
                </VStack>
              </MenuItem>
              <MenuItem fontWeight={"600"}>My Likes</MenuItem>
              <MenuItem fontWeight={"600"}>My Alerts</MenuItem>
              <MenuItem fontWeight={"600"}>My Recently Viewd</MenuItem>
              <hr />
              <MenuItem fontWeight={"600"}>My Closet</MenuItem>
              <MenuItem fontWeight={"600"}>My Orders</MenuItem>
              <MenuItem fontWeight={"600"}>My Save Searches</MenuItem>
              <MenuItem fontWeight={"600"}>My Loyality</MenuItem>
              <MenuItem fontWeight={"600"}>My Message</MenuItem>
              <MenuItem fontWeight={"600"}>Invite Friends</MenuItem>
              <MenuItem fontWeight={"600"}>Setting</MenuItem>
              <hr />
              <MenuItem fontWeight={"600"}>Log in</MenuItem>
            </MenuList>
          </Menu>
          <Text>
            <HStack>
              <FiSearch />
              Search
            </HStack>
          </Text>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      <br />
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={"row"} spacing={4}>
      <Box>        
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          WOMEN
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          MEN
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          BEAUTY
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          KIDS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          OFFERS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          DESINERS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "underline",
          }}
        >
          COMMUNITY
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          WHY MODESENS
        </Link>
      </Box>
    </Stack>
  );
};

  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        <Box>
            <VStack>
            <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          WOMEN
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          MEN
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          BEAUTY
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          KIDS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          HOME
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          OFFERS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          DESINERS
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "underline",
          }}
        >
          COMMUNITY
        </Link>
        <Link
          p={2}
          fontSize={"15px"}
          fontWeight={"500"}
          color={"grey.300"}
          _hover={{
            textDecoration: "none",
          }}
        >
          WHY MODESENS
        </Link>
            </VStack>
        </Box>
      </Stack>
    );
  };

