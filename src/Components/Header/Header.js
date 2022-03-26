import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <nav className='header-container'>
                <h1 className='ms-5'>Heavy Metal Music</h1>
                <div className='menubar'>
                    <a href="#home">Home</a>
                    <a href="#order">Order</a>
                    <a href="#about">About us</a>
                </div>
            </nav>
        );
    }
}

export default Header;