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
    onChange: PropTypes.func.isRequired
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

  searchingBooks = (v) => {
    if (v.length !== 0) {
      BooksAPI.search(v, 10).then((books)=> {
        if (books.length > 0) {
          this.setState(()=> {
            return {
              booksArray:books.filter((book)=>(book.imageLinks))
            }
          })
        }
      })
  }
  else
  {
    this.setState({
      booksArray: [],

      query: ''
    })
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
