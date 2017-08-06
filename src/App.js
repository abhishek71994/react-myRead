import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Homepage from './homepage'
import AddSearch from './addSearch'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    
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
        console.log("Change shelf fired")
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



              <Route exact path="/search" render={()=>(
                  <AddSearch onAddShelf={this.onChangingShelf}/>
              )} />

                <Route exact path="/" render={()=>(
                    <Homepage onchangeshelf={this.onChangingShelf}
                              curRead={this.state.currentRead()}
                              read={this.state.read()}
                              wantRead={this.state.wantToRead()} />
                )} />



          </div>
        )
    }
  }

export default BooksApp
