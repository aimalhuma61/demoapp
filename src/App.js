import React from 'react';
import Dine from './Dine.js';


function App() {
  return (
    <div className="App">
      <Dine dishname="Baryani"  sweetdish="Cake"/>
      <hr/>
      <Dine dishname="Pizza"  sweetdish="Chocolate"/>
      <hr/>
      <Dine dishname="Samosa"  sweetdish="pastry"/>
  </div>
  );
}

export default App;
