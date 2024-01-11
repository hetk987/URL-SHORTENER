import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYtn8tvPufFIujnSwXcMkSABXwDbwfe54",
  authDomain: "url-shortener-48c21.firebaseapp.com",
  databaseURL: "https://url-shortener-48c21-default-rtdb.firebaseio.com",
  projectId: "url-shortener-48c21",
  storageBucket: "url-shortener-48c21.appspot.com",
  messagingSenderId: "8168496340",
  appId: "1:8168496340:web:df81d18cad6fe3d3a66f41",
  measurementId: "G-HJER896W8M"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);
