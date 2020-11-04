import React,{useState,useEffect,Fragment} from 'react';
import Book from '../Book/Book.js';
import '../css/Library.css';
import {GoTrashcan} from 'react-icons/go';
import {FaLink} from 'react-icons/fa';
const Library = ({books,deleteBook}) =>{

  return(
    <ul>
      {
        books.map( book => <li><Book title = {book.title} author = {book.author} pages = {book.pages}/>
          <span className = 'goTrashcan'><GoTrashcan className = 'goTrashcanIcon' onClick = { () => deleteBook(book)}/></span>
          <span className = 'faLink'><FaLink className = 'faLinkIcon' onClick = { () => deleteBook(book)}/></span>
          </li>)
      }
    </ul>
  )
}
export default Library;
