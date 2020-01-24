import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: {},
    }

    handleUnderstanding = () => {
        console.log('we moving');
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding
        })
        this.props.history.push('/supported')
    }
    newUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

    render() {
        return(
            <>
            <h1>How well are you understanding the content?</h1>
            <input type="number" placeholder="Understanding?" onChange={(event) => this.newUnderstanding(event)} />
            <button onClick={this.handleUnderstanding}>Next</button>
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding)