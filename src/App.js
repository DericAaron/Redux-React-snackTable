import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

//Access redux store
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      snack: ''
    }
  } // end constructor

  sendSnack = () => {
    const action = {type: 'ADD_SNACK', payload: this.state.snack};
    this.props.dispatch(action);
  } // end sendSnack

  handleChange = (event) => {
    this.setState({
      snack: event.target.value
    });
  } // end handleChange

  render() {
    const snacks = this.props.reduxState.map( (snack) => {
      return(
        <li key={snack}>{snack}</li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.handleChange} value={this.state.snack}/>
        <button onClick={this.sendSnack}>Submit</button>
        <ul>
          {snacks}
        </ul>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
