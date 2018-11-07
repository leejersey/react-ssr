import React, { Component } from 'react';

class NotFound extends Component {
  componentWillMount() {
    console.log(this.props)
    if(this.props.staticContext){
      this.props.staticContext.NOT_FOUND = true;
    }
  }

  render() {
    return (
      <div>
        <h1>NotFound</h1>
      </div>
    );
  }
}

export default NotFound;
