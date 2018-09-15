import React, { Component } from 'react'
import BookData from './BookData.js'
import { PropTypes } from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  bookUpdate = (book, shelf) => {
    this.props.onShelfChange(book, shelf)
  }

  render() {
    const { books } = this.props
    const { title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book)=>(
              <BookData
                book={book}
                key={book.id}
                onUpdate = {(shelf)=>{
                  this.bookUpdate(book, shelf)
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
