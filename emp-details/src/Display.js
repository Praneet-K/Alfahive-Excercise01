import React, { Component } from 'react'
class Display extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            EmpD : []
        };
    }
    async componentDidMount(){
        var url = "http://localhost:8080/api/employees";
        const options = {method:'GET'}
        await fetch(url,options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    EmpD : data
                });
            })
    }
    render(){
        return (
            <>
                <table>
                    <thead>
                        <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>PhoneNumber</th>
                        <th>Address</th></tr>
                    </thead>
                    <tbody>
                    {this.state.EmpD.map(x =><tr key = {x.id}>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.phno}</td>
                                <td>{`${x.address} , ${x.city} , ${x.state} , ${x.country}`}</td>
                                </tr>)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Display;