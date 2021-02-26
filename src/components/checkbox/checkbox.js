import React from 'react';
import './checkbox.css';
import image from './img/Mask.png'


const Checkbox = ({ checked, onCheckboxChecked, showContract }) => {
    return (
        <div className='wrapper_checkbox'>
            <div className='checkbox' onClick={onCheckboxChecked} >
                {checked && <img src={image} alt="check" />}
            </div>
            <p>Принимаю <a href='#d' onClick={showContract}>условия</a> использования</p>
        </div>
    )
}


export default Checkbox;