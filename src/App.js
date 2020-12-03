import React from 'react'
import Homepage from './Views/Homepage'
import Navbar from './components/Navbar'
import ViewMoreDetails from './Views/ViewMoreDetails'
import Candidates from "./components/Candidates"
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom"
function App() {
  return (
 
  <Router>
  <Navbar/>

  <Switch>
      <Route exact path='/candidates' component={Candidates}/>  
      <Route exact path='/jobs' component={Homepage}/>
      <Route exact path ='/jobs/:jobID' component={ViewMoreDetails} />
      <Route  path='/'>
            <Redirect to='/jobs'/>
      </Route>
  </Switch>
  <Footer/>
  </Router>
  );
}

export default App;
