import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class BookData extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  bookShelfChange = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {

    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${ book.imageLinks.thumbnail }")`
            }}>
          </div>
            <div className="book-shelf-changer">
              <select onChange={this.bookShelfChange} value = {book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default BookData
