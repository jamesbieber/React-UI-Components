import React from 'react';
import './App.css';

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => (
    <div className="App">
      <HeaderContainer />
      <CardContainer id="card-container"/>
    </div>
);

export default App;
