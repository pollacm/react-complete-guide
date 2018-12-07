import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                Hello {props.username}, Here's the first paragraph from UserOutput!!
            </p>
            <p>
                Hello {props.username}, Here's the second paragraph from UserOutput!
            </p>
        </div>
    );
}

export default userOutput;