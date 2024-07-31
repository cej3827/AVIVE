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


// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/search', { query });
//       setResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Search App</h1>
//         <form onSubmit={handleSearch}>
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search..."
//           />
//           <button type="submit">Search</button>
//         </form>
//         <div>
//           {results.map((result, index) => (
//             <div key={index}>
//               <h2>{result._source.title}</h2>
//               <p>{result._source.content}</p>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
