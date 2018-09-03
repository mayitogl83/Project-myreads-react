import React, { Component } from 'react'
import BookData from './BookData.js'

class ListOfBooks extends Component {
  render() {
    const { onChangeState } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <BookData/>
                </ol>
              </div>
            </div>

          </div>
        </div>
        <div className="open-search">
          <a onClick={() => onChangeState()}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListOfBooks
