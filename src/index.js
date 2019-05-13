// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Skill from './Skill';
import Nav from './nav';
import img from './img/logo.png';
import './index.scss';
import About from './about';
import Message from './message';
import Interest from './interest';
import Footer from './footer';


ReactDOM.render(
  <Router>
    <div>
        <div className="topMenu">
            <img src={img} width="280" />
            <Nav />
        </div>
        
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Skill' component={Skill}/> 
          <Route path='/Message' component={Message}/>
          <Route path='/Interest' component={Interest}/>
          <Route path='/About' component={About}/>
      </Switch>
      
    </div>
    <Footer/>
  </Router>,
  document.getElementById('root')
);