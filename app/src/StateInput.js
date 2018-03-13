import React, { Component } from 'react';

class StateInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
        setTimeout(() => {
            // this.state.name = 'Breno'
            this.setState({
                name: 'Breno'
            })
        }, 1000)
    }
    
    render() {
        console.log(this.state)
        return(
            <div>
                <input type="text" name="name" value={this.state.name} />
            </div>
        )
    }
}

export default StateInput;