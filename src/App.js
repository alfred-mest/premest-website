import React from 'react'
import Homepage from './Views/Homepage'
import Navbar from './components/Navbar'
import ViewMoreDetails from './Views/ViewMoreDetails'
import Candidates from "./components/Candidates"
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
function App() {
  return (
  //   <div >
  //     <Navbar/>
  //    <Homepage />
  //     <Footer/>
  // </div>
  <Router>
  <Navbar/>

  <Switch>
  <Route exact path='/candidates' component={Candidates}/>
     <Route exact path='/' component={Homepage}/>
     <Route exact path ='/:jobID' component={ViewMoreDetails} />
  </Switch>
  <Footer/>
  </Router>
  );
}

export default App;
