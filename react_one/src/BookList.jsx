import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];

  return (
    <ul>
      {books.map((book, index) => (
        <Book book={book} key={index}/>
      ))}
    </ul>
  );
};

export default BookList;
