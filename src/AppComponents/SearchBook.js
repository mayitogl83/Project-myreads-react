import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import BookData from './BookData'

class SearchBook extends Component {

  state = {
    booksArray: [],
    query: ''
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    Books: PropTypes.array.isRequired
  }

  manageChange = (event) => {
    var value = event.target.value
    this.setState(()=> {
      return {
        query: value
      }
    })
    this.searchingBooks(value)
  }

  getShelfStatus = (books) => {
    let allBooks = this.props.Books
    for (let book of books) {
      book.shelf = "none"
    }

    for (let book of books) {
      for (let b of allBooks) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  }

  searchingBooks = (v) => {
    if (v.length !== 0) {
      BooksAPI.search(v).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) =>(book.imageLinks))
          books = this.getShelfStatus(books)
          this.setState(()=> {
            return {
              booksArray: books
            }
          })
        }
      })
  } else {
    this.setState({ booksArray: [], query: '' })
  }
}

  addingBook = (book, shelf) => {
    this.props.onChange(book, shelf)
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'
            className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.manageChange}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 && this.state.booksArray.map((book)=> (
              <BookData
                book={book}
                key={book.id}
                onUpdate={(shelf)=> {
                  this.addingBook(book, shelf)
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBook
