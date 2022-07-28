import { Box,  Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import {Link as Links} from 'react-router-dom';
import facebook from '../Footer/facebook.svg';
import instagram from '../Footer/instagram.svg';
import twitter from '../Footer/twitter.svg';
import logo from '../Footer/logo.png';




const Footer = () => {
  return ( 
    <Box bgColor={'black'} pb={5}>
      <Grid templateColumns={'repeat(2, 1fr)'}>
        <GridItem colSpan={{base:2, md:1, xl:1}} mx={'auto'}>
          <Box>
            <Image src={logo} w={{base:'160px', md:60}} p={3} mx={{base:'auto', md:'10'}} borderRadius={'full'} />
          </Box>
         <Stack direction={'row'} gap={5} p={4} mx={{base:'auto', md:'16'}}>
         <Image src={facebook} w={5} />
         <Image src={twitter} w={5} />
         <Image src={instagram} w={5} />
         </Stack>
        </GridItem>
        <GridItem mx={'auto'} colSpan={{base:2, md:1, xl:1}}  >
          <Stack gap={1} p={5} mx={{base:'auto', md:'16'}}  >
          <Text color={'white'}  >
            <Links to={'/register'}>Register</Links>
            </Text>
          <Text color={'white'}   >
            <Links to={'/'}>Home</Links>
            </Text>
          <Text color={'white'} >
            <Links to={'/login'} >Login</Links>
            </Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
   );
}
 
export default Footer;