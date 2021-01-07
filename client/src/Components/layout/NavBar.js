import React,{ Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'


const NavBar=({auth:{isAuthenticated, loading}, logout}) =>{
  const authLinks=(
    <ul>
      <li><a onClick={logout} href='/'>Log Out</a></li>
    </ul>

  );
  const guestLinks=(
    <Navbar bg='light' expand='lg'>
     <Nav className='mr-auto'>
       <Link  to="/register" >Sign Up</Link>
        <Link  to="/login" >Sign In</Link>
        </Nav>
    </Navbar>
  )

  
  return (
    <Navbar bg='light' expand='lg'>
    
      <Nav className='mr-auto'>
        <h1>
        <Link to ='/'>E-learn</Link>
        </h1>
        {!loading && (<Fragment>{isAuthenticated ? authLinks: guestLinks}</Fragment>)}
      </Nav>
    </Navbar>
  );
}
NavBar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
const mapStateToProps =state =>({
  auth:state.auth
})
export default connect(mapStateToProps,{logout})(NavBar);