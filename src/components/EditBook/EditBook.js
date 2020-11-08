import React, {useState,useEffect,Fragment} from 'react';
import '../css/EditBook.css';

const EditBook = ({bookId,editable_title,editable_author,editable_pages,editBook}) =>{
  const [book, setBook] = useState({
    bookId: `${bookId}`,
    title: `${editable_title}`,
    author: `${editable_author}`,
    pages: `${editable_pages}`
  })
  const deletedBook = {
    bookId: `${bookId}`,
    title: `${editable_title}`,
    author: `${editable_author}`,
    pages: `${editable_pages}`
  }
const {title,author,pages} = book;
const edit_Book = (e) => {
  e.preventDefault();
  editBook(book,deletedBook);
}
return(
    <Fragment>
      <div className = 'edit-book' >
        <form className = 'form-add-chapter' onSubmit = {(e) =>  edit_Book(e)}>
          <input className = 'submit-title'  type = 'text' placeholder = 'Title' value = {title} onChange = {(e) => setBook({...book,title:e.target.value})}/>
          <input className = 'submit-pages' type = 'text' placeholder = 'Author' value = {author} onChange = {(e) => setBook({...book,author:e.target.value})} />
          <input className = 'submit-pages' type = 'number' placeholder = 'Pages' value = {pages} onChange = {(e) => setBook({...book,pages:e.target.value})}/>
          <input className = 'submit-chapter' type = 'submit' value = 'Save' name = 'submit'/>
        </form>
      </div>
    </Fragment>
  )
}
export default EditBook;
