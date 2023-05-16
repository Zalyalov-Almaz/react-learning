import React, {useState} from 'react';
import './App.css';
import Home from "./home";
import {Route, Routes} from "react-router-dom";
import Login from "./auth/login";
import PrivateRoute from "./routes/privateRoute";

function App() {
    const [count, setCount] = useState();

  return (
    <div className="app">
        <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path={"/"} element={<Home/>}/>
                </Route>
            <Route path={"/login"} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
