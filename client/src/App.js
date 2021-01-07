import React, {Fragment, useEffect} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router , Route , Switch}from 'react-router-dom'
import './App.css';
import store from './store'
import Navbar from './Components/layout/NavBar'
import About from './Components/layout/About'
import ProfList from './Components/layout/ProfList'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Alert from './Components/layout/Alert'
import "./App.css";
import {loadUser} from './actions/auth'
import setAuthToken from './utiles/setAuthToken'


if(localStorage.token){
  setAuthToken(localStorage.token)
      }
const App= ()=> {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
return (
  <Provider store={store}>
<Router>
    <Fragment className="App">
     <Navbar/>
     <Route exact path='/' component={About}/>
     <section className='Container'>
       <Alert/>
       <Switch>
         <Route exact path='/register' component={Register} />
         <Route exact path='/login' component={Login} />
       </Switch> 
     </section>
    </Fragment>
    </Router>
    </Provider>
  );}


export default App;
