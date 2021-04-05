import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { DataStore } from '@aws-amplify/datastore';
import { Comment } from './models';

Amplify.configure(awsconfig)

await DataStore.save(
  new Comment({
  "text": "Lorem ipsum dolor sit amet",
  "author": "Lorem ipsum dolor sit amet",
  "postID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
})
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
