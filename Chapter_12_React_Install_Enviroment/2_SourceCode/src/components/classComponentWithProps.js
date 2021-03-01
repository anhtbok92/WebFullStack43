import React, { Component } from "react";

class ClassComponentWithProps extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome ! I am a class component {this.props.name} and {this.props.age}</h1>
            </div>
        );
    }
}
export default ClassComponentWithProps;