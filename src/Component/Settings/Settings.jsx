import React from "react";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import styles from "./Settings.module.css";
import { AlertDialogCloseButton, Button, Divider, useDisclosure } from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Settings = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const cancelRef = React.useRef();

    const [value, setValue] = useState("");

    const [updatedvalue, setUpdatedvalue] = useState({});

    const [newvalue, setNewvalue] = useState(JSON.parse(localStorage.getItem("profiledata")));

    const handlechange = (e) => {
        let{name, value,files} = e.target;

        if(name === "profilepic"){
            setUpdatedvalue({...updatedvalue,[name]:files[0]})
        }else{
            setUpdatedvalue({...updatedvalue,[name]:value})
        }
        
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("profiledata",JSON.stringify(updatedvalue));
    }

  return (
    <div>
        <p className={styles.heading}>Settings</p>
      
      <div>
        <Accordion margin={"auto"} w={"60%"} defaultIndex={[0]} allowMultiple>
          <AccordionItem marginTop={"20px"} border={"1px solid silver"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      flex="1"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      marginTop={"10px"}
                      marginBottom={"10px"}
                    >
                      My Profile
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </Box>
                  </AccordionButton>
                  <Divider width={"95%"} margin={"auto"}  />
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.profilediv}>
                    <div className={styles.profilephotosection}>
                      <div className={styles.ptagdiv}>
                        <label>Profile Photo</label>
                      </div>

                      <div className={styles.pimagediv}>
                        <img
                          className={styles.profileimg}
                          src="https://cdn.modesens.com/user?w=400&"
                        />
                      </div>

                      <div className={styles.cbtndiv}>
                        <input name="profilepic" onChange={handlechange} type="file" className={styles.cbtn}></input>
                      </div>
                    </div>

                    <form onSubmit={handlesubmit}>
                      <div className={styles.usersection}>
                        <div className={styles.pusername}>
                          <label>Username:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="username" type="text" className={styles.input} defaultValue={newvalue ? newvalue.username : "username"} onChange={handlechange}/>
                        </div>
                      </div>


                      <div className={styles.whatssection}>
                        <div className={styles.whats}>
                          <label>What's Up:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="whatsup" type="text" className={styles.input} onChange={handlechange} defaultValue={newvalue ? newvalue.whatsup : "This is my closet. This is my style."} />
                        </div>
                      </div>

                      <div className={styles.biosection}>
                        <div className={styles.bio}>
                          <label>Bio:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="bio" className={styles.input} onChange={handlechange} defaultValue={newvalue ? newvalue.bio : "This is my closet. This is my style."} />
                        </div>
                      </div>

                      <p className={styles.pinfo}>Personal Info</p>


                      <div className={styles.fnamesection}>
                        <div className={styles.fname}>
                          <label>First Name:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="firstname" onChange={handlechange} defaultValue={newvalue ? newvalue.firstname : ""} className={styles.input} placeholder="FIRSTNAME" />
                        </div>
                      </div>

                      <div className={styles.lnamesection}>
                        <div className={styles.lname}>
                          <label>Last Name:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="lastname" onChange={handlechange}  defaultValue={newvalue ? newvalue.lastname : ""}  className={styles.input} placeholder="LASTNAME" />
                        </div>
                      </div>

                      <div className={styles.citysection}>
                        <div className={styles.cityname}>
                          <label>City:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="city" onChange={handlechange}  defaultValue={newvalue ? newvalue.city : ""}  className={styles.input} />
                        </div>
                      </div>

                      <div className={styles.birthdaysection}>
                        <div className={styles.birthday}>
                          <label>Birthday:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <input name="birthday"  defaultValue={newvalue ? newvalue.birthday : ""}  onChange={handlechange} className={styles.input}/>
                        </div>
                      </div>

                      <div className={styles.gendersection}>
                        <div className={styles.gender}>
                          <label>Gender:</label>
                        </div>

                        <div className={styles.inputdiv}>
                          <select name="gender" onChange={handlechange}  defaultValue={newvalue ? newvalue.gender : ""}  className={styles.genderselector}>
                            <option>Unspecified</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Kids</option>
                          </select>
                        </div>
                      </div>

                      <button className={styles.submitbtn} type="submit">SAVE</button>
                    </form>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem marginTop={"20px"} border={"1px solid silver"}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      flex="1"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      marginTop={"10px"}
                      marginBottom={"10px"}
                    >
                      Account & Security
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </Box>
                  </AccordionButton>
                  <Divider width={"95%"} margin={"auto"}  />
                </h2>
                <AccordionPanel pb={4}>
                <div className={styles.profilediv}>
                <div className={styles.profilephotosection}>
                      <div className={styles.ptagdiv}>
                        <label>Email:</label>
                      </div>

                      <div className={styles.acinputdiv}>
                          <p className={styles.input}>Email</p>
                      </div>

                      <div className={styles.acbtndiv}>
                        <button className={styles.acbtn}>Change Email</button>
                      </div>
                    </div>

                    <div className={styles.profilephotosection}>
                      <div className={styles.ptagdiv}>
                        <label>Password:</label>
                      </div>

                      <div className={styles.acinputdiv}>
                          <p className={styles.input}>##########</p>
                      </div>

                      <div className={styles.acbtndiv}>
                        <button className={styles.acbtn}>Change Password</button>
                      </div>
                    </div>
                </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem marginTop={"20px"} border={"1px solid silver"}>
            {({ isExpanded }) => (
              <>
                <h2>
                <AccordionButton>
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      flex="1"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      marginTop={"10px"}
                      marginBottom={"10px"}
                    >
                      Privacy
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </Box>
                  </AccordionButton>
                  <Divider width={"95%"} margin={"auto"}  />
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem marginTop={"20px"} border={"1px solid silver"}>
            {({ isExpanded }) => (
              <>
                <h2>
                <AccordionButton>
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      flex="1"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      marginTop={"10px"}
                      marginBottom={"10px"}
                    >
                      My Sizes
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </Box>
                  </AccordionButton>
                  <Divider width={"95%"} margin={"auto"}  />
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem marginTop={"20px"} border={"1px solid silver"}>
            {({ isExpanded }) => (
              <>
                <h2>
                <AccordionButton>
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      flex="1"
                      fontSize={"16px"}
                      fontWeight={"500"}
                      marginTop={"10px"}
                      marginBottom={"10px"}
                    >
                      Email & App Updates
                      {isExpanded ? (
                        <MinusIcon fontSize="16px" />
                      ) : (
                        <AddIcon fontSize="16px" />
                      )}
                    </Box>
                  </AccordionButton>
                  <Divider width={"95%"} margin={"auto"}  />
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>

      <div className={styles.bthbtndiv}>
      <Link to="/"><button className={styles.bthbtn}>BACK TO HOME</button></Link>
      </div>

      <p className={styles.unsubscribe} onClick={() => (onOpen(),setValue("unsub"))}>UNSUBSCRIBE FROM ALL EMAILS</p>

    {value === "unsub" ? <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size={"lg"}
      >
        <AlertDialogOverlay>
          <AlertDialogContent >
            <AlertDialogHeader fontSize='20px' color={"black"} fontWeight={"light"} backgroundColor={"gray.100"}>
                UNSUBSCRIBE FROM ALL EMAILS
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody fontSize='16px'>
            Are you sure to unsubscribe from all emails? You will not be able to receive products update after this. Instead, you can change setting to receive only emails you like to see.
            </AlertDialogBody>

            <Divider marginTop={"20px"}/>

            <AlertDialogFooter>
              <Button className={styles.cancelbtn} backgroundColor={"white"} borderRadius={"none"} border={"1px solid black"} height={"40px"} fontWeight={"450"} ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button backgroundColor={"black"} color={"white"} borderRadius={"none"} border={"1px solid black"} height={"40px"} fontWeight={"450"} onClick={onClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> : ""}
      

      <p className={styles.accountdelete} onClick={() => (onOpen(),setValue("Delete"))}>DELETE MY ACCOUNT</p>

    {value === "Delete" ? <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size={"lg"}
      >
        <AlertDialogOverlay>
          <AlertDialogContent >
            <AlertDialogHeader fontSize='20px' color={"black"} fontWeight={"light"} backgroundColor={"gray.100"}>
            DELETE MY ACCOUNT
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody fontSize='16px'>
            
            <p>We are sorry that you are not happy with your experience at ModeSens.</p>

            <p>Are you sure you want to delete your ModeSens account? Keep in mind this will remove all your account data and personalized settings which cannot be recovered. If you would still like your account deleted, click 'Delete My Account' below.</p>

            <p>Or would you prefer not to receive ModeSens newsletters? You can unsubscribe from email and keep your account active.</p>
            </AlertDialogBody>

            <Divider marginTop={"20px"}/>


            <AlertDialogFooter>
             
              <Button fontSize={"14px"} className={styles.cancelbtn} backgroundColor={"white"} borderRadius={"none"} border={"1px solid black"} height={"40px"} fontWeight={"450"} ref={cancelRef} onClick={onClose}>
                DELETE MY ACCOUNT
              </Button>
              <Button  fontSize={"14px"} backgroundColor={"black"} color={"white"} borderRadius={"none"} border={"1px solid black"} height={"40px"} fontWeight={"450"} onClick={onClose} ml={3}>
                UNSUBSCRIBE FROM NEWSLETTERS
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog> : ""}
      
    </div>
  );
};

export default Settings;
