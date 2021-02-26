import React from 'react';
import './header.css';

const Header = ({ onLogin }) => {
    return (
        <div className='header' >
            <h1>Регистрация</h1>
            <p>Уже есть аккаунт?<a href="#http" onClick={onLogin}>Войти</a></p>
        </div>
    )
}

export default Header;