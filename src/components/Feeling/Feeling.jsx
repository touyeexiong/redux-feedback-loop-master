import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: 0,
    }

    handleUnderstanding = () => {
        this.handleValidation();
    }
    newFeeling = (event) => {
        this.setState({
            feeling: Number(event.target.value),
        })
    }

    handleValidation = () => {
        if (this.state.feeling > 0 && this.state.feeling < 11) {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state.feeling
            })
            this.props.history.push('/understanding')
        } else {
            alert("A value of 1-10 must be provided!")
        }

    }


    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <h2>On a scale of 1-10</h2>
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