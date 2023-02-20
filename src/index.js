import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './App'
import request from './api'


const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl);

root.render(<App />);