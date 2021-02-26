import React, { Component } from 'react';
import './dropDown.css'
import downImg from './IMG/Mask.png'

export default class DropDown extends Component {
    state = {
        inVisible: false
    }

    getDropDown = () => {
        this.setState(({ inVisible }) => { return { inVisible: !inVisible } })
    }

    closeDropDown = () => {
        this.setState({ inVisible: false })
    }

    render() {
        const { inVisible } = this.state;
        const { lang, dropDownSelected, onSelectedDropDown } = this.props;
        const color = dropDownSelected !== 'Язык' ? 'black' : null;

        const dropItem = lang.map(item => (
            <div
                key={item}
                className='drop_item'
                onMouseDown={onSelectedDropDown}>
                {item}
            </div>
        ))

        return (
            <div className='drop_down'>
                <label>Язык</label>
                <div className='select' tabIndex='7' onBlur={this.closeDropDown}>
                    <p className={color}>{dropDownSelected}</p>
                    <div className='drop_arrow' onClick={this.getDropDown}>
                        <span className='drop_arrow'><img src={downImg} alt='drop-img' className='drop_img' /></span>
                    </div>
                </div>
                {(inVisible) && <div className='drop_menu'>{dropItem}</div>}
            </div>
        )
    }
}