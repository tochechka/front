import React from "react"
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./components/Route/AppRouter";

function App() {
  return (
    <HashRouter>
      <div>
        <AppRouter/>
      </div>
    </HashRouter>
  )
}

export default App
