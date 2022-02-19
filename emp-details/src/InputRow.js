import React, { Component } from 'react'

export class InputRow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             val : '',
        }
    }
    handleChange = (event) =>{
        this.setState({
            val: event.target.value,
        },() => {
            this.props.parentCallBack(this.props.item,this.state.val);
        });
        
    }
    render() {
        return (
        <tr>
            <td>{this.props.item}</td>
            <td>
                <input id = {this.props.item}
                type = {this.props.type} 
                placeholder={this.props.item}
                value={this.state.val} required={this.props.required}
                onChange={this.handleChange} />
            </td>
        </tr>
        )
    }
}

export default InputRow
