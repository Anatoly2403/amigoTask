import React, { Component } from 'react';
import './form.css';

import Header from '../header';
import Checkbox from '../checkbox';
import Btn from './../button';
import DropDown from '../dropDown/dropDown';
import { InputName, InputEmail, InputPhone } from '../inputs';


export default class Form extends Component {
    
    state = {
        lang: ['Русский', 'Английский', 'Китайский', 'Испанский'],
        inputName: '',
        inputEmail: '',
        inputPhone: '',
        dropDownSelected: 'Язык',
        checkboxChecked: false
    }

    showContract = (e) => {
        e.preventDefault();
        alert('showContract');
    }

    showLoginPage = (e) => {
        e.preventDefault();
        alert('Login');
    }

    onChangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }

    onCheckName = () => (
        this.state.inputName.length > 0
            ? /^[a-zа-я- ]+$/gmi.test(this.state.inputName)
            : true
    )

    onChangeInputEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
    }

    onCheckEmail = () => {
        const valid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/igm

        return this.state.inputEmail.length > 0
            ? valid.test(this.state.inputEmail)
            : true
    }

    onChangePhone = (e) => {
        this.setState({ inputPhone: e.target.value })
    }

    onCheckPhone = () => {
        const valid = /\+?[78][-(]?\d{0,3}[-)]?-?\d{0,3}-?\d{0,2}-?\d{0,2}$/gm;
        return this.state.inputPhone.length > 0
            ? valid.test(this.state.inputPhone)
            : true
    }

    onSelectedDropDown = (e) => {
        this.setState({ dropDownSelected: e.target.textContent })
    }

    onCheckDrop = () => this.state.dropDownSelected !== 'Язык';

    onCheckboxChecked = () => {
        this.setState(({ checkboxChecked }) => ({ checkboxChecked: !checkboxChecked }))
    }

    render() {
        const { lang, inputName, inputEmail, inputPhone, dropDownSelected, checkboxChecked } = this.state;
        const checkName = this.onCheckName();
        const checkEmail = this.onCheckEmail();
        const checkPhone = this.onCheckPhone();
        const checkDrop = this.onCheckDrop();

        const checked = (
            (inputName.length > 0 && checkName)
            && (inputEmail.length > 0 && checkEmail)
            && (inputPhone.length > 0 && checkPhone)
            && checkDrop && checkboxChecked
        )        

        return (
            <form name='form' action='#' >
                <div className='container' >
                    <Header onLogin={this.showLoginPage} />
                    <div className="wrapper_input" >
                        <InputName
                            inputName={inputName}
                            onChangeInputName={this.onChangeInputName}
                            checkName={checkName} />
                        <InputEmail
                            inputEmail={inputEmail}
                            onChangeInputEmail={this.onChangeInputEmail}
                            checkEmail={checkEmail}
                        />
                        <InputPhone
                            inputPhone={inputPhone}
                            onChangePhone={this.onChangePhone}
                            checkPhone={checkPhone}
                        />
                    </div>
                    <DropDown
                        lang={lang}
                        dropDownSelected={dropDownSelected}
                        onSelectedDropDown={this.onSelectedDropDown}
                        onCheckDrop={this.onCheckDrop} />

                    <Checkbox
                        checked={checkboxChecked}
                        showContract={this.showContract}
                        onCheckboxChecked={this.onCheckboxChecked} />
                    <Btn
                        checked={checked} />
                </div>
            </form>
        )
    }
}