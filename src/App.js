// import './App.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Userinfo from './users/UserInfo';
import UpdateInfo from './users/updateUser';
import About from './static/about';
import Contact from './static/contact';

// Admin
import Adminlogin from './admin/AdminLogin';
import Dashboard from './admin/Dash';
// Auction
import Auction from './admin/Auction';
import AddAuctionAdmin from './admin/AddAuctionAdmin';
import EditAuctionAdmin from './admin/EditAuctionAdmin';
// User
import UserAdmin from './admin/user';
import AddUserAdmin from './admin/AddUserAdmin';
import EditUserAdmin from './admin/EditUserAdmin';
//comment
import Comment from './admin/Comment';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/user' element={<Userinfo />} />
      <Route path='/updateInfo' element={<UpdateInfo />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      {/* Admin */}
      <Route path="/loginA" element={<Adminlogin />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/auction" element={<Auction />} /> 
      <Route path="/AddAuctionAdmin" element={<AddAuctionAdmin />} /> 
      <Route path="/EditAuctionAdmin/:id/edit" element={<EditAuctionAdmin />} /> 
      <Route path="/userA" element={<UserAdmin />} /> 
      <Route path="/AddUserAdmin" element={<AddUserAdmin />} /> 
      <Route path="/EditUserAdmin/:id/edit" element={<EditUserAdmin />} /> 
      <Route path="/commentAdmin" element={<Comment />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
