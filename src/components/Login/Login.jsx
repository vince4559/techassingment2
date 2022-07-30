import { Box , Heading, FormControl, FormLabel, Input, Button, InputRightElement,  InputGroup,} from "@chakra-ui/react";
// import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const Login = () => {
  
  const [show, setShow] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    const registerData = localStorage.getItem('user');
    const userInfo = JSON.parse(registerData)
    setUserData(userInfo);
  },[])
 
  const handleClick =()=>{
    setShow(!show)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData?.username === username && userData?.password === password){
      localStorage.setItem('login', [username, password])
      navigate('/dashboard')
    } else{
      alert('check username and password');
    }
    
  }

  
  return ( 
    <Box bgColor={'blue.70'} >
      <Box p={5} mb={{base:0, md:40}}>
      <Heading size={{base:'10', md:'md'}} textAlign={'center'} mb={10}>
        Login with Your Username and Password
      </Heading>
      <Box  ml={{base:'10', md:'20'}}>
        <form onSubmit={handleSubmit}>
        <FormControl mb={{base:3, md:7}} w={{base:'full', md:'50%'}} isRequired >
          <FormLabel htmlFor="username" >Username:</FormLabel>
          <Input type={'text'} 
              name={'username'} 
              value={username}
              placeholder={'Username'}
              onChange={(e)=>setUserName(e.target.value)}
              required autoComplete='off' />
        </FormControl>
        <FormControl mb={{base:3, md:7}} w={{base:'full', md:'50%'}} isRequired >
          <FormLabel htmlFor="password" >Password:</FormLabel>
          <InputGroup>
            <Input type={show? 'text' : 'password'} name={'password'} 
            placeholder={'Password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required />
            <InputRightElement w={'10'} pr={2}>
                <Button colorScheme={'none'}
                onClick={handleClick}>
                  {show ? <ViewIcon color={'black'}/> : <ViewOffIcon color={'black'}/>}
                </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" 
          colorScheme={'linkedin'} >
          Submit
        </Button>
        </form>
      </Box>
    </Box>
    {/* <Footer /> */}
    </Box>
     );
}
 
export default Login;