import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {addPost, setNewPostText} from "./state";

export const renderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} setNewPostText={setNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}