require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.scss';

render(<App />, document.getElementById('root'));
