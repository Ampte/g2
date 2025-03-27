import React from 'react'
import '/src/App.css'
import Card from './card';

const Home = () => {

    const open = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'block';
    };

    const close = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return(
        <>
        <div className='home'>
            <div className='header'>
                <button className='bar' onClick={open}><i class="fa-solid fa-bars-staggered" style={{fontSize: 'large'}}></i></button>
                <h1>Ches Thrift</h1>
                <button className='user-circle'>
                <i class="fa-solid fa-circle-user" style={{
                    fontSize: '30px'
                }}></i>
                </button>
            </div>
            <div className='search'>
                <form>
                    <input type='text' className='search-value' placeholder='Search...'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='sidebar'>
                <div className='logo'>
                <h1>Ches Thrift</h1>
                <button className='xmark' onClick={close}>
                <i class="fa-solid fa-xmark"style={{
                    fontSize:'large'
                }}></i>
                </button>
                </div>
                <div className='links'>
                <button className='home-btn'>Home</button>
                <button className='catego-btn'>Categories</button>
                <button className='fav-btn'>Favourites</button>
                <button className='exchange-btn'>Exchange</button>
                <button className='order-btn'>My orders</button>
                </div>
            </div>
            <div className='main'>
                <Card/>
            </div>
            <div className='footer'>
                <p>&copy; Ches Thrift.</p>
            </div>
        </div>
        </>
    );
};

export default Home;