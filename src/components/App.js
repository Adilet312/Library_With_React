import React,{useState,useEffect,Fragment} from 'react';
import Library from './Library/Library.js';
import Search from './Search/Search.js';
import './css/App.css';
import uuid from 'react-uuid';
import { without } from 'lodash';


const App = () =>{
  const [books,setBooks] = useState([]);
  /*Fetch data with useEffect hook*/
  useEffect( () =>{
    fetch('./bookList.json')
    .then( data => data.json())
    .then( data => {
      data.map( book => book.bookId = uuid());
      setBooks(data);
    });
  },[]);
  const deleteBook = (book) =>{
    let tempBooks = without(books,book);
    setBooks(tempBooks);
  }
    return(
      <Fragment>
       <div className = 'main'>
          <header className = 'header'>
          </header>
            <div className = 'left'></div>
            <div className = 'center'>
              <Search books = {books} deleteBook = {deleteBook}/>
            </div>
            <div className = 'right'></div>
          <footer className = 'footer'></footer>
       </div>
      </Fragment>
    )

  }

export default App;
