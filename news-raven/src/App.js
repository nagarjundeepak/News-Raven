import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

// Importing Components
import Header from './components/header';
import Footer from './components/footer';
import MainContainer from './components/containers/mainContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={MainContainer} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
