import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import store from './redux/store';



const defaultStyle = {
  minHeight: "100%",
  marginBottom: "0%",
  // minHeight: "100vh"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
       <App style={defaultStyle} />
  </Provider>
 
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
