import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf.js'

class ListOfBooks extends Component {
  render() {
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books.filter((book)=>(
                book.shelf === "read"
              ))}
              title = "Read"
              onShelfChange={this.props.onChange}
            />
            <BookShelf
              books={books.filter((book)=>(
                book.shelf === "currentlyReading"
              ))}
              title = "Currently Reading"
              onShelfChange={this.props.onChange}
            />
            <BookShelf
              books={books.filter((book)=>(
                book.shelf === "wantToRead"
              ))}
              title = "Want to Read"
              onShelfChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
          Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListOfBooks
