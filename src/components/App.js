import React,{useState,useEffect,Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Library from './Library/Library.js';
import Search from './Search/Search.js';
import Navigation from './Navigation/Navigation.js';
import DetailBook from './DetailBook/DetailBook.js';
import AddChapter from './AddChapter/AddChapter.js';
import EditBook from './EditBook/EditBook.js';
import Chapters from './Chapters/Chapters.js';
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
  const editBook = (newBook,oldBook) =>{
    let tempBooks = without(books,oldBook);
    tempBooks.push(newBook);
    setBooks(tempBooks);
  }
  const addChapter = (books) => setBooks(books);
    return(
      <Fragment>
       <Router>
        <Switch>
             <div className = 'main'>
                <header className = 'header'>
                  <Navigation/>
                </header>
                  <div className = 'left'></div>
                  <div className = 'center'>
                  <Route path = '/addChapter/:bookId' render = {(props) => <AddChapter addChapter = {addChapter} books = {books} bookId = {props.location.pathname.replace('/addChapter/','')}/>}/>
                  <Route exact path = '/' render = { () => <Search books = {books} deleteBook = {deleteBook}/>}/>
                  <Route exact = '/chapterList/:bookId' render = {(props) =>{
                     let id = props.location.pathname.replace('/chapterList/','');
                     let chapters;
                     books.forEach( book =>{
                       if(book.bookId===id){
                         book.hasOwnProperty('chapters') ? chapters = book.chapters : chapters = ''
                       }
                       return book;
                     });
                     return (

                       chapters && <Chapters chapters = {chapters}/>
                     )
                    }}/>
                  <Route path='/book/:bookId' render = {(props) =>{
                     let id = props.location.pathname.replace('/book/','');
                     let chosenBook;
                     books.forEach( book =>{
                       if(book.bookId===id){
                         chosenBook = book
                       }
                       return book;
                     });
                     return (

                       <DetailBook title = {chosenBook.title} author = {chosenBook.author} pages = {chosenBook.pages}/>
                     )
                    }}/>
                    <Route path = '/editBook/:bookId' render = {(props) =>{
                      let id = props.location.pathname.replace('/editBook/','');
                      let chosenBook;
                      books.forEach( book =>{
                        if(book.bookId===id){
                          chosenBook = book
                        }
                        return book;
                      });
                      return (

                        <EditBook editBook = {editBook} bookId = {id} editable_title={chosenBook.title} editable_author = {chosenBook.author} editable_pages = {chosenBook.pages}/>
                      )
                    }}/>
                  </div>
                  <div className = 'right'></div>
                <footer className = 'footer'></footer>
             </div>
        </Switch>
       </Router>
      </Fragment>
    )

  }

export default App;
/**/
