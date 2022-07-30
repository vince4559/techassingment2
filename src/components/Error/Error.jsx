import { Link as Links } from "react-router-dom";
import { Box, Heading, Text, } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return(
    <Box  p={20}>
      <Heading textAlign={'center'} fontSize={{base:13, md:20}} mb={5}>
        Page Not Found
      </Heading>
      <Text fontSize={{base:13, md:20}}>
        Looks like you've followed a broken link or entered a URL that doestn't exist on this site
      </Text>
      <Text textDecoration={'underline'} 
          color={'blue.400'} p={4} 
          fontSize={{base:14, md:20}} >
         <Links to='/'>Back to our site</Links>
      </Text>
    </Box>
  )
};

export default Error;
