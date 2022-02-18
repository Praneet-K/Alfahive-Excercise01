import React, { Component } from 'react'
import InputRow from './InputRow'
//import './Form.css'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
             FirstName : '',
             LastName:'',
             Phno : '',
             Address:'',
             City : '',
             State: '',
             Country : '',
        };
    }
    handleCallBack = (y,x) => {
        switch(y){
            case 'Id' : this.setState({
                id:x,
            });
            break;
            case 'FirstName' : this.setState({
                            FirstName : x,
                        });
                        break;
            case 'LastName' : this.setState({
                                    LastName : x,
                                });
                                break;
            case 'Phno' : this.setState({
                                Phno : x,
                                });
                                break;
            case 'Address' : this.setState({
                                Address : x,
                                });
                                break;
            case 'City' : this.setState({
                                City : x,
                        });
                        break;
            case 'State': this.setState({
                                State : x,
                        });
                        break;
            case 'Country' : this.setState({
                            Country : x,
                        });
                        break;
            default : break;
        }
        // console.log(this.state)
    }
    handleSubmit = (event) => {
        this.setState({
            
        })
        alert(`Hi ${this.state.FirstName} ${this.state.LastName} is added`)

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
                            <InputRow item = 'Id' type = 'number' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'FirstName' type = 'text' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'LastName' type = 'text' parentCallBack={this.handleCallBack} />
                            <InputRow item = 'Phno' type = 'text' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'Address' type = 'text' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'City' type = 'text' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'State' type = 'text' parentCallBack={this.handleCallBack}/>
                            <InputRow item = 'Country' type = 'text' parentCallBack={this.handleCallBack}/>
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
