import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link , useParams} from 'react-router-dom';
import './addAuc.css';

function EditUserAdmin() {
    
        const[isSubmit,setSubmit]=useState([]);
        const [username, setUsername] = useState();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [	address, setAddress] = useState('');
        const [phone, setPhone] = useState('');
        
        const postId=sessionStorage.getItem('postId');
        // const [input, setInputs] = useState([]);
    
    
        const usernameHandel = (e)=>{setUsername(e.target.value)}
        const emailHandel = (e)=>{setEmail(e.target.value)}
        const passwordHandel = (e)=>{setPassword(e.target.value)}
        const phoneHandel = (e)=>{setPhone(e.target.value)}
        const addressHandel = (e)=>{setAddress(e.target.value)}

        // const {postId}=useParams();
        useEffect(()=>{
            // getauction();
        }, [postId, 	username,email, password, phone, 	address ]);
        // }


        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post('http://localhost/redux-project9/API/editUserAdmin.php?id='+postId+'&username='+username+'&email='+email+'&phone='+phone+'&address='+address+'&password='+password)
            
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
            // console.log(inputs);
        }
            // console.log(postId,firstname , 	lastname, email);
   
    return(
        <>
     <header className='ad-header'>
  <div className='ad-img-logo'>
  <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/>    Epic Antiques</div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className='ad-name'>admin@mail.com</div>
</header>

<section className='ad-sec ad-sec-edit'>
  <nav className='ad-nav  ad-nav-edit'>
    <br/>
    <ul>
    <li  >
      <Link to="/dashboard" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li >
      <Link to="/auction" className="ad-aa">
          Products
          </Link>
       </li>
      <li className='activee'>
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
    <br />
    <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p>Edit successfully</p>
    </div>

    <div className="containerr">
  <div className="title">
      <h4> Edit Users Information </h4>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit} enctype="multipart/form-data">
      <span className="name">User Name <span className="required" >*</span></span>
      <input type="text" name="username" required onChange={usernameHandel}/>


      <span className="des">Email <span className="required" >*</span></span>
      <input type="email" name="email" required onChange={emailHandel}/>

      <span>Phone <span className="required">*</span></span>
      <input type="number" id="img" name="phone" className='img' required onChange={phoneHandel}/>

      <span>	Address <span className="required">*</span></span>
      <input type="text" name="address" required onChange={addressHandel}/> 

      <span>Password <span className="required">*</span></span>
      <input type="password" name="start"  required onChange={passwordHandel}/> 


    <button type="submit">Confirm edit </button>
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
    export default EditUserAdmin;