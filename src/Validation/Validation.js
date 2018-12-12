import React from 'react'

const validation = (props) => {
    const maxPropLength = 10;
    const minPropLength = 3;
    let jsx = null;

    if(props.textLength < minPropLength) {
        jsx = (
            <div>
                Text Length is too short
            </div>
        );

    }

    if(props.textLength > maxPropLength) {
        jsx = (
            <div>
                Text Length is too long
            </div>
        );
    }

    return jsx;
}

export default validation;