import React, { Component } from 'react'
import BookData from './BookData.js'

class BookShelf extends Component {
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
            { books.map((book, index)=>(
              <BookData
                book={book}
                key={index}
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
