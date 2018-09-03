import React, { Component } from 'react'
import BookData from './BookData.js'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookData/>
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
