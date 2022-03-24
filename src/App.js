import './App.css'
import Home from './Pages/Home'; 
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/SignUp' ;
import SignIn from './Pages/SignIn' ;
import Cart from './Pages/Cart' ;
import Add from './Pages/Add' ;

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
import './App.css'
function App() {
   return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/"><Home/></Route>
         <Route path="/Product/:id"><Product/></Route>
         <Route path="/ProductList"><ProductList/></Route>
         <Route path="/Register"><Register/></Route>
         <Route path="/SignIn"><SignIn/></Route>
         <Route path="/Cart"><Cart/></Route>
         <Route path="/Add"><Add /></Route>
       </Switch>
     </Router>
    
    </div>
  );
}


export default App;
