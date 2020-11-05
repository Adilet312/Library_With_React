import React, {useState,useEffect,Fragment} from 'react';
import '../css/Book.css';

const Chapter = ({title,pages}) =>{
return(
    <Fragment>
       <h1>{title}</h1>
       <p>{pages}</p>
    </Fragment>
  )
}
export default Chapter;
