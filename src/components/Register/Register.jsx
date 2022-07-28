import { Box , Text, Checkbox, FormControl, FormLabel, Heading, Input, Select, Button,  FormHelperText, InputGroup, InputRightElement,} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const initials ={
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    username: '',
    password: '',
    checked: 'false',
  }
  const [formData, setFormData] = useState(initials);
  const [submitting, setSubmitting] =useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    setShow(!show)
  }


  const handleSubmit = (event)=>{
    event.preventDefault();
    setSubmitting(true);
    const user = JSON.stringify(formData);
    localStorage.setItem('user', user);
    navigate('/login');


    setTimeout(()=>{
      setSubmitting(false);
      setFormData(initials);
    },3000)
  }

  const handleEvent = (event) => {
    const {name, value, type, checked} = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    }


  return ( 
    <div>
      <Box p={10} bgColor={'#08204f'} >
      <Heading textAlign={'center'} textColor={'white'} textTransform={'capitalize'} size={{base:10, md:'md', lg:'lg'}}  mb={10}>Fill in your correct details to register</Heading>
      {submitting}
      
      <Box p={5} pb={10} bg={'white'}  >
      <form  onSubmit={handleSubmit} >
        <FormControl  mb={4} w={{base:'full', md:'50%'}} isDisabled={submitting}>
          <FormLabel htmlFor="fName" >First Name:</FormLabel>
          <Input type={'text'} name={'firstname'}
           value={formData.firstname} 
           onChange={handleEvent}
           placeholder={'first name'}
           required autoComplete='off' />
        </FormControl>
        <FormControl  mb={4} w={{base:'full', md:'50%'}} isDisabled={submitting}>
          <FormLabel htmlFor="lName" >Last Name:</FormLabel>
          <Input type={'text'} name={'lastname'}
          value={formData.lastname}
          onChange={handleEvent}
          placeholder={'last name'}
           required autoComplete='off' />
        </FormControl>
        <FormControl isRequired mb={4} w={{base:'full', md:'50%'}} 
          isDisabled={submitting}>
          <FormLabel htmlFor="Age" >Age:</FormLabel>
          <Input type={'number'} min={17} name={'age'}
          value={formData.age}
          onChange={handleEvent}
          placeholder={'above 17years only'}
          />
           <FormHelperText mb={4} fontSize={{base:'11', md:15}}>
             17years and above can apply
            </FormHelperText>
        </FormControl>
        <FormControl isRequired mb={4} w={{base:'full', md:'50%'}} 
          isDisabled={submitting} >
          <FormLabel htmlFor="gender" >Gender:</FormLabel>
          <Select m={3} placeholder="Select your gender" 
            value={formData.gender}
            onChange={handleEvent}
            name="gender" >
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            <option value={'cisgender'}>cisgender</option>
          </Select>
        </FormControl>

        <FormControl isRequired mb={4} w={{base:'full', md:'50%'}}
         isDisabled={submitting}>
          <FormLabel htmlFor="username" >Username:</FormLabel>
          <Input type={'text'} name={'username'} 
          value={formData.username}
          onChange={handleEvent}
          placeholder={'choose username'}
          autoComplete='off' />
        </FormControl>
        <FormControl isRequired mb={4} w={{base:'full', md:'50%'}}
         isDisabled={submitting}>
          <FormLabel htmlFor="password" >Password:</FormLabel>
            <InputGroup>
              <Input type={show ? 'text' : 'password'} name="password"
                value={formData.password}
                onChange={handleEvent}
                placeholder={'choose password'}
                required autoComplete='off' />
                <InputRightElement>
                    <Button colorScheme={'none'} w={10} pr={2} onClick={handleClick}>
                        {show ? <ViewIcon color={'black'}/> : <ViewOffIcon color={'black'} /> }
                    </Button>
                </InputRightElement>
            </InputGroup>
           <FormHelperText mb={4} fontSize={{base:'11', md:'14'}}>
            Please choose a secure password</FormHelperText>
        </FormControl>
        
        <Checkbox mb={5} type={'checkbox'} name={'checked'} 
          onChange={handleEvent}
          isDisabled={submitting}
          value={formData.checked}>
            <Text fontSize={{base:'11', md:18}} > 
            Agree to terms and condition to proceed</Text>
          </Checkbox><br/>
        <Button type="submit" w={{base:'full', md:'50%'}} p={5}  
          isDisabled={formData.checked !==true || submitting }
          colorScheme={'facebook'}  >
          Submit
          </Button>
       </form>
       </Box>
    </Box>
    {/* <Footer /> */}
    </div>
   );
}
 
export default Register;