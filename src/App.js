import React from 'react';
import Home from './pages/Home'
import GlobalStyles from './Components/GlobalStyle'
import {Route} from 'react-router-dom'
import Nav from './Components/Nav'

function App() {
 
  return (
   <div>
     <GlobalStyles />
     <Nav />
     <Route path={["/game/:id","/"]}>
      <Home />
      </Route>
   </div>
  
  );
}

export default App;
