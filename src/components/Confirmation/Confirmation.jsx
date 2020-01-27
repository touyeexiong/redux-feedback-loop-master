import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {

    state = {
        feeling: 0,
    }

    handleNewFeedback = () => {
        console.log('we moving');
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: 0
        })
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: 0
        })
        this.props.dispatch({
            type: 'ADD_SUPPORTED',
            payload: 0
        })
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: ""
        })
        this.props.history.push('/')
    }
    newFeeling = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
    }

    render() {
        return (
            <>
                <h1>Thank You!</h1>
                <button onClick={this.handleNewFeedback}>Leave New Feedback</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Confirmation)