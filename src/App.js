//1 Add component to import
import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './AppComponents/SearchBook.js'
import ListOfBooks from './AppComponents/ListOfBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    booksArray: [],

    showSearchPage: false
  }

  componentDidMount() {
    this.getBooksDetail
  }
  getBooksDetail = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({
        booksArray: books
      })
    })
  }

  changePageStateTrue = () => {
    this.setState(state => ({
      showSearchPage: true
    }))
  }
  changePageStateFalse = () => {
    this.setState(state => ({
      showSearchPage: false
    }))
  }

  updateBooksDetail = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
      this.fetch.getBooksDetail()
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
            onChangeStateBack={this.changePageStateFalse}
          />
        ) : (
          <ListOfBooks
            onChangeState={this.changePageStateTrue}
            books={this.state.booksArray}
            onChange={this.updateBooksDetail}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
