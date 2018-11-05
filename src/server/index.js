import express from 'express';
import { matchRoutes } from 'react-router-config'
import routes from '../Routes';
import { getStore } from '../store';
import { render } from './utils.js';

const app = express();
app.use(express.static('public'));

app.get('*',function(req,res){
  const store = getStore();

  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  matchedRoutes.forEach(item => {
    if(item.route.loadData){
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  });

});

app.listen('9999');
