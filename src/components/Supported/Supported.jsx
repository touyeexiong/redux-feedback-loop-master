import React, { Component } from 'react';
import { connect } from 'react-redux';


class Supported extends Component {

    state = {
        supported: 0,
    }

    handleSupported = () => {
        console.log('we moving');
        this.props.dispatch({
            type: 'ADD_SUPPORTED',
            payload: this.state.supported
        })
        this.props.history.push('/comment')
    }
    newSupported = (event) => {
        this.setState({
            supported: Number(event.target.value),
        })
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