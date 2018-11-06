import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends Component {
  componentDidMount(){
    if(!this.props.list.length){
      this.props.getHomeList();
    }
  }

  render(){
    return (
      <div>
        {
          this.props.list.map((item) => {
            return <div key={item.id}>{item.name}</div>
          })
        }
      </div>
    );
  }
}

Home.loadData = (store) => {
  //负责在度无端渲染之前把这个路由所需要的数据加载好
  return store.dispatch(getHomeList())
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

export default connect(mapStateToProps, mapDispathToProps)(Home);
