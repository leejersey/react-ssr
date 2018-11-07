import React, { Component, Fragment } from 'react';
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

import withStyle from '../../withStyle';
import styles from './style.css';

class Home extends Component {

  componentDidMount(){
    if(!this.props.list.length){
      this.props.getHomeList();
    }
  }

  render(){
    return (
      <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>这是首页</title>
        </Helmet>
        <div className={styles.test}>
          {
            this.props.list.map((item) => {
              return <div key={item.id}>{item.name}</div>
            })
          }
        </div>
      </Fragment>
    );
  }
}




const mapStateToProps = state => ({
  list: state.home.newsList,
  name: state.home.name
});

const mapDispathToProps = dispatch => ({
  getHomeList(){
    dispatch(getHomeList());
  }
})

const ExportHome = connect(mapStateToProps, mapDispathToProps)(withStyle(Home, styles));

ExportHome.loadData = (store) => {
  //负责在度无端渲染之前把这个路由所需要的数据加载好
  return store.dispatch(getHomeList())
}

export default ExportHome;
