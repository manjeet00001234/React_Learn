import React, { useState } from "react";
import {
     Flex,
     Box,
     FormControl,
     FormLabel,
     Input,
     Checkbox,
     Stack,
     Button,
     Heading,
     Text,
     useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


let userData = {
     email: "",
     pass:""
}

let loginData = JSON.parse(localStorage.getItem("login")) || [];

const Login = () => {
     const [data, setData] = useState(userData);

     const userDataChange = (e) => {
          const { name, value } = e.target;
          setData((eve) => {
               return { ...eve, [name]: value };
          });
     };

     // const userDataSubmit = () => {
     //      setData(userData);
     //      console.log(data);
     // }

     const loginValue = () => {
          loginData.push(data);
          alert("Login your account");
          localStorage.setItem("login", JSON.stringify(loginData));
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
                              <Heading fontSize={"4xl"}>
                                   Login
                              </Heading>
                              {/* <Text fontSize={"lg"} color={"gray.600"}>
                                   to enjoy all of our cool{"red.300 "}
                                   <Text color={"blue.400"}>features</Text> ✌️
                              </Text> */}
                         </Stack>
                         <Box
                              rounded={"lg"}
                              bg={useColorModeValue("white", "gray.700")}
                              boxShadow={"lg"}
                              p={8}>
                              <Stack spacing={4}>
                                   <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                             type="email"
                                             name="email"
                                             value={data.email}
                                             onChange={userDataChange}
                                        />
                                   </FormControl>
                                   <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                             type="password"
                                             name="pass"
                                             value={data.pass}
                                             onChange={userDataChange}
                                        />
                                   </FormControl>
                                   <Stack spacing={10}>
                                        <Stack
                                             direction={{
                                                  base: "column",
                                                  sm: "row",
                                             }}
                                             align={"start"}
                                             justify={"space-between"}>
                                             <Checkbox>Remember me</Checkbox>
                                             <Text color={"blue.400"}>
                                                  Forgot password?
                                             </Text>
                                        </Stack>
                                        <Link to={"signup"}>
                                             <Button
                                                  // onClick={userDataSubmit}
                                                  onClick={loginValue}
                                                  bg={"blue.400"}
                                                  color={"white"}
                                                  width={"100%"}
                                                  _hover={{
                                                       bg: "blue.500",
                                                  }}>
                                                  Sign Up
                                             </Button>
                                        </Link>
                                   </Stack>
                              </Stack>
                         </Box>
                    </Stack>
               </Flex>
          </div>
     );
};

export default Login;
