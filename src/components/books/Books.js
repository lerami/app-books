import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Books extends Component {
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
        const rows = this.state.books.map((book) => {
            const url = `/book-detail/${book.id}`;
            return (
                <li key={book.id}>
                    <img alt="cover" width='100px' src={book.image}></img>
                    {book.title}
                    <Link to={url}>(see more)</Link>
                </li>
            )
        });

        return (
            <div>
                <p> Welcome to Booking Online !</p>
                {rows}
            </div>
        )
    }
}

export default Books;
