import React from 'react';
import Header from './component/ui/Header/Header';

//Pages
import Router from './component/ui/Router';
import Home1 from './component/page/Home1Page';


function App(props) {
  return (
    <Router>
      <div className='app'>
        <Home1/>
      </div>
    </Router>
  );
}

export default App;
