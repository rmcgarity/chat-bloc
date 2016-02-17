var BlocChatApp = require('./components/BlocChatApp.react.jsx');
var ReactDOM = require('react-dom');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

ReactDOM.render(
    <BlocChatApp />,
    document.getElementById('react')
);
