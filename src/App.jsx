import React, { useEffect } from 'react';
import Layout from './container/Layout';
import Projects from './components/projects/Projects';
import ThemePicker from './components/theme/ThemePicker';
import {getUserInfo} from './redux/actions/actions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  const theme = useSelector(state=> state.detail.theme)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
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