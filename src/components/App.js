import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Books from './books/Books';
import BookDetail from './book-detail/BookDetail';

class App extends Component {
  render() {
    console.log('render!!!!');
    return (
      <Router>
        <Switch>
          <Route path='/book-detail/:id' component={BookDetail} />
          <Route path='/' component={Books} />
        </Switch>
      </Router>
    );
  }
}

export default App;
