import React from 'react'

export default function DarkModeSwitch(props){
    return(
        <div className='dark--switch'>
            <label className="switch">
                <input type="checkbox" onChange={props.click}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}