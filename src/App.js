import React, { Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './AppComponents/SearchBook.js'
import ListOfBooks from './AppComponents/ListOfBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    booksArray: []
  }

  componentDidMount() {
    this.getBooksDetail()
  }
  getBooksDetail = () => {
    BooksAPI.getAll().then((books)=> {
      this.setState({
        booksArray: books
      })
    })
  }

  updateBooksDetail = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
      this.getBooksDetail()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <ListOfBooks
            books={this.state.booksArray}
            onChange={this.updateBooksDetail}
        />
      )}/>
        <Route path='/search' render={({ history })=>(
          <SearchBook
            onChange={(book, shelf) => {
              this.updateBooksDetail(book, shelf)
              history.push('/')
            }}
            Books={this.state.booksArray}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
