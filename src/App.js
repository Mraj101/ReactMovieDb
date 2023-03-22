import React from 'react';

//components
import Header from './components/Header'
import Home from './components/Home';

//styles
import { GlobalStyle } from './GlobalStyles';
function App() {
  return (
    <div className="App">
      <Header/>
      Start here.
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
