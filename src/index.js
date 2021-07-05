
import reportWebVitals from './reportWebVitals';
import store from './Redux/state'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let renderTree = (store) => {

    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState()} 
            addPost={store.addPost} 
            changeInputTextArea={store.changeInputTextArea}
            addMessage = {store.addMessage}
            changeInputTextMessage = {store.changeInputTextMessage}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}
renderTree(store)

store.reRender(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
