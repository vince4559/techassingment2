
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error/Error';
import SharedLayout from './components/SharedLayout/SharedLayout';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';


function App() {
  return (
    <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />}/>
            <Route path='register' element={<Register />}/>
            <Route path='login' element={<Login />}/>
            <Route element={<ProtectedRoutes />}>
              <Route path='dashboard' element={<Dashboard />}/>
            </Route>
            <Route path='*' element={<Error />}/>
          </Route>
          
    </Routes>
  );
}

export default App;
