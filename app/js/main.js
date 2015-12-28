var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');
var Colors = require('./colors');
var NICE = Colors.NICE;
var SUPER_NICE = Colors.SUPER_NICE;

var data = [
  {author: 'Pete Hunt', text: '11댓글입니다', color: NICE},
  {author: 'Jordan Walke', text: '*또 다른* 댓글입니다', color:SUPER_NICE}
];

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
