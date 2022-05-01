import React, { useState, useEffect } from 'react';
import Layout from './container/Layout';
import Projects from './components/projects/Projects';
import ThemePicker from './components/theme/ThemePicker';
import getuserInfo from './redux/actions/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ErrorBoundary from './ErrorBoundary';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const theme = useSelector(state=> state.detail.theme)
  const disptach = useDispatch();
  const getInfo = bindActionCreators(getuserInfo, disptach);

  useEffect(() => {
    getInfo();
  }, [])
  return (
    <div className={`themes ${theme}`}>
      <ThemePicker/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout />
          </Route>
          <Route path='/portfolio'>
            <Redirect to="/"/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>


  )
}

export default App;