import React from 'react';
import './inputs.css';

const InputPhone = ({ inputPhone, onChangePhone, checkPhone }) => {
    return (
        <>
            <label htmlFor="phone">Номер телефона</label>
            <input
                spellCheck={false}
                type="tel"
                name='phone'
                placeholder='Введите номер телефона'
                value={inputPhone}
                onChange={onChangePhone} />
            <p className='err_name'>{!checkPhone && 'Введено не корректное значение'}</p>
        </>
    )
}
export default InputPhone;