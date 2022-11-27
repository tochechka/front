import React from "react"
import {HashRouter} from "react-router-dom";
import image from './bg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/Route/AppRouter";

function App() {
  return (
    <HashRouter>
      <div
        style={{backgroundImage:`url(${image})`}}
      >
        <AppRouter/>
      </div>
    </HashRouter>
  )
}

export default App
