import { Box , Image, Grid, GridItem, Heading, List, ListIcon, ListItem, Text, UnorderedList, Button, Stack} from "@chakra-ui/react";
import {CheckIcon} from '@chakra-ui/icons'
// import Navigation from "../Navigation/Navigation";
import {Link as Links} from 'react-router-dom';
import techy from '../Home/techy.png';
// import Footer from "../Footer/Footer";


const Home = () => {
  return ( 
    <Box bgColor={'#08204f'}>
      {/* <Navigation /> */}
      <Box p={10}>
        <section>
        <Heading size={{base:'md', md:'lg'}} textTransform={'capitalize'} textColor={'white'} mb={5}>
        Techaton Community
        </Heading>
      <Text textColor={'white'} fontSize={{base:13, md:18}} fontFamily={'sans-serif'} >
        Techathon Community is a mentorship community that is on a mission to help folks who want to transition into tech with the right resources they need to make the journey smooth and fun.
      </Text>
        </section>
      </Box>
      <Box bgColor={'white'} p={4}>
        <section>
        <Grid templateColumns={'repeat(2, 1fr)'}>
          <GridItem p={5} colSpan={{base:2, md:1}} >
            <Text my={{base:3, md:4}} p={3} fontFamily={'cursive'} textDecoration={'underline'} fontSize={{base:25, md:30}} textAlign={{base:'left', md:'center'}}>
              Our Tracks:
            </Text>
              <Text fontSize={{base:15, md:20}} fontFamily={'sans-serif'} textColor={'blue'}>
                Coding Tracks
                <UnorderedList p={4} color={'black'} >
                  <ListItem>Html, CSS, Javascript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>Node js</ListItem>
                </UnorderedList>
              </Text>
              <Text fontSize={{base:15, md:20}} fontFamily={'sans-serif'} textColor={'blue'}>
                No Code Tracks
                <UnorderedList p={4} color={'black'}>
                  <ListItem>Technical writting</ListItem>
                  <ListItem>Product design (UI/UX)</ListItem>
                  <ListItem>Graphic design</ListItem>
                </UnorderedList>
              </Text>
              <Stack direction={'row'} gap={2} my={2}>
              <Button color={'red'}>
                <Links to={'/register'}>Register Now</Links>
                </Button>  
              <Button colorScheme={'linkedin'}>
                <Links to={'/login'} >Login</Links>
              </Button>
              </Stack>
          </GridItem>
          <GridItem colSpan={{base:2, md:1}}>
            <Box w={{base:200,sm:300, md:400}} mt={{base:5, md:20}} mx={{base:'auto'}} bg={'cyan'}>
              <Image src={techy} borderRadius={'base'} opacity={.8}  />
            </Box>
          </GridItem>
        </Grid>
        </section>
      </Box>
      <Box p={8} pb={10}>
        <section>
        Get Started
        <Heading mb={5} size={{base:'md', md:'lg'}}  textTransform={'capitalize'} textColor={'white'}>
          Kickstart your web developer carreer
        </Heading>
        <Text textColor={'white'} fontSize={{base:14, md:20}} mb={7} fontFamily={'serif'} >
          we offer a wide variety of programs and courses built on adaptive curriclum taught by leading experts in the industry. 
        </Text>
        <List fontSize={{base:12, md:20}} spacing={2} textColor={'white'} fontFamily={'sans-serif'}>
        <ListItem>
            <ListIcon as={CheckIcon}/>
            Kick start
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Mentorship
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Open source
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Carrier talk
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Campus ambassador program
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Easy bonding with other mentees
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon}/>
            Get access to VIP events and workshops
          </ListItem>
        </List>
        </section>
      </Box>
      {/* <Footer /> */}
    </Box>
   );
}
 
export default Home;