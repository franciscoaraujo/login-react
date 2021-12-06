import Login from '../Login/Login';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

//recuperando o token
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
   //const [token, setToken] = useState();
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
      <div className="wrapper">
      <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
