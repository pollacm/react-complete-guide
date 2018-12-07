import React from 'react'

const userInput = (props) => {
    const style = {
        height: '24px'
    };

    return(
        <input type="text" style={style} onChange={props.change} value={props.username} />
    );
}

export default userInput;