import React from "react";
import { Link } from "react-router-dom";

{/* <HeaderLayout title="dadsa"></HeaderLayout> */ }
export default class HeaderLayout extends React.Component {
    constructor() {
        super();

        this.state = {
            URL: "www.thbs.com",
            name: "test"
        };
    }

    render() {
        return (
            <>
                {/* <div>
                    {this.props.title}
                    {this.state.URL} --c {this.state.name}
                </div> */}
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react image"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home Page </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user">User Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list">List Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hooks">Hooks Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register">Registration Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login Page</Link>
                        </li>


                    </ul>
                </div>
            </nav>
            </>
        )
    }

}