import React from "react";

export default class UserPage extends React.Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         uname: 'PRIYA P SHETTY',
    //         age: 24,
    //         addr: 'SHIMOGA'
    //     }
    // }

    // updateAddress() {
    //     this.setState({
    //         addr: 'UDUPI'
    //     })
    // }

    // render() {
    //     return (
    //         <div>
    //             User Name :  {this.state.uname} <br></br>
    //             User Age :  {this.state.age} <br></br>
    //             User addr :  {this.state.addr} <br></br>
    //         </div>
    //     )
    // }
    constructor() {
        super();
        this.state = {
            fname: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('You clicked submit.');
        console.log(event)
    }

    handleChange(evt) {
        console.log(evt)

        //when first time testing you do dont uncomment this code
        // this.setState({
        //     fname: evt.target.value
        // });

        //  value to input is not getting changed.. you have to set that value to input constol
        this.setState({
            fname: evt.target.value
        });
    }

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Name:
                        <input type="text" value={this.state.fname} onChange={(ev) => this.handleChange(ev)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

