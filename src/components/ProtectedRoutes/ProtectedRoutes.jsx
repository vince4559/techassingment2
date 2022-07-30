
import {Navigate, Outlet} from 'react-router-dom';


const ProtectedRoutes = () => {
 const loginDetails = localStorage.getItem('login')
  return  loginDetails? <Outlet /> : <Navigate to='/login' />
};

export default ProtectedRoutes;
