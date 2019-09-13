import React, { Component } from 'react';

class Books extends Component {
    render() {
        const BookDetail = () => {
            
        }
    
        const rows = this.props.books.map((book) => {
            return (
                <li key={book.id}>{book.title}</li> 
            )
        });

        return <ul>{rows}</ul>
    }
}

export default Books;
