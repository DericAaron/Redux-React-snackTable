import React, { Component } from 'react';


class SnackItem extends Component {

  render() {
    
    return (
  
        <div>
            <li key={this.props.snack}>{this.props.snack}</li>
        </div>
    );
  }
}

export default SnackItem;