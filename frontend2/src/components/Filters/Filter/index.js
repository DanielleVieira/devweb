import React from 'react';
import './style.css';

const Filter = (props) => {
    const handleChange = (set) => {
        if(set) {
            const $select = document.querySelector(`#${props.id}`);
            const $value = $select.options[$select.selectedIndex].value;
            if($value !== props.name) {
                set($value);
            } else {
                set('');
            }
        }
    }
    
    return (
        <>
        <select className='ft-item' name={props.name} id={props.id} onChange={() => {handleChange(props.onChange)}}>
            <option value={props.name}>{props.name}</option>
            {props.options.map((option) => {
                return<option key={`ft-${option}`} value={option}>{option}</option>
            })}
        </select>
        </>
    );

}

export default Filter