import React from 'react';
import './button.css';


const Btn = ({ checked }) => {
    return (
        <div className='btn_wrapper'>
            <input type="button" value="Зарегистрироваться" disabled={!checked} />
        </div>
    )
}
export default Btn;