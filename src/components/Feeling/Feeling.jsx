import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feeling extends Component {

    state = {
        feeling: {},
    }

    handleUnderstanding = () => {
        console.log('we moving');
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding')
    }
    newFeeling = (event) => {
        this.setState({
            feeling:event.target.value,
        })
    }

    render() {
        return (
            <>
            <h1>How are you feeling today?</h1>
            <input type="number" placeholder="Feeling?" onChange={(event) => this.newFeeling(event)} />
            <button onClick={this.handleUnderstanding}>Next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling)