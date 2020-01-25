import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    state = {
        comments: {},
    }

    handleComments = () => {
        console.log('we moving');
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/')
    }
    newComments = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <input type="text" placeholder="Comments?" onChange={(event) => this.newComments(event)} />
                <button onClick={this.handleComments}>Next</button>
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments)