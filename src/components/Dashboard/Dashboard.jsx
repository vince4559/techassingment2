import { Box, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import  {CheckIcon} from '@chakra-ui/icons';
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";


const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const registerData = localStorage.getItem('user');
    const userInfo = JSON.parse(registerData);
    setUserData(userInfo);
  },[])

  return (
    <Box >
      <Box p={{base:1, md:5}} >
        <Text fontSize={{base:15, md:20}} textColor={'blue.600'} p={2} fontWeight={'semibold'}>Your Registration Details:</Text>
      <VStack my={5} p={20} border={'green solid 2px'}>
      <Heading textAlign={'center'} textColor={'blue.400'} size={{base:'md', md:'lg'}}>
        Welcome To Techaton
        </Heading>
        <Text mb={5} textColor={'green'} fontSize={{base:'20'}} fontFamily={'monospace'}>Please Confirm Your Details</Text>
          <List spacing={4} >
          {Object.entries(userData).map(data => (
                <ListItem key={data.name}>
                <ListIcon color={'green.200'} as={CheckIcon}/>
                  <strong>{data[0]}:</strong>  {data[1]}
                </ListItem>
            ))}
          </List>
      </VStack>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Dashboard;
