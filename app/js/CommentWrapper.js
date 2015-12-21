var React = require('react');
var marked = require('marked');

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment, i) {
            return (
                <Comment key={i} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});

module.exports = {
    CommentList : CommentList,
    Comment : Comment
}