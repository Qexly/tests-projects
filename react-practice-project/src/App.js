import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';
import Alert from './components/Alert/Alert.jsx';
import AlertState from './context/alert/AlertState.jsx';
import FirebaseState from './context/firebase/FirebaseState.jsx';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container border">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
