import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0,
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
            feeling: Number(event.target.value),
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