var React = require('react');
var ReactDOM = require('react-dom');
var CommentForm = require('./CommentForm');
var wrapper = require('./CommentWrapper');
var Comment = wrapper.Comment;
var CommentList = wrapper.CommentList;

var CommentBox = React.createClass({
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.setState({data: this.props.data});
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>댓글</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

var data = [
  {author: "Pete Hunt", text: "댓글입니다"},
  {author: "Jordan Walke", text: "*또 다른* 댓글입니다"}
];

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
