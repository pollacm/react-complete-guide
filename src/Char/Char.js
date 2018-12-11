import React from 'react'
import './Char.css'

const character = (props) => { 
    return <div className="Character" onClick={props.click}>
        {props.character}
    </div>
}

export default character;