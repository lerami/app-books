import React, { Component } from 'react';
import { Router, Link } from "react-router-dom";

class BookDetail extends Component {
    state = {
        book: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:8000/books/${id}`)
            .then(result => result.json())
            .then(result => {

                this.setState({
                    book: result,
                })
            })
    }

    render() {
        if (this.state.book === null) {
            return <div></div>
        } else {
            return (
                <div>
                    <ul>
                        <img width='150px' alt="cover" src={this.state.book.image}></img>
                        <li>{this.state.book.title}</li>
                        <li>{this.state.book.author}</li>
                        <li>{this.state.book.date}</li>
                    </ul>
                    <Link to="/books">go back home</Link>
                </div>
            )
        }
    }
}

export default BookDetail;
