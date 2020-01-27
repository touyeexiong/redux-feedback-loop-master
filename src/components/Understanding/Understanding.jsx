import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: 0,
    }

    handleUnderstanding = () => {
        this.handleValidation();        
    }
    newUnderstanding = (event) => {
        this.setState({
            understanding: Number(event.target.value),
        })
    }

    handleValidation = () => {
        if (this.state.understanding > 0 && this.state.understanding < 11) {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state.understanding
            })
            this.props.history.push('/supported')
        } else {
            alert("A value of 1-10 must be provided!")
        }

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