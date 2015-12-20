var React = require('react');
var ReactDom = require('react-dom');

var HelloClass = React.createClass({
  render: function() {
    return (
      <h1>Hello, react!</h1>
    );
  }
})

ReactDom.render(
  <HelloClass />,
  document.getElementById('example')
)
