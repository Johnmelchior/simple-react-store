import React from 'react';
import './App.css';
import {connect, useDispatch, useSelector} from 'react-redux'
import LoginComponent from './components/Login'

const App = () => {
  const userReducer = useSelector(state => state.userReducer)

  return (
    <div className="App">
        {
          !userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.userName}</h1>
        }

        <LoginComponent/>

    </div>
  )
}

export default App

