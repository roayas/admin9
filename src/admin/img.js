import React, { useState, useRef } from 'react';
import '../../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Uploader.css'
// import './ff.js/index.js'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



function Uploader() {
    let owner_id = sessionStorage.getItem("user_info");

    const [data, setdata] = useState('');
    const [response, setresponse] = useState('')

    const [name, setname] = useState('');

    const [desc, setdesc] = useState('');

    const [price, setprice] = useState('');

    const retriver = async () => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/project-9/porject9/php/upload.php', true);
        xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
        xhr.onload = function () {

            setdata(JSON.parse(this.responseText));

        };
        xhr.send(`fetch`);
    };

    const selectedFile = useRef();

    const uploader = async () => {
        if (owner_id){
        if (price === '') {
            setresponse('Please select a starting price ')
        }
        if (desc === '') {
            setresponse('Description cannot be empty');
        }
        if (name === '') {
            setresponse('name input cannot be empty');
        }
        if (selectedFile.current.files.length === 0) {
            setresponse(' please choose an image');
        } else {
            const formData = new FormData();
            formData.append('picture', selectedFile.current.files[0]);
            formData.append('name', name);
            formData.append('desc', desc);
            formData.append('price', price);
            formData.append('owner_id', owner_id);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost/project-9/porject9/php/upload.php', true);

            xhr.onload = function () {
                if (this.responseText === 'success') {
                    retriver();
                }
                console.log(this.responseText);;
            }

            xhr.send(formData);
        }




        if (selectedFile.current.files.length === 0 && name === '') {
            setresponse('Please fill in all fields');
        }
        }
        else{
            window.location.href='/login'
        }
        // console.log(name);
        // console.log(selectedFile.current.files);
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                </div>

                <div className="row">
                    {/* Page Header Start */}
                    <div className="container-fluid bg-secondary py-5">
                        <div className="container py-5">
                            <div className="row align-items-center py-4">
                                <div className="col-md-6 text-center text-md-left">
                                    <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Add Product</h1>
                                </div>

                                <div className="col-md-6 text-center text-md-right">
                                    <div className="d-inline-flex align-items-center">
                                        <a className="btn btn-outline-primary" href>Home</a>
                                        <i className="fas fa-angle-double-right text-primary mx-2" />
                                        <a className="btn btn-outline-primary disabled" href>Add Product</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header end */}
                <div className='row'>
                    <section className="vh-100 w-100" style={{ backgroundColor: "#F3F6FF" }}>
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100" >
                                <div className="col-lg-12 col-xl-11" style={{ backgroundColor: "#dfb163" }} >
                                    <div className="card text-black" style={{ borderRadius: 25 }}>
                                        <div className="card-body p-md-5">
                                            <div className="row justify-content-center">
                                                <div className="col-md-9 col-lg-6 col-xl-7 d-flex align-items-center justify-content-end order-0 order-lg-2 float-left">
                                                    <img
                                                        src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                        className="img h-75 w-75 mr-2"
                                                        alt="Sample image"
                                                    />
                                                </div>
                                                <div className="col-md-3 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: '#252531' }}>
                                                        Add Product
                                                    </p>
                                                    <p className='fs-3  text-danger'>{response}</p>
                                                    <form className="mx-1 mx-md-4">
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <input type='hidden' value={owner_id}/>
                                                            {/* <i className="fas fa-user fa-lg me-3 fa-fw" style={{ color: '#252531' }} /> */}
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="form3Example1c" style={{ color: '#252531' }}>
                                                                Name of your product
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="name"
                                                                    className="form-control"
                                                                    onChange={(e) => setname(e.target.value)} 
                                                                    required
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{ color: '#252531' }} /> */}
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="form3Example3c" style={{ color: '#252531' }}>
                                                                Description
                                                                </label>
                                                                <textarea name="" id="des" cols="10" className='form-control' rows="1" onChange={(e) => setdesc(e.target.value)}></textarea>

                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            {/* <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ color: '#252531' }} /> */}
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="form3Example4c" style={{ color: '#252531' }}>
                                                                price of product
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    id="form3Example4c"
                                                                    className="form-control"
                                                                    name="Cost"
                                                                    onChange={(e) => setprice(e.target.value)}
                                                                    required
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            {/* <i className="fas fa-key fa-lg me-3 fa-fw" style={{ color: '#252531' }} /> */}
                                                            <div className="form-outline flex-fill mb-0">
                                                                <label className="form-label" htmlFor="form3Example4cd" style={{ color: '#252531' }}>
                                                                image of product
                                                                </label>
                                                                <input type="file" name="" id="img" className='form-control' ref={selectedFile} />
                                                                {/* <span>{error.confirmPassError}</span> */}
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                            
                                {/* <input type="submit" defaultValue="Sign up" disabled value={'Register'} style={{ color: '#252531', borderColor: "#252531",backgroundColor:"#dfb163", borderRadius: "5px" }} className="w-100 h-100"/> */}
                                <input type="submit" defaultValue="Sign up" style={{ color: '#252531', borderColor: "#252531",backgroundColor:"#dfb163", borderRadius: "5px" }} className="w-100 h-100" value={'Upload'} onClick={uploader}/>
                            
                            </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                


                {/* <div className='row'>
                    <div className="container">
                        <div className="row col-6">
                            <p className='fs-3  text-danger'>{response}</p>
                            <form action="" id='Form'>
                                <label htmlFor="name">Name of your product</label>
                                <input type="text" name="" id="name" className='form-control' onChange={(e) => setname(e.target.value)} />
                                <label htmlFor="des" >Description</label>
                                <textarea name="" id="des" cols="30" className='form-control' rows="10" onChange={(e) => setdesc(e.target.value)}></textarea>
                                <label htmlFor="Cost">price of product</label>
                                <input type="number" name="Cost" id="" className='form-control' onChange={(e) => setprice(e.target.value)} />
                                <label htmlFor="img">image of product</label>
                                <input type="file" name="" id="img" className='form-control' ref={selectedFile} />
                                <button onClick={uploader} type='button' className="btn btn-primary form-control">Upload</button>
                            </form>
                        </div>
                    </div>
                </div> */}
                {/* <div>
    {data.map((item)=>{
        return(
            <div className="card">
                <img src=
                {'../.images/${item.img}'} alt="" />
                <p>{item.name}</p>
            </div>
        );
    })}; 
    </div> */}
                <div className='row'>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Uploader