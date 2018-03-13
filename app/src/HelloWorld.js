import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const result = 4;
        const style = {
            color: '#ff0000',
            fontSize: 30,
            textAlign: 'center'
        }
        return (
            <div className="my-class-from-react">
                {/* this is my first component */}
                <h1 style={style}>Hello World from Component React.js by Breno Franca</h1>
                <h4>{ result === 2 * 3 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div> }</h4>
            </div>
        )
    }
}

export default HelloWorld;