import React, {useState} from 'react';
import axios from 'axios';
import './addAuc.css';
import {Link } from 'react-router-dom';


function AddUserAdmin() {

    const[isSubmit,setSubmit]=useState([]);
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [phone, setPhone] = useState([]);
    const [password, setPassword] = useState([]);
    const [address, setAddress] = useState([]);


    const usernameHandel = (e)=>{setUsername(e.target.value)}
    const emailHandel = (e)=>{setEmail(e.target.value)}
    const phoneHandel = (e)=>{setPhone(e.target.value)}
    const passwordHandel = (e)=>{setPassword(e.target.value)}
    const addressHandel = (e)=>{setAddress(e.target.value)}

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost/redux-project9/API/adduser.php?username='+username+'&email='+email+'&phone='+phone+'&password='+password+'&address='+address)
        .then((data) => {
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
    }   
    return(
        <>
          <header className='ad-header'>
  <div className='ad-img-logo'>
  <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/>    Epic Antiques</div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className='ad-name'>admin@mail.com</div>
</header>

<section className='ad-sec'>
  <nav className='ad-nav'>
    <br/>
    <ul>
    <li  >
      <Link to="/dashboard" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li className='activee'>
      <Link to="/auction" className="ad-aa">
          Products
          </Link>
       </li>
      <li>
      <Link to="/userA" className="ad-aa">
            Users
          </Link>
        </li>
      <li>
      <Link to="/commentAdmin" className="ad-aa">
            Comments
          </Link>
        </li>
      <li>
      <Link to="/loginA" className="ad-aa">
            Logout
          </Link>
        </li>
    </ul>
  </nav>

  <article className='ad-artic'>
    {/* <h1>Add Products</h1> */}
    <br />
    <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p>Added successfully</p>
    </div>

    <div className="containerr">
  <div className="title">
      <h4> Added Users </h4>
  </div>

<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">User  Name <span className="required" >*</span></span>
      <input type="text" name="username" required onChange={usernameHandel}/>


      <span className="des">Email <span className="required" >*</span></span>
      <input type="email" name="email" required onChange={emailHandel}/>

      <span>Phone <span className="required">*</span></span>
      <input type="number" id="img" name="phone" required onChange={phoneHandel}/>

      <span>Password <span className="required">*</span></span>
      <input type="password" name="password" required onChange={passwordHandel}/> 

      <span>Address <span className="required">*</span></span>
      <input type="text" name="address"  required onChange={addressHandel}/> 

    <button type="submit">Confirm add </button>
  </form>
  </div>
 </div> 
  </article>
</section>

<footer className='ad-foo'>
  <p> All Rights Reserved, 2022 &copy;</p>
</footer>

        </>
        
    );
    
}
export default AddUserAdmin;