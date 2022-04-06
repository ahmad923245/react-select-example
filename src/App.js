import logo from './logo.svg';
import './App.css';
import TopBar from './components/Header/TopBar/TopBar';
import Login from './components/Login/Login';
import Home from './Pages/Home'
import About from './Pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import SelectMenu from './Pages/SelectMenu/SelectMenu';


// https://v5.reactrouter.com/web/example/
function App() {
  return (

    <SelectMenu />
    // <Router>
    //   <div>


    //     <Header name="Ahmad" />
    //     {/*
    //   A <Switch> looks through all its children <Route>
    //   elements and renders the first one whose path
    //   matches the current URL. Use a <Switch> any time
    //   you have multiple routes, but you want only one
    //   of them to render at a time
    // */}
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       {/* <Route path="/profile">
    //       <Dashboard />
    //     </Route> */}
    //       <Route path="*">
    //         <NoMatch />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
