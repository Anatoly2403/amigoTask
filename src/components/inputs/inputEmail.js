import React from 'react';
import './inputs.css';

const InputEmail = ({ inputEmail, checkEmail, onChangeInputEmail }) => {
    return (
        <>
            <label htmlFor="Еmail">Еmail</label>
            <input
                spellCheck={false}
                type="email"
                name='Еmail'
                placeholder='Введите ваш email'
                value={inputEmail}
                onChange={onChangeInputEmail} />
            <p className='err_name'>{!checkEmail && 'Введено не корректное значение'}</p>
        </>
    )
}

export default InputEmail;