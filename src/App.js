import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Homepage from './homepage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
      books:[],
      currentRead : () => {
          return this.state.books.filter((book) => book.shelf === 'currentlyReading');
      },
      read : () => {
          return this.state.books.filter((book) => book.shelf === 'read');
      },
      wantToRead : () => {
          return this.state.books.filter((book) => book.shelf === 'wantToRead');
      }

  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  onChangingShelf = (book,shelf) => {

        BooksAPI.update(book,shelf).then((response)=>{
            this.setState(({books}) => ({
                books: books.map(b => {
                    if (b.id === book) b.shelf = shelf
                    return b
                })
            }))
        })

    }




  render() {
    return (

      <div className="app">

        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div>
              <Homepage onchangeshelf={this.onChangingShelf} curRead={this.state.currentRead()} read={this.state.read()} wantRead={this.state.wantToRead()} />
              <div className="open-search">
                <a href="#search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>

        )}
      </div>
    )
  }
}

export default BooksApp
