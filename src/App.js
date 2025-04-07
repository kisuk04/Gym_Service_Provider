import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Api from './pages/api';
import Detail from './pages/detail';
import Gym1 from "./pages/gym1";
import Gym2 from "./pages/gym2";
import Gym3 from "./pages/gym3";
import User from './pages/user';
import HomeRegis from './pages/HomeRegis';
import ClassInfo from './pages/class_info';
import Profile from './pages/profileAffiliator';
import Login from './pages/Login';
import RequestAPI from './pages/requestapi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeRegis />} />
        <Route path="/register" element={<Register />} />
        <Route path="/api-list" element={<Api />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/gym1" element={<Gym1 />} />
        <Route path="/gym2" element={<Gym2 />} />
        <Route path="/gym3" element={<Gym3 />} />
        <Route path="/user" element={<User />} />
        <Route path="/class_info" element={<ClassInfo />} />
        <Route path="/Affiliator" element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/request' element={<RequestAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
