import React,{useState,useEffect,Fragment} from 'react';
import Library from '../Library/Library.js';
import '../css/App.css';
const Search = ({books,deleteBook}) =>{
  const [input, setInput] = useState('');
  const [searchBy, setSearchBy] = useState('title');
  let searchBooks = books.filter( book =>  book[searchBy].toLowerCase().includes(input.toLowerCase()));
  return(
    <Fragment>
      <input type = 'search' className = 'search' placeholder = 'Search' value = {input} onChange = {(e) => setInput(e.target.value)}/>
      <select className = 'select' onChange = {(e) => setSearchBy(e.target.value)}>
        <option value = 'title'>title</option>
        <option value = 'author'>author</option>
      </select>
      <Library books = {searchBooks} deleteBook = {deleteBook}/>
    </Fragment>
  )
}
export default Search;
