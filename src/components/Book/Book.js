import React,{useState,useEffect,Fragment} from 'react';
import '../css/Book.css';

const Book = ({title,author,pages}) =>{
  return(
    <Fragment>
     <h1>{title}</h1>
     <p>{author}</p>
     <p>{pages}</p>
    </Fragment>
  )
}

export default Book;
