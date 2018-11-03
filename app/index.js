var React = require('react');
var ReactDOM = require('react-dom');
require('index.css');
//state
//lifecycle events
//UI

class App extends React.Component (
    render() {
        return (
            <div>
                Hello Suckas!!!
            </div>
        )
    }
)


ReactDOM.render(
   <App />,
   document.getElementById('app') 
)