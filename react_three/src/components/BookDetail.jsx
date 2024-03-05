import React from 'react';
import Book from './Book';

function BookDetail(props) {
  const { books, handleBookDelete } = props;

  return (
    <div id={"BookDetail"}>
      {!!books.length ? (
        <>
          {books.map((book) => (
          <Book book={book} key={book.id} handleBookDelete={handleBookDelete} />
        ))}
        </>
      ) : (
        <p>Book list is empty</p>
      )}
    </div>
  )
}

export default BookDetail;
