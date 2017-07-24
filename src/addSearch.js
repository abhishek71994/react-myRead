/**
 * Created by harekrishna on 22/7/17.
 */
import React,{ Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class addSearch extends Component{
    render(){
        return(
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default addSearch