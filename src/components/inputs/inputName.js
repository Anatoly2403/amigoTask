import React from 'react';
import './inputs.css';

const InputName = ({ onChangeInputName, checkName, inputName }) => {
    return (
        <>
            <label htmlFor="name">Имя</label>
            <input
                spellCheck={false}
                type="text"
                name='name'
                placeholder='Введите Ваше имя'
                value={inputName}
                onChange={onChangeInputName} />
            <p className='err_name'> {!checkName && 'Введено не корректное значение'} </p>
        </>
    )
}

export default InputName;