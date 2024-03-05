import React from 'react';
import Book from './Book';

function BookDetail(props) {
  const { books, handleBookDelete, isLoading } = props;

  if (isLoading) {
    return (
      <div id={'BookDetail'}>
        <p>Loading....</p>
      </div>
    );
  } else if (!isLoading && !books.length) {
    return (
      <div id={'BookDetail'}>
        <p>Book list is empty</p>
      </div>
    );
  } else {
    return (
      <div id={'BookDetail'}>
        {books.map((book) => (
          <Book book={book} key={book.id} handleBookDelete={handleBookDelete} />
        ))}
      </div>
    );
  }
}

export default BookDetail;
