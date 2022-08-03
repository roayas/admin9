import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './auction.css';
import {Link } from 'react-router-dom';



function Comment(props) {
  const [comment, setComment] = useState([]);


  useEffect(()=>{
    getComment();
}, [comment]);

function getComment(){
  axios.get(`http://localhost/redux-project9/API/admincomment.php`)
    // console.log(aa)
    .then((res) => {
      //  console.log(res)
      const info = res.data;
      setComment(info);
    });

}

  
  const deleteComment=(postId)=>{
    axios.delete(`http://localhost/redux-project9/API/deleteComment.php?id=`+postId)
    .then(function(res){
      console.log(res.data);
      const info = res.data;
      getComment(info);
    })
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
    <li  >
      <Link to="/dashboard" className="ad-aa ">
          Dashboard
          </Link>
       </li>
       <li>
      <Link to="#" className="ad-aa">
          Products
          </Link>
       </li>
      <li>
      <Link to="/userA" className="ad-aa">
            Users
          </Link>
        </li>
      <li className='activee'>
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
      <main className="content">
        <div className="d-flex">
        <h1>Comments</h1>
        {/* <button className="bttn btn-add">Add </button>; */}
        </div>
        <table>
          <thead>
            <tr>
              <th >ID</th>
              <th >Comment</th>
              <th >User</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            
            {comment?.map((info) =>
            <>
            <tr className='td-data' key={info}>
              <th >{info.id}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.text}</th>
              <th style={{borderLeft:'2px lightgray solid'}}>{info.user_id}</th>

              <td>
                <button className="btn btn-delete" style={{background:'#b30909', width:'120px'}} onClick={()=>deleteComment(info.id)}>Delete</button>
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


export default Comment;