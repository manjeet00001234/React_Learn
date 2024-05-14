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
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


let initialValue = {
    fName: "",
    lName: "",
    email: "",
    pass:""
}

function LoginForm() {
     const [showPassword, setShowPassword] = useState(false);
    const [detels, setDetels] = useState(initialValue);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setDetels((eve) => {
            return { ...eve, [name]: value };
        });
    };

    const handelSubmit = () => {
        setDetels(initialValue);
        console.log(detels);
    };


     return (
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
                         <Text fontSize={"lg"} color={"gray.600"}>
                              to enjoy all of our cool features ✌️
                         </Text>
                    </Stack>
                    <Box
                         rounded={"lg"}
                         bg={useColorModeValue("white", "gray.700")}
                         boxShadow={"lg"}
                         p={8}>
                         <Stack spacing={4}>
                              <HStack>
                                   <Box>
                                        <FormControl id="firstName" isRequired>
                                             <FormLabel>First Name</FormLabel>
                                             <Input
                                                  type="text"
                                                  name="fName"
                                                  value={detels.fName}
                                                  onChange={handelChange}
                                             />
                                        </FormControl>
                                   </Box>
                                   <Box>
                                        <FormControl id="lastName">
                                             <FormLabel>Last Name</FormLabel>
                                             <Input
                                                  type="text"
                                                  name="lName"
                                                  value={detels.lName}
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
                                        value={detels.email}
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
                                             value={detels.pass}
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
                                        onClick={handelSubmit}
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
                                   <Text align={"center"}>
                                        Already a user?{" "}
                                        <Link color={"blue.400"}>Login</Link>
                                   </Text>
                              </Stack>
                         </Stack>
                    </Box>
               </Stack>
          </Flex>
     );
}

export default LoginForm