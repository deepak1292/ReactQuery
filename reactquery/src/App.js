import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/home';
import TraditionalComponent from './components/normal-fetching';
import Reactquery from './components/react-query';

function App() {
  return (
   <Router>
     <div>
       <nav>
         <ul style={{listStyle:'none'}}>
           <li><Link to ='/home'>Home</Link></li> &emsp;&emsp;
           <li><Link to ='/traditional'>Traditional Component Loading</Link></li> &emsp;&emsp;
           <li><Link to ='/reactquery'>React Query Loading</Link></li> &emsp;&emsp;
           </ul>
         </nav>
         <div className="container">
         <switch>
          <Route path='/home' exact component={Home}/>
          <Route path='/reactquery' exact component={Reactquery}/>
          <Route path='/traditional' component={TraditionalComponent}/>
         </switch>
         </div>
     </div>
    </Router>
  );
}

export default App;
