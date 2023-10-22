import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{ color: "white" }}>NewsApp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about" style={{ color: "white" }}>Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
