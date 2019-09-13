import React, { Component } from 'react';

class Books extends Component {
    render() {
        const BookDetail = () => {
            
        }
    
        const rows = this.props.books.map((book) => {
            return (
            <li key={book.id}>
                <img width='100px' src={book.image}></img>
                {book.title}
                <a>(see more)</a>
            </li> 
            )
        });

        return <ul>{rows}</ul>
    }
}

export default Books;
