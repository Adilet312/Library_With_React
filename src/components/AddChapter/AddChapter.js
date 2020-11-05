import React,{useState,useEffect,Fragment} from 'react';
import uuid from 'react-uuid';
import '../css/AddChapter.css';
const AddChapter = ({books,bookId,addChapter}) =>{
  const [chapterTitle, setChapterTitle] = useState('');
  const [pages, setPages] = useState(0);
  const onSubmit = (event) =>{
    event.preventDefault();
    const chapter = {
      chapterId:uuid(),
      chapterTitle:chapterTitle,
      pages: pages
    }
    books.map( book => {
      if(book.bookId ===bookId){
        if(book.hasOwnProperty('chapters')){
          book.chapters.push(chapter);
        }
        else{
          let arr = [];
          arr.push(chapter);
          book.chapters = arr;
        }
      }
      return book;
    })
    addChapter(books)
  }

  return(
    <Fragment>
      <form onSubmit = {(e) => onSubmit(e)} className = 'form-add-chapter'>
        <input className = 'submit-title' type = 'text' placeholder = 'Chapter title' value = {chapterTitle} onChange = {(e) => setChapterTitle(e.target.value)} />
        <input className = 'submit-pages' type = 'number' placeholder = 'Pages' value = {pages} onChange = {(e) => setPages(e.target.value)}/>
        <input className = 'submit-chapter' type = 'submit' value = 'Submit' name = 'submit'/>
      </form>
    </Fragment>
  )
}
export default AddChapter;
