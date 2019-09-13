import React, { Component } from 'react';
import Books from './books/Books';
import { tsPropertySignature } from '@babel/types';

class App extends Component {
  state = {
    books: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'http://localhost:8000/books';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          books: result,
        })
      })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Booking Online !
          </p>
          <Books books={books} />
        </header>
      </div>
    );
  }
}

export default App;
