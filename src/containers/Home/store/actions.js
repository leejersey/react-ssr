import axios from 'axios';
import { GET_HOME_LIST } from './constants';
import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';

const createHomeList = (list) => {
  return {
    type: 'get_home_list',
    list
  }
}

export const getHomeList = (server) => {
  //const url = server ? 'http://localhost:9090/api/getHomeList' : '/api/getHomeList'
  const request = server ? serverAxios : clientAxios;
  return (dispatch) => {
    return request.get('/api/getHomeList').then((res) => {
      const list = res.data.data;
      dispatch(createHomeList(list));
    })
  }
}
