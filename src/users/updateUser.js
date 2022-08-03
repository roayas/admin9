import React, { useState } from 'react';
import axios from "axios";
import "./updateInfo.css";
// localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=aa&lastName=bb&email=aa@mail.com&password=asdfg&phone=0771020304
function UpdateInfo() {
    // const [id, SetId]=useState(1);
    const [isSubmit, setSubmit] = useState(false);
    const [firstname, SetFirstName] = useState('');
    const [lastname, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, SetAddress] = useState('');
    const [password, SetPassword] = useState('');

    const Update = () => {
                 // http://localhost/redux-project9/API/updateUser.php?id=1&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${password}&password=${phone}
        axios.get(`http://localhost/redux-project9/API/updateUser.php?id=1&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&address=${address}&password=${password}`)
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            });
    }
    return (
        <>
            <div className='text-center message' style={{ display: isSubmit ? "block" : "none" }}>
                <p>Your Information has been updated successfully</p>
            </div>
            <div className='databox form' style={{ marginRight: '70%' }}>
                {/* <form onSubmit={Update}> */}

                <span className='d1'>
                    <label htmlFor="" className='label2'>First Name</label>
                    <input type="text" className='inp' name='firstname' onChange={(e) => SetFirstName(e.target.value)} placeholder='name' />
                </span><br />
                <span className='d1'>
                    <label htmlFor="" className='label2'>Last Name</label>
                    <input type="text" className='inp' name='lastname' onChange={(e) => SetLastName(e.target.value)} placeholder='family' />
                </span><br />
                <span className='d1'>
                    <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                    <input type="text" className='inp' name='email' onChange={(e) => SetEmail(e.target.value)} placeholder='hadi@mail.com' />
                </span><br />
                <span className='d1'>
                    <label htmlFor="" className='label2'>Asdress<span className='red'>*</span></label>
                    <input type="text" className='inp' name='address' onChange={(e) => SetAddress(e.target.value)} placeholder='Aqaba' />
                </span><br />
                <span className='d1'>
                    <label htmlFor="" className='label2'>Phone number<span className='red'>*</span></label>
                    <input type="text" className='inp' name='phone' onChange={(e) => setPhone(e.target.value)} placeholder='0771010101' />
                </span><br />
                <span className='d1'>
                    <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                    <input type="password" className='inp' name='password' required onChange={(e) => SetPassword(e.target.value)} />
                </span>
                <div style={{}}>
                    <button className='butt' onClick={Update} style={{ margintop: '30px' }}>Submit</button>
                </div>
                {/* </form> */}
            </div>
        </>
    );
}

export default UpdateInfo;