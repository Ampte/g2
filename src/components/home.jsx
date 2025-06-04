import React, { useEffect, useState } from 'react'
import '/src/App.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const greetDiv = document.querySelector(".greet");
        greetDiv.style.display = 'none';
        const transDiv = document.querySelector(".translate");
        transDiv.style.display = 'none';

        const dokDiv = document.querySelector(".dokbadale-seani");
        dokDiv.style.display = 'none';

        const jikse = document.querySelector(".katta-jikse");
        jikse.style.display = 'none';

        const chatBox = document.querySelector(".chat-box");

        const textDiv = document.createElement("div");
        textDiv.className = 'textDiv';
        textDiv.innerHTML = text;

        const responseDiv = document.createElement("div");
        responseDiv.className = 'responseDiv';
        responseDiv.innerHTML = "..."
        
        chatBox.appendChild(textDiv);
        chatBox.appendChild(responseDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        fetch(`http://localhost:3000/search?garo=${text}`)
        .then((response) => response.json())
        .then((data) => {
            if(data.success){
                setTimeout(() => {
                    responseDiv.innerHTML = data.response;
                }, 1000);
            }else{
                alert("NOT FOUND");
            }
        })
        .catch((error) => {
            alert("Network error");
        });

    };

    const clearPage = () => {
        location.reload();
    }

    const openSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = 'block';
    }

    const closeSidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    }

    const signUp = () => {
        navigate('/sign_up');
    };

    useEffect(() => {
        const firstName = localStorage.getItem("name")
        if(!firstName){
            setUserName("Sign Up");
        }else{
            setUserName(firstName);
        };

    }, [])
    return(
        <>
        <div className='body'>
            <div className='left-side-content'></div>
            <div className='right-side-content'></div>
            <div className='center-content'>
            <div className='sidebar'> 
            <div className='side-header'>
                <h1>Garo2</h1>
                <button className='closeSidebar' onClick={closeSidebar}><i class="fa-solid fa-xmark" style={{fontSize:'large'}}></i></button>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>About</li>
                        <li>Feedback</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    <div className='user-container' onClick={signUp}>
                        <p>{userName}</p>
                    </div>
            </div>
            <div className='header'>
                <div className='menu'>
                    <button className='menu-btn' onClick={openSidebar}><i class="fa-solid fa-bars-staggered" style={{fontSize: "large"}}></i></button>
                </div>
                <div className='logo'>
                    <h1>Garo2</h1>
                </div>
                <div className='clear'>
                    <button className='clear-btn' onClick={clearPage}><i class="fa-solid fa-arrows-rotate" style={{fontSize: "large"}}></i></button>
                </div>
            </div>
            <div className='chat-box'>
                <div className='greet'>
                    <h2>What can I help with ?</h2>
                </div>
                <div className='translate'>
                    <p>Try translating Garo to English</p>
                </div>
                <div className='dokbadale-seani'>
                    <p>Try searching for Dokbadale seani</p>
                </div>
                <div className='katta-jikse'>
                    <p>Try searching for Katta Jikse</p>
                </div>
            </div>
            <div className='input-fields'>
                <form onSubmit={handleSubmit} className='search-form'>
                    <input type='text' name='text' onChange={handleChange} className='text' placeholder='Type here to search...' required/>
                    <button type='submit' className='submit-btn'><i class="fa-solid fa-paper-plane" style={{fontSize: "large"}}></i></button>
                </form>
                <div className='footer'>
                    <p style={{textAlign: 'center'}}>&copy; G2 2025.</p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Home;