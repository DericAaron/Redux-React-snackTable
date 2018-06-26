import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';
import SnackList from '../SnackList/SnackList';
import Header from '../Header/Header';

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
        <Header />
        <input onChange={this.handleChange} value={this.state.snack}/>
        <button onClick={this.sendSnack}>Submit</button>
        <SnackList />

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
