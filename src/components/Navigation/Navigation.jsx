import { Box, Link, Image } from "@chakra-ui/react";
import {NavLink} from 'react-router-dom';
import logo from '../Navigation/logo.png';

const Navigation = () => {
  return ( 
    <Box>
      <nav className="navbar navbar-expand-md bg-light p-3 ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">
      <Image 
      ml={{base:'7px', md:'12px'}}
      mb={1}
      w={150}
      src={logo}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav  ">
      <li className="nav-item">
         <strong>
         <NavLink className="nav-link me-5"
         style={({isActive}) => isActive? {color: 'green'}: {color: 'blue'}}
          to={'/'}>
          Home
          </NavLink>
         </strong>
        </li>

        <li className="nav-item">
         <strong>
         <NavLink className="nav-link me-5" 
         style={({isActive}) => isActive? {color: 'green'}: {color: 'blue'}}
         to={'/register'}>
          Register
          </NavLink>
         </strong>
        </li>
        <li className="nav-item">
          <strong>
            <NavLink className="nav-link me-5 "  
            style={({isActive}) => isActive? {color: 'green'}: {color: 'blue'}}
            to={'/login'} >
              Login
              </NavLink></strong>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Box>
   );
}
 
export default Navigation;