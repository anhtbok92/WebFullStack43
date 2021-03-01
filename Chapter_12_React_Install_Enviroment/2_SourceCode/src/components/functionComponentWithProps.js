import React from 'react';

const FunctionComponentWithProps = function(props) {
    console.log(props);
    return (
        <div>
            <h1>Welcome ! I am a functional component {props.name} and {props.age}</h1>
        </div>
    )
}

export default FunctionComponentWithProps;