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
        // this.props.history.push('/comments')
    }
    newComments = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                {/* <div>{JSON.stringify(this.props.reduxStore.commentsSetter.comments)}</div> */}
                <div>Feelings: {this.props.reduxStore.feelingSetter}</div>
                <div>Understanding: {this.props.reduxStore.understandingSetter}</div>
                <div>Support: {this.props.reduxStore.supportedSetter}</div>
                <div>Comments: {this.props.reduxStore.commentsSetter}</div>

                <button onClick={this.handleComments}>Next</button>
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments)