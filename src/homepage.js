/**
 * Created by harekrishna on 22/7/17.
 */
import React, { Component } from 'react'
import './App.css'

class homepage extends Component{
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Mera baap ka maal</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <ol className="books-grid">
                                {this.props.curRead.map((curRead) => (
                                    <li key={curRead.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${curRead.imageLinks.smallThumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select onChange={(e)=> this.props.onchangeshelf(curRead.id,e.target.value)}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{curRead.title}</div>
                                            <div className="book-authors">{curRead.authors}</div>
                                        </div>
                                    </li>
                                ))}

                            </ol>
                        </div>
                    </div>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Reading</h2>
                            <ol className="books-grid">
                                {this.props.read.map((read) => (
                                    <li key={read.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${read.imageLinks.smallThumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{read.title}</div>
                                            <div className="book-authors">{read.authors}</div>
                                        </div>
                                    </li>
                                ))}

                            </ol>
                        </div>
                    </div>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <ol className="books-grid">
                                {this.props.wantRead.map((wantRead) => (
                                    <li key={wantRead.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${wantRead.imageLinks.smallThumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{wantRead.title}</div>
                                            <div className="book-authors">{wantRead.authors}</div>
                                        </div>
                                    </li>
                                ))}

                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default homepage