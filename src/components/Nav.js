import React, { Component } from 'react';
import Tilt from 'react-tilt';
import { Button, Navbar } from 'react-bootstrap';

class Nav extends Component {
    state = { term: "" }

    handleInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <div >
                <Navbar bg="light" variant="light">
                    <div className="container">
                        <Navbar.Brand href="#">
                            <Tilt className="Tilt" options={{ max: 45 }}>
                                <img
                                    alt="Logo"
                                    src="https://img.icons8.com/wired/64/000000/iron-man.png"
                                />
                                Marvel-Searcher
                            </Tilt>
                        </Navbar.Brand>
                        <div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Character Name"
                                    onChange={this.handleInputChange}
                                    value={this.state.term}
                                />
                                <Button
                                    className="btn btn-danger input-lg"
                                    onClick={() => this.props.handleButtonSubmit(this.state.term)}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Nav
