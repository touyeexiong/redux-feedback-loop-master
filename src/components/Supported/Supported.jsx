import React, { Component } from 'react';
import { connect } from 'react-redux';


class Supported extends Component {

    state = {
        supported: 0,
    }

    handleSupported = () => {
        this.handleValidation ();

    }
    newSupported = (event) => {
        this.setState({
            supported: Number(event.target.value),
        })
    }

    handleValidation = () => {
        if (this.state.supported > 0 && this.state.supported < 11) {
            this.props.dispatch({
                type: 'ADD_SUPPORTED',
                payload: this.state.supported
            })
            this.props.history.push('/comment')
        } else {
            alert("A value of 1-10 must be provided!")
        }

    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <input type="number" placeholder="Supported?" onChange={(event) => this.newSupported(event)} />
                <button onClick={this.handleSupported}>Next</button>
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Supported)