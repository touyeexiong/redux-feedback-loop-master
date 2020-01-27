import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Comments extends Component {

    state = {
        comments: {},
    }

    handleSubmit = () => {

        // axios.post('/')
        // this.props.history.push('/comments')
        let newFeedback = {
            feeling: this.props.reduxStore.feelingSetter ,
            understanding: this.props.reduxStore.understandingSetter,
            support: this.props.reduxStore.supportedSetter,
            comments: this.props.reduxStore.commentsSetter
        }

        // console.log('we moving', newFeedback);
        axios.post(`/feedback`, newFeedback)
        .then((result) => {
            console.log(result);
            
            
        })
        .catch((err) => {
            alert(err)
        })
    }
    // newComments = (event) => {
    //     this.setState({
    //         comments: event.target.value,
    //     })
    // }
    

    render() {
        return (
            <>
                <h1>Review Your Feedback</h1>
                {/* <div>{JSON.stringify(this.props.reduxStore.commentsSetter.comments)}</div> */}
                <div>Feelings: {this.props.reduxStore.feelingSetter}</div>
                <div>Understanding: {this.props.reduxStore.understandingSetter}</div>
                <div>Support: {this.props.reduxStore.supportedSetter}</div>
                <div>Comments: {this.props.reduxStore.commentsSetter}</div>

                <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}




const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments)