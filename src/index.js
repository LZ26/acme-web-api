import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
  }
  render(){
    return (
      <Router>
        <div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
