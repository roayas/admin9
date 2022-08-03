import React, {useState} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import './addAuc.css';

function AddAuctionAdmin() {
  // const [data, setdata] = useState('');
  // const [response, setresponse] = useState('')
    const[isSubmit,setSubmit]=useState([]);
    const [name, setName] = useState([]);
    const [des, setDes] = useState([]);
    const [img, setImg] = useState([]);
    const [price, setPrice] = useState([]);
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);


    const nameHandel = (e)=>{setName(e.target.value)}
    const desHandel = (e)=>{setDes(e.target.value)}
    const imgHandel = (e)=>{setImg(e.target.value)}
    const priceHandel = (e)=>{setPrice(e.target.value)}
    const startHandel = (e)=>{setStart(e.target.value)}
    const endHandel = (e)=>{setEnd(e.target.value)}
    // const [state, setState] = useState([]);


//     const retriver = async () => {
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', 'http://localhost/project-9/porject9/php/upload.php', true);
//       xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
//       xhr.onload = function () {

//           setdata(JSON.parse(this.responseText));

//       };
//       xhr.send(`fetch`);
//   };

//   const selectedFile = useRef();

//   const uploader = async () => {
//     // if (owner_id){
//     if (selectedFile.current.files.length === 0) {
//         setresponse(' please choose an image');
//     } else {
//         const formData = new FormData();
//         formData.append('picture', selectedFile.current.files[0]);
//         // formData.append('owner_id', owner_id);

//         var xhr = new XMLHttpRequest();
//         xhr.open('POST','http://localhost/redux-project9/API/img.php', true);
        

//         xhr.onload = function () {
//             if (this.responseText === 'success') {
//                 retriver();
//             }
//             console.log(this.responseText);;
//         }

//         xhr.send(formData);
//     } if (selectedFile.current.files.length === 0 && name === '') {
//       setresponse('Please fill in all fields');
//   }

// }




    // const [inputs, setInputs] = useState({})
    // const handleChange =(e)=> {
    // const name  = e.target.name;
    // const value = e.target.value;

    // setInputs(values=>({...values,[name]: value}));
    // }
    const handleSubmit =(e)=>{
        e.preventDefault();
        // axios.post('http://localhost/redux-project9/API/adduser.php', inputs)
        axios.post('http://localhost/redux-project9/API/addauction.php?name='+name+'&des='+des+'&img='+img+'&price='+price+'&start='+start+'&end='+end)
        .then((data) => {
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
        // console.log(inputs);
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
    <li>
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
      <h4> Added Auctions </h4>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">Auction Name <span className="required" >*</span></span>
      <input type="text" name="name" required onChange={nameHandel}/>

      <span className="des">Description <span className="required" >*</span></span>
      <input type="text" name="des" required onChange={desHandel}/>

      <span>Select image: <span className="required">*</span></span>
      <input type="file" id="img" name="img" accept="image/*" className='img' required onChange={imgHandel}/>
      {/* <input type="file" name="" id="img" className='form-control' ref={selectedFile} /> */}


      <span>Price <span className="required">*</span></span>
      <input type="number" name="price" required onChange={priceHandel}/> 

      <span>Date start <span className="required">*</span></span>
      <input type="date" name="start"  required onChange={startHandel}/> 

      <span>End Date  <span className="required">*</span></span>
      <input type="date" name="end"  required onChange={endHandel}/> 

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
export default AddAuctionAdmin;