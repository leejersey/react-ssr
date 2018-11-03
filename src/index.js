import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './containers/Home';

const app = express();

const content = renderToString(<Home />);

app.get('/',function(req,res){
  res.send(`
    <div>${content}</div>
  `)
});

app.listen('9999');
