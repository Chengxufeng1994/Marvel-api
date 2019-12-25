import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
            </div>
        )
    }
}

export default Loading;