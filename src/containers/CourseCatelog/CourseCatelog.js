import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './CourseCatelog.css';
import  Courses from './Courses/Courses';
import Users from './Users/Users';
import Error from '../../components/Error/Error'

class CourseCatelog extends Component {
  render() {
    return (
      <div className='CourseCatelog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/courses' exact>Courses</NavLink></li>
              <li><NavLink to='/users'>Users</NavLink></li>
            </ul>
          </nav>
        </header>

          <Switch>

            <Route path='/users' exact component={Users} />
            <Route path='/courses' component={Courses} />
            <Redirect from='/all-courses' to='/courses' />
            <Route component={Error} />
          </Switch>
      </div>
    );
  }
};

export default CourseCatelog
