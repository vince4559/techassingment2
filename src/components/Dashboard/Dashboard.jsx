import { Box, Button, Flex, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import  {CheckIcon} from '@chakra-ui/icons';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const registerData = localStorage.getItem('user');
    const userInfo = JSON.parse(registerData);
    setUserData(userInfo);
  },[])

  const handleClick =() => {
    localStorage.removeItem('login');
    navigate('/login')

  }

  return (
    <Box >
      <Box p={{base:1, md:5}} >
        <Flex justify={'space-between'}>
          <Text fontSize={{base:15, md:20}} textColor={'blue.600'} p={2} fontWeight={'semibold'}>Your Registration Details:</Text>
          <Button size={{base:'sm', md:'md'}} 
            onClick={handleClick}
            colorScheme={'red'}>
              Log Out
            </Button>
        </Flex>
      <VStack my={5} p={20} border={'green solid 2px'}>
      <Heading textAlign={'center'} textColor={'blue.400'} size={{base:'md', md:'lg'}}>
        Welcome To Techaton
        </Heading>
        <Text mb={5} textColor={'green'} fontSize={{base:'20'}} fontFamily={'monospace'}>Please Confirm Your Details</Text>
          <List spacing={4} >
          {Object.entries(userData).map(data => (
                <ListItem key={data[1]}>
                <ListIcon color={'green.200'} as={CheckIcon}/>
                  <strong>{data[0]}:</strong>  {data[1]}
                </ListItem>
            ))}
          </List>
      </VStack>
      
      </Box>
    </Box>
  );
};

export default Dashboard;
