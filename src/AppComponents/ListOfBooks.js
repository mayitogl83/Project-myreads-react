import React, { Component } from 'react'
import BookShelf from './BookShelf.js'

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
            <BookShelf/>
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
