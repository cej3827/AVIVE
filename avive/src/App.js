import React from "react";
import Router from './component/ui/Router';
import Home1 from './component/page/Home1Page';

function App() {
  return (
    <Router>
      <div className='app'>
        <Home1/>
      </div>
    </Router>
  );
}

export default App;