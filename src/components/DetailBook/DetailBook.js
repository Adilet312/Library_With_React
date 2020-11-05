import React, {useState,useEffect,Fragment} from 'react';
import '../css/DetailBook.css';

const DetailBook = ({title,author,pages}) =>{
return(
    <Fragment>
    <div className = 'detail-book'>
       <h1>{title}</h1>
       <p>{author}</p>
       <p>{pages}</p>
    </div>
    </Fragment>
  )
}
export default DetailBook;
