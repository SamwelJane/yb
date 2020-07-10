import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";

import Home from "./home"
import Register from "./register"
import Login from "./login"

const Pages = [
    "Home",
    "About",
    "Partners",
    "Outline",
    "Comments",
    "Gallery",
    "Contact"
]

const pageContent = {
    Login,
    Register,
    Home
}

class Wrapper extends Component {
    render() {
        console.log()
        const currentPath = this.props.location.pathname.split("/")[1]
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link className="navbar-brand" to={"/Home"}>YBOA-AGPO</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                  </li> */}
                                {
                                    Pages.map(title => (<li className={"nav-item " + (title == currentPath ? "active" : "")}>
                                        {/* <a href="/">{title}</a> */}
                                        <Link className="nav-link" to={"/" + title}>{title}</Link>
                                    </li>))

                                }
                            </ul>
                            <form className="form-inline mt-2 mt-md-0">
                            <Link style={{ marginRight: 20 }} className="btn btn-sm btn-outline-info my-2 my-sm-0" to={"/Login"}>Start Course</Link>
                                <Link style={{ marginRight: 20 }} className="btn btn-sm btn-outline-success my-2 my-sm-0" to={"/Login"}>Login</Link>
                                {/* <button style={{ marginRight: 20 }} className="btn btn-sm btn-outline-success my-2 my-sm-0" type="submit">Login</button> */}
                                <Link style={{ marginRight: 20 }} className="btn btn-sm btn-outline-info my-2 my-sm-0" to={"/Register"}>Register</Link>
                            </form>
                        </div>
                    </nav>
                </header>
                <main role="main">
                    <Switch>
                        {
                            Pages.map(title => (
                                <Route path={"/" + title}>
                                    {/* <About /> */}
                                    {pageContent[title] ? React.createElement(pageContent[title]) : ""}
                                </Route>
                            ))
                        }
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Register" component={Register} />
                    </Switch>

                </main>

            </div >
        );
    }
}

export default withRouter(Wrapper);
