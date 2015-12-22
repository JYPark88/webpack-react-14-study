var React = require('react');
var CommentForm = require('./CommentForm');
var wrapper = require('./CommentWrapper');
var Comment = wrapper.Comment;
var CommentList = wrapper.CommentList;

var CommentBox = React.createClass({
    handleCommentSubmit(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this.setState({data: this.props.data});
    },
    render() {
        return (
            <div className="commentBox">
                <h1>댓글</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

module.exports = CommentBox;
