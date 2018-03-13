import React, { Component } from 'react';
import StateInput from './StateInput';

class HelloWorld extends Component {
    constructor(props) {
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Breno Franca',
            txt: this.props.txt
        }
    }

    render() {
        const result = 4;
        const style = {
            color: '#0000ff',
            fontSize: 30,
            textAlign: 'center'
        }
        return (
            <div className="my-class-from-react">
                {/* this is my first component */}
                <StateInput />
                <h1 style={style}>{ this.state.txt }</h1>
                <h4>{ result === 2 * 3 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div> }</h4>
                <span>{ this.state.name }</span>
            </div>
        )
    }
}

export default HelloWorld;