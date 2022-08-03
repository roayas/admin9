import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
// import './auction.css';
import {Link } from 'react-router-dom';



function Users() {
  const [user, setUser] = useState([]);

  const postId=sessionStorage.getItem('postId');

  useEffect(()=>{
    getauction();
}, [user]);

    function getauction(){
    axios.get(`http://localhost/redux-project9/API/adminuser.php`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setUser(info);
      });

  }


  const deleteuser=(postId)=>{
    axios.delete(`http://localhost/redux-project9/API/deleteuser.php?id=`+postId)
    .then(function(res){
      console.log(res.data);
      const info = res.data;
        getauction(info);
    })
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
      <li >
      <Link to="/auction" className="ad-aa">
          Products
          </Link>
       </li>
      <li className='activee'>
      <Link to="#" className="ad-aa">
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
    <h1>Users</h1>
    <br />
    <main className="content"  style={{width:'800px'}}>
  <div className="d-flex">
  <Link to="/AddUserAdmin" className="bttn btn-add" style={{left:'38%'}}><h2><span>Add</span></h2> </Link>
</div>

<table>
          <thead>
          <tr>
              <th>ID</th>
              <th>User Name</th>
              {/* <th>Last Name</th> */}
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
          {user?.map((info) =>
            <>
            <tr className='td-data' key={info}>
            
              <th>{info.user_id}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.username}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.email}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.phone}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.address}</th>

              <td>
              <button className="btn" style={{background:'#b88b68ec', width:'120px'}} onClick={(e)=>{e.preventDefault();sessionStorage.setItem('postId',info.user_id); window.location=`/EditUserAdmin/${info.user_id}/edit`}}>Edit</button>
              <button className="btn btn-delete" style={{background:'#b30909', width:'120px'}} onClick={()=>deleteuser(info.user_id)}>Delete</button>
               </td>
            </tr>
            </>
       )}
            
          </tbody>
        </table>
      </main>

  </article>
 </section>

  <footer className='ad-foo'>
  <p> All Rights Reserved, 2022 &copy;</p>
</footer>

















  
    
</>


        );
    }


export default Users;