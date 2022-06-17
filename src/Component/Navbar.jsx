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
  useColorModeValue,
  Image,
  useColorMode,
  useDisclosure,
  VStack,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Modal from "react-modal";
import GoogleButton from "react-google-button";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const { logout, user, setUser } = UserAuth();

  const [modalOpen, setModalOpen] = useState(false);
  // const {login}= useUserAuth();
  const { googleSignIn } = UserAuth();

  const handleChange = () => {
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handlegoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {}
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailLogin = () => {
    // console.log(email,password)
    var logUser = {
      email: email,
      password: password,
    };
    setUser(logUser);
    setEmail("");
    setPassword("");
    setModalOpen(false);
  };

  useEffect(() => {
    const modal = setTimeout(() => {
      setModalOpen(true);
    }, 2000);

    return () => clearTimeout(modal);
  }, []);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 99 }}>
      <Box>
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
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to={"/"}>
              <Image
                src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                width="150px"
                height={"25px"}
              ></Image>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={3}
          >
            <button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <button>
              <VscLock />
            </button>
            <Menu>
              <MenuButton>
                <AiOutlineUser />
              </MenuButton>
              <MenuList fontSize={"13px"}>
                <MenuItem>
                  <Image
                    boxSize="2rem"
                    src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
                    alt="Fluffybuns the destroyer"
                    mr="25px"
                  />
                  <VStack align={"left"}>
                    <Text>Earn Points</Text>
                    <Text color={"tomato"}>
                      Sign up to unlock all the benifits
                    </Text>
                  </VStack>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Likes </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Alerts </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Recently Viewd</Link>
                </MenuItem>
                <hr />
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Closet </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Orders </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Save Searches</Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Loyality </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> My Message </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> Invite Friends </Link>
                </MenuItem>
                <MenuItem fontWeight={"600"}>
                  <Link to={"#"}> Setting </Link>
                </MenuItem>
                <hr />
                {user ? (
                  <MenuItem onClick={handleSignOut} fontWeight={"600"}>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() => setModalOpen(true)}
                    fontWeight={"600"}
                  >
                    Login
                  </MenuItem>
                )}

                <Modal
                  style={{
                    overlay: {
                      background: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(5px)",
                      zIndex:99
                    },
                    content: {
                      width: "60%",
                      margin: "auto",
                      textAlign: "center",
                      // padding:'5%'
                    },
                  }}
                  onRequestClose={() => setModalOpen(false)}
                  isOpen={modalOpen}
                >
                  <p
                    onClick={() => setModalOpen(false)}
                    className={styles.close}
                  >
                    &times;
                  </p>
                  <Image
                    className={styles.logo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfI2p7YKkg-T8uAceBDRoAWhiqVQhYAZi__5zXyA2bD_DhffvrEPMIinaTTcOwY4-tMg&usqp=CAU"
                    alt="Dan Abramov"
                  />

                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "larger",
                      marginTop: "20px",
                    }}
                  >
                    Create an Account
                  </h1>
                  <h3>
                    Compare across 500+ stores to find <br /> the best price.
                  </h3>
                  <Input
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "70%", marginBottom: "2%" }}
                    className={styles.inputBox}
                    placeholder="Email"
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "70%",
                      margin: "auto",
                    }}
                  >
                    <Input
                      style={{ margin: "auto" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={passwordType}
                      className={styles.inputBox}
                      placeholder="Password"
                    />

                    <Button style={{}} onClick={handleChange}>
                      {passwordType == "password" ? (
                        <AiFillEyeInvisible />
                      ) : (
                        <AiFillEye />
                      )}
                    </Button>
                  </div>

                  <Button
                    onClick={handleEmailLogin}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "3%",
                    }}
                    mr={3}
                  >
                    Login
                  </Button>

                  <h4 className={styles.line}>or</h4>
                  <br />
                  <div>
                    <GoogleButton
                      onClick={handlegoogleSignIn}
                      style={{ margin: "auto" }}
                      type="light"
                    />
                  </div>
                  <br />

                  <Link to="/login">
                    Already have an account? Please sign in
                  </Link>
                  <p style={{ marginTop: "13px" }}>
                    By creating an account, I agree to <br /> the Terms Of Use
                    and the Privacy Policy
                  </p>
                </Modal>
              </MenuList>
            </Menu>

            <HStack>
              <FiSearch />
              <Text>
                <Menu>
                  <MenuButton as={Box} style={{ cursor: "pointer" }}>
                    Search
                  </MenuButton>
                  <MenuList width={"100%"} mr="150px" p={0}>
                    <HStack>
                      <Input
                        placeholder="Search by keyword and store URL"
                        width={"100%"}
                      />
                    </HStack>
                  </MenuList>
                </Menu>
              </Text>
            </HStack>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <br />
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <HStack spacing={"25px"}>
          <Link to={"/products/0"}>
            <Text
              fontSize={"13px"}
              fontWeight={"500"}
              border="1px solid #fff"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
            >
              WOMEN
            </Text>
          </Link>
          <Link to={"/products/1"}>
            <Text
              fontSize={"13px"}
              fontWeight={"500"}
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
            >
              MEN
            </Text>
          </Link>
          <Link to={"/products/2"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              BEAUTY
            </Text>
          </Link>
          <Link to={"/products/3"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              KIDS
            </Text>
          </Link>
          <Link to={"/products/4"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              HOME
            </Text>
          </Link>
          <Link to={"#"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              OFFERS
            </Text>
          </Link>
          <Link to={"/products/5"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              DESINERS
            </Text>
          </Link>
          <Link to={"#"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
              fontSize={"13px"}
              fontWeight={"500"}
            >
              COMMUNITY
            </Text>
          </Link>
          <Link to={"#"}>
            <Text
              fontSize={"13px"}
              fontWeight={"500"}
              border="1px inherit"
              _hover={{
                fontSize: "13px",
                borderBottom: "1px solid red",
              }}
            >
              WHY MODESENS
            </Text>
          </Link>
        </HStack>
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
          <Link to={"#"}>WOMEN</Link>
          <Link to={"#"}>MEN</Link>
          <Link to={"#"}>BEAUTY</Link>
          <Link to={"#"}>KIDS</Link>
          <Link
            to={"#"}
            p={2}
            fontSize={"15px"}
            fontWeight={"500"}
            color={"grey.300"}
          >
            HOME
          </Link>
          <Link
            to={"#"}
            p={2}
            fontSize={"15px"}
            fontWeight={"500"}
            color={"grey.300"}
          >
            OFFERS
          </Link>
          <Link
            to={"#"}
            p={2}
            fontSize={"15px"}
            fontWeight={"500"}
            color={"grey.300"}
          >
            DESINERS
          </Link>
          <Link
            to={"#"}
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
            to={"#"}
            p={2}
            fontSize={"15px"}
            fontWeight={"500"}
            color={"grey.300"}
          >
            WHY MODESENS
          </Link>
        </VStack>
      </Box>
    </Stack>
  );
};
