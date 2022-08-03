import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
// import './auction.css';
import './dash.css';
import './auction.css';
import {Link } from 'react-router-dom';



function Auction(props) {
  const [aution, setAution] = useState([]);

  const postId=sessionStorage.getItem('postId');


  useEffect(()=>{
    getauction();
}, [aution]);

    function getauction(){
    axios.get(`http://localhost/redux-project9/API/adminauction.php`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setAution(info);
      });
  }

  const deleteAuction=(postId)=>{
    // axios.delete(`http://localhost/redux-project9/API/deleteauction.php${postId}/delete`)
    axios.delete(`http://localhost/redux-project9/API/deleteauction.php?id=`+postId)
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
      <li className='activee'>
      <Link to="#" className="ad-aa">
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
    <h1>Products</h1>
    <br />
    <main className="content">
  <div className="d-flex">
<Link to="/AddAuctionAdmin" className="bttn btn-add"><h2><span>Add</span></h2> </Link>
</div>

<table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>image</th>
              <th>Description</th>
              <th>Minimam Price</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Is Accept</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {aution?.map((info) =>
            <>
            <tr className='td-data' key={info}>
            
              <th>{info.id}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.name}</th>
              <th style={{borderLeft:'2px lightgray solid'}}><img src={info.img} style={{width:'100px', height:'100px'}}/></th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.description}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.min_price}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.start_date}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.end_date}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.is_acc}</th>
              <td>
              <button className="bttn" style={{background:'#b88b68ec'}} onClick={(e)=>{e.preventDefault();sessionStorage.setItem('postId',info.id); window.location=`/EditAuctionAdmin/${info.id}/edit`}}>Edit</button>
               <button className="bttn btn-delete" style={{background:'#b30909'}} onClick={()=>deleteAuction(info.id)} >Delete</button> 
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


export default Auction;