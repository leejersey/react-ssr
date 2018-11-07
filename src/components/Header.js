import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withStyle from '../withStyle';
import styles from './style.css';

class Header extends Component{

  render(){
    return (
      <div>
        <h1 className={styles.header}>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }

}

export default withStyle(Header, styles);
