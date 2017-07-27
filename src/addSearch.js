/**
 * Created by harekrishna on 22/7/17.
 */
import React,{ Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class addSearch extends Component{
    state={
        query:'',
        result:[]
    }
    updateQuery=(query) => {
        this.setState({query:query.trim()})

            BooksAPI.search(this.state.query).then((response) => {
                    if (response!==undefined && response.length > 0 ) {
                        this.setState({result: response})
                    }
                }
            )
        if(this.state.query===''){
            this.setState({result:[]})
        }


        }
    render(){
        return(
            <div>

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text"
                                   value={this.state.query}
                                   onChange={(e)=> this.updateQuery(e.target.value)}
                                   placeholder="Search by title or author"/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        <ol className="books-grid">
                            {

                                    this.state.result.map((searchRet)=> (
                                        <li key={searchRet.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${searchRet.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select defaultValue={searchRet.shelf} onChange={(e)=> this.props.onAddShelf(searchRet.id,e.target.value)}>
                                                            <option value="none" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{searchRet.title}</div>
                                                <div className="book-authors">{searchRet.authors}</div>
                                            </div>
                                        </li>
                                    ))



                                }

                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default addSearch