import React,{useState,useEffect,Fragment} from 'react';
import { Link } from "react-router-dom";
import Book from '../Book/Book.js';
import '../css/Library.css';
import {GoTrashcan,GoListUnordered} from 'react-icons/go';
import { GrFormAdd } from 'react-icons/gr';
import {FaLink,FaRegEdit} from 'react-icons/fa';
const Library = ({books,deleteBook}) =>{

  return(
    <ul>
      {
        books.map( book => <li><Book title = {book.title} author = {book.author} pages = {book.pages}/>
          <span className = 'goTrashcan'><GoTrashcan className = 'goTrashcanIcon' onClick = { () => deleteBook(book)}/></span>
          <span className = 'faLink'><Link to = {`/book/${book.bookId}`}><FaLink className = 'faLinkIcon'/></Link></span>
          <span className = 'grFormAdd'><Link to = {`/addChapter/${book.bookId}`}><GrFormAdd className='addIcon'/></Link></span>
          <span className = 'goList'><Link to = {`/chapterList/${book.bookId}`}><GoListUnordered className = 'goListIcon'/></Link></span>
          <span className = 'goEdit'><Link to = {`/editBook/${book.bookId}`}><FaRegEdit className = 'goEditIcon'/></Link></span>
          </li>)
      }
    </ul>
  )
}
export default Library;
