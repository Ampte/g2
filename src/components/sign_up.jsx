import React, { use, useState } from 'react'
import '/src/sign_up.css'
import { useNavigate } from 'react-router-dom';

const Sign_up = () => {

    const navigate = useNavigate();

    const [userDetail, setUserDetail] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserDetail({...userDetail, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
            localStorage.setItem("name", userDetail.firstName);
            
            navigate('/');
    };
    return(
        <>
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='user-form'>
                <input type='text' value={userDetail.firstName} onChange={handleChange} name='firstName' className='user-first-name'  placeholder='First name'/>
                <input type='text' value={userDetail.middleName} onChange={handleChange} name='middleName' className='user-middle-name' placeholder='Middle name'/>
                <input type='text' value={userDetail.lastName} onChange={handleChange} name='lastName' className='user-last-name' placeholder='Last name'/>
                <input type='email' value={userDetail.email} onChange={handleChange} name='email' className='user-email' placeholder='Email'/>
                <input type='text' value={userDetail.password} onChange={handleChange} name='password' className='user-password' placeholder='Password'/>
                <input type='text' value={userDetail.confirmPassword} onChange={handleChange} name='confirm-password' className='user-confirm-password' placeholder='Confirm password'/>
                <button type='submit' className='submit-user-details'>Sign Up</button>
            </form>
            <div className='ads'>
                
            </div>
        </div>
        </>
    );
};

export default Sign_up;