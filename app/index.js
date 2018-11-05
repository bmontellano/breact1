var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state 
//lifecycle events
//UI

class App extends React.Component {
    render() {
        return (
            <div>
               <h1>
                    Hello Suckas!!!
               </h1>
               <p>
                   Random P Taggggg
               </p>
            </div>
        )
    }
}


ReactDOM.render(
   <App />,
   document.getElementById('app') 
)