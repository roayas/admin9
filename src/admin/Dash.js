import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './dash.css';
import {Link } from 'react-router-dom';

function Dashboard() {

  const [aution, setAution] = useState('');
 
  function getauction(){
    axios.get(`http://localhost/redux-project9/API/adminData.php`)
      // console.log(aa) 
      .then((res) => {
         console.log(res)
        const info = res.data;
        setAution(info);
        console.log(info);
      });
  }
    return(
        <>
  <header className='ad-header'>
  <div className='ad-img-logo'>
    <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/>
    Epic Antiques</div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className='ad-name'>admin@mail.com</div>
</header>

<section className='ad-sec'>
  <nav className='ad-nav'>
    <br/>
    <ul>
    <li className='activee' >
      <Link to="" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li>
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
    <h1>Information</h1>
    <br />
    <div className='boddy'>
<div class="cardd auc">
{/* {aution?.map((info) => */}
  <div class="contentt dd">Products
  </div>
   {/* <h3>{info.COUNT()}</h3> */}
 {/* )}  */}
</div>

<div class="cardd user ">
  <div class="contentt dd">Users</div>
</div>

<div class="cardd comment">
  <div class="contentt dd">Comments</div>
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


export default Dashboard;