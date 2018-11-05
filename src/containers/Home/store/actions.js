import axios from 'axios';
import { GET_HOME_LIST } from './constants';

const createHomeList = (list) => {
  return {
    type: 'get_home_list',
    list
  }
}

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:9090/getHomeList').then((res) => {
      const list = res.data.data;
      dispatch(createHomeList(list));
    })
  }
}
