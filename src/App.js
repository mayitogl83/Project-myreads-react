//1 Add component to import
import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from './AppComponents/SearchBook.js'
import ListOfBooks from './AppComponents/ListOfBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
          />
        )}
      </div>
    )
  }
}

export default BooksApp
