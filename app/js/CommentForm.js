var React = require('react');

var CommentForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({author, text});
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render() {
        return(
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="이름" ref="author" />
                <input type="text" placeholder="내용을 입력하세요." ref="text" />
                <input type="submit" />
            </form>
        )
    }
});

module.exports = CommentForm;
