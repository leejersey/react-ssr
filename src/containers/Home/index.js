import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

const Home = (props) => {
  return (
    <div>
      <Header />
      <h1>Home{props.name}</h1>
      <button onClick={()=>{alert('click111')}}>click</button>
    </div>
  );
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home);
