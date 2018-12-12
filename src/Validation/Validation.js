import React from 'react'

const validation = (props) => {
    const maxPropLength = 10;
    const minPropLength = 3;
    let validationMessage = null;

    if(props.textLength < minPropLength) {
        validationMessage = (
            <div>
                Text Length is too short
            </div>
        );

    }

    if(props.textLength > maxPropLength) {
        validationMessage = (
            <div>
                Text Length is too long
            </div>
        );
    }

    return validationMessage;
}

export default validation;