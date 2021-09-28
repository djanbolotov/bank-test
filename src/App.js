import './App.css';
import { LoginProvider } from './components/contexts/loginContext';
import Login from './components/Login/Login';
import SignUp from './components/Login/signup'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Transaction from './components/addTransaction/transaction';
import ShowTransaction from './components/deleteTransaction/ShowTransaction'
import PrivateProvider from './components/header/PrivateProvider';
import React, {useEffect} from 'react'
import { getTransaction } from './redux/action';
import {useDispatch} from 'react-redux';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTransaction());
  },[dispatch])
  return (
      <div className="App">
        <BrowserRouter>
          <LoginProvider>
            <Switch>
              <PrivateProvider exact path="/" component={Transaction}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={Login}/>
              <PrivateProvider path="/showtransactions" component={ShowTransaction}/>
              <Route/>
            </Switch>
          </LoginProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
