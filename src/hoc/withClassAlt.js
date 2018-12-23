import React, {Component} from 'react';

// const withClassAlt = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

const withClassAlt = (WrappedComponent, className) => {
    const WithClassAlt = class extends Component {
        render() {
            return <div className={className}>
            <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
            </div>
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClassAlt {...props} forwardedRef={ref} />
    });
}

export default withClassAlt;
