import React from 'react';

const withClassAlt = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withClassAlt;
