var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');

var data = [
  {author: 'Pete Hunt', text: '댓글입니다'},
  {author: 'Jordan Walke', text: '*또 다른* 댓글입니다'}
];

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
