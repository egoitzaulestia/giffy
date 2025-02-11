import React from "react";
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
// import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from "wouter";

// function App() {
//   return (
//     <div className="App">
//       <section className="App-content">
//         <h1>APP</h1>
//         <Link to="/gif/colomnbia">Gifs de Colombia</Link>
//         <Link to="/gif/ecuador">Gifs de Ecuador</Link>
//         <Link to="/gif/peru">Gifs de Peru</Link>
//         <Route 
//           component={ListOfGifs}
//           path="/gif/:keyword"
//         />
//       </section>
//     </div>
//   )
// }

function App() {
  <div className="App">
    <section className="App-content">
      <Link to="/">
        <img className="App-logo" alt="Giffy logo" src="/logo.png" />
      </Link>
      <Route 
        component={Home} 
        path="/" 
      />
      <Route 
        component={SearchResults} 
        path="/search/:keyword" 
      />
      <Route 
      component={Detail} 
      path="/gif/:id" 
      />
    </section>
  </div>
}

export default App
