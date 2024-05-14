import React from 'react';
import {
     Flex,
     Box,
     FormControl,
     FormLabel,
     Input,
     InputGroup,
     HStack,
     InputRightElement,
     Stack,
     Button,
     Heading,
     Text,
     useColorModeValue,
     Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

let signupData = {
    fname: "",
    lname: "",
    email: "",
    pass:""
}

let signData = JSON.parse(localStorage.getItem("signup")) || [];

const Signup = () => {
     const [showPassword, setShowPassword] = useState(false);
    const [detals, setDetals] = useState(signupData);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setDetals((eve) => {
            return { ...eve, [name]: value };
        });
    };

//     const handelSubmit = () => {
//         setDetals(signupData);
//         console.log(detals);
//     }


     const signupValue = () => {
          signData.push(detals);
          alert("your Signup data Successfully");
          localStorage.setItem("signup", JSON.stringify(signData));
          setDetals(signupData);
     }

  return (
       <div>
            <Flex
                 minH={"100vh"}
                 align={"center"}
                 justify={"center"}
                 bg={useColorModeValue("gray.50", "gray.800")}>
                 <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                      <Stack align={"center"}>
                           <Heading fontSize={"4xl"} textAlign={"center"}>
                                Sign up
                           </Heading>
                           {/* <Text fontSize={"lg"} color={"gray.600"}>
                                to enjoy all of our cool features ✌️
                           </Text> */}
                      </Stack>
                      <Box
                           rounded={"lg"}
                           bg={useColorModeValue("white", "gray.700")}
                           boxShadow={"lg"}
                           p={8}>
                           <Stack spacing={4}>
                                <HStack>
                                     <Box>
                                          <FormControl
                                               id="firstName"
                                               isRequired>
                                               <FormLabel>First Name</FormLabel>
                                               <Input
                                                    type="text"
                                                    name="fname"
                                                    value={detals.fname}
                                                    onChange={handelChange}
                                               />
                                          </FormControl>
                                     </Box>
                                     <Box>
                                          <FormControl id="lastName">
                                               <FormLabel>Last Name</FormLabel>
                                               <Input
                                                    type="text"
                                                    name="lname"
                                                    value={detals.lname}
                                                    onChange={handelChange}
                                               />
                                          </FormControl>
                                     </Box>
                                </HStack>
                                <FormControl id="email" isRequired>
                                     <FormLabel>Email address</FormLabel>
                                     <Input
                                          type="email"
                                          name="email"
                                          value={detals.email}
                                          onChange={handelChange}
                                     />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                     <FormLabel>Password</FormLabel>
                                     <InputGroup>
                                          <Input
                                               type={
                                                    showPassword
                                                         ? "text"
                                                         : "password"
                                               }
                                               name="pass"
                                               value={detals.pass}
                                               onChange={handelChange}
                                          />
                                          <InputRightElement h={"full"}>
                                               <Button
                                                    variant={"ghost"}
                                                    onClick={() =>
                                                         setShowPassword(
                                                              (showPassword) =>
                                                                   !showPassword
                                                         )
                                                    }>
                                                    {showPassword ? (
                                                         <ViewIcon />
                                                    ) : (
                                                         <ViewOffIcon />
                                                    )}
                                               </Button>
                                          </InputRightElement>
                                     </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                     <Button
                                          onClick={signupValue}
                                          loadingText="Submitting"
                                          size="lg"
                                          bg={"blue.400"}
                                          color={"white"}
                                          _hover={{
                                               bg: "blue.500",
                                          }}>
                                          Sign up
                                     </Button>
                                </Stack>
                                <Stack pt={6}>
                                     <Link to={"/"}>
                                          <Text align={"center"}>
                                               Already a user?{" "}
                                               <RouterLink
                                                    to={"/"}
                                                    color={"red.1200"}>
                                                    Login
                                               </RouterLink>
                                          </Text>
                                     </Link>
                                </Stack>
                           </Stack>
                      </Box>
                 </Stack>
            </Flex>
       </div>
  );
}

export default Signup