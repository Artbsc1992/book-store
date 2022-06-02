import { useState } from "react";
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
 
    const [books] = useState([
      {
        title: 'Bones',
        author: 'Roberto Bolaños',
        id: '1'
      },
      {
        title: 'El principito',
        author: 'no se',
        id: '2'
      }
    ]);
  return(
    <>
    <div>
      {books && books.map(
        (book) => 
        <Book title={book.title} author={book.author} id={book.id}/>
      )}
    </div>
    <div>
      <Form />
    </div>
    </>
  )
}

export default Books