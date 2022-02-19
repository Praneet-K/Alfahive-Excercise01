import React, { Component } from 'react'
import InputRow from './InputRow'
//import './Form.css'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
             firstName : '',
             lastName:'',
             phoneNumber : '',
             emailId:'',
             address:'',
             city : '',
             state: '',
             country : '',
        };
    }
    handleCallBack = (y,x) => {
        switch(y){
            case 'Id' : this.setState({
                id:x,
            });
            break;
            case 'firstName' : this.setState({
                            firstName : x,
                        });
                        break;
            case 'lastName' : this.setState({
                                    lastName : x,
                                });
                                break;
            case 'phoneNumber' : this.setState({
                                phoneNumber : x,
                                });
                                break;
            case 'emailId'  : this.setState({
                                emailId : x,
                                });
                                break;
            case 'address' : this.setState({
                                address : x,
                                });
                                break;
            case 'city' : this.setState({
                                city : x,
                        });
                        break;
            case 'state': this.setState({
                                state : x,
                        });
                        break;
            case 'country' : this.setState({
                            country : x,
                        });
                        break;
            default : break;
        }
        // console.log(this.state)
    }
    handleSubmit = (event) => {
        this.setState({
            
        })
        alert(`Hi ${this.state.firstName} ${this.state.lastName} is added`)

        this.props.parentCallBack(this.state)
        
        event.preventDefault()
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Employee Details</legend>
                    <table>
                        <tbody>
                            <InputRow item = 'Id' type = 'number' required = 'true' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'firstName' type = 'text' required = 'true' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'lastName' type = 'text' required = 'false' parentCallBack={this.handleCallBack} />
                            <InputRow item = 'phoneNumber' type = 'text' required = 'true' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'emailId' type = 'email' required = 'true' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'address' type = 'text' required = 'true' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'city' type = 'text' required = 'flase' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'state' type = 'text' required = 'flase' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'country' type = 'text' required = 'false' parentCallBack={this.handleCallBack}/>
                        </tbody>
                    </table>
                </fieldset>
                <input type = 'submit' />
            </form>
            </>
        )
    }
}

export default Form
