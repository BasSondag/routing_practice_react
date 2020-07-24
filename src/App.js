import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CourseCatelog from './containers/CourseCatelog/CourseCatelog'

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <div className="App">
          <CourseCatelog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
