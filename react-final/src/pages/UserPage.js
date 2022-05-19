import React from "react";

export default class UserPage extends React.Component {

    constructor() {
        super();

        this.state = {
            uname: 'PRIYA P SHETTY',
            age: 24,
            addr: 'SHIMOGA'
        }
    }

    updateAddress() {
        this.setState({
            addr: 'UDUPI'
        })
    }

    render() {
        return (
            <div>
                User Name :  {this.state.uname} <br></br>
                User Age :  {this.state.age} <br></br>
                User addr :  {this.state.addr} <br></br>
            </div>
        )
    }

}