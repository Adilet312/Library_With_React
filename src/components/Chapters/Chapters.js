import React, {useState,useEffect,Fragment} from 'react';
import Chapter from '../Chapter/Chapter.js';
import '../css/Library.css';

const Chapters = ({chapters}) =>{
return(
      <ul>
        {
          chapters.map( chapter => <li><Chapter title = {chapter.chapterTitle}  pages = {chapter.pages}/></li>)
        }
      </ul>
  )
}
export default Chapters;
