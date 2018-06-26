import React, { Component } from 'react';
import {connect} from 'react-redux';

import SnackItem from '../SnackItem/SnackItem';

//Access redux store
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

class SnackList extends Component {

  render() {
    
    return (
  
        <ul>
          {
            this.props.reduxState.map( snack => 
                <SnackItem snack={snack}/>
              )
            }
        </ul>
    );
  }
}

export default connect(mapReduxStateToProps)(SnackList);