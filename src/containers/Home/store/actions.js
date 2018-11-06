import axios from 'axios';
import { GET_HOME_LIST } from './constants';

const createHomeList = (list) => {
  return {
    type: 'get_home_list',
    list
  }
}

export const getHomeList = () => {
  //const url = server ? 'http://localhost:9090/api/getHomeList' : '/api/getHomeList'
  // const request = server ? serverAxios : clientAxios;
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/getHomeList').then((res) => {
      const list = res.data.data;
      dispatch(createHomeList(list));
    })
  }
}
