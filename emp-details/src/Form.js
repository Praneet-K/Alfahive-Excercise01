import React, { Component } from 'react'
import InputRow from './InputRow'
//import './Form.css'
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
<<<<<<< HEAD
             firstName : '',
             lastName:'',
             phoneNumber : '',
             emailId:'',
             address:'',
             city : '',
             state: '',
             country : '',
             msg : '',
=======
             FirstName : '',
             LastName:'',
             Phno : '',
             Address:'',
             City : '',
             State: '',
             Country : '',
>>>>>>> parent of 4834773 (added service layer)
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
        var url = "http://localhost:8080/api/saveemp";
        // headers.append({'Content-Type' : 'application/json'})
        const options = {method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: this.state.id,firstName : this.state.firstName,
        lastName:this.state.lastName,
        phno:this.state.phoneNumber,
        emailId:this.state.emailId,
        address:this.state.address,
        city:this.state.city,
        state:this.state.state,
        country:this.state.country}),
    }
    
    fetch(url,options)
        .then(response => response.text()).then((data) =>{
            this.setState({
                msg:data,
            })
        }).catch(error => {
            console.log(error)
            this.setState({
                msg : 'Server Error',
            })
        })
<<<<<<< HEAD
        // alert(`Hi ${this.state.firstName} ${this.state.lastName} is added`)        
=======
        alert(`Hi ${this.state.FirstName} ${this.state.LastName} is added`)

        this.props.parentCallBack(this.state)
        
>>>>>>> parent of 4834773 (added service layer)
        event.preventDefault()
    }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Employee Details</legend>
                    <table className='text-center table'>
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
            <div>{this.state.msg}</div>
            </>
        )
    }
}

export default Form
