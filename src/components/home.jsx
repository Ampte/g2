import React, { useState } from 'react'
import '/src/App.css'

const Home = () => {

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
        responseDiv.innerHTML = "Getting data.."
        
        chatBox.appendChild(textDiv);
        chatBox.appendChild(responseDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            responseDiv.innerHTML = text;
            setResponse(text);
        }, 2000);

    }

    const clearPage = () => {
        location.reload();
    }
    return(
        <>
        <div className='body'>
            <div className='left-side-content'></div>
            <div className='right-side-content'></div>
            <div className='center-content'>
            <div className='header'>
                <div className='menu'>
                    <button className='menu-btn'><i class="fa-solid fa-bars-staggered" style={{fontSize: "large"}}></i></button>
                </div>
                <div className='logo'>
                    <h1>G2</h1>
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
                <form onSubmit={handleSubmit}>
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