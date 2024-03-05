import { useState } from 'react';
import BookForm from './BookForm';
import BookDetail from './BookDetail';
import BookDataLoader from './BookDataLoader';
import SearchBook from './SearchBook';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const BookList = ({setTheme}) => {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleBookAdd = (book) => {
    setBooks([...books, book]);
  };

  const handleBookDelete = (e, bookId) => {
    e.preventDefault();
    const filteredBooks = books.filter((book) => book.id !== bookId);
    setBooks(filteredBooks);
  };

  const renderWhichBooks = () => {
    if (!!searchBooks.length) return searchBooks;
    else return books;
  };

  const theme = useContext(ThemeContext)
  console.log('theme', theme)

  const handleThemeChange = () => {
    if(theme === "light") setTheme("dark")
    else setTheme("light")
  }
  return (
    <main id={'BookList'} className={theme}>
      <div id={"wrapper"}>
      <button id={'themeBtn'} onClick={handleThemeChange}>Change Theme</button>
      <BookDataLoader setBooks={setBooks} setIsLoading={setIsLoading} />
      <BookForm handleBookAdd={handleBookAdd} />
      <SearchBook books={books} setSearchBooks={setSearchBooks} />
      <BookDetail
        books={renderWhichBooks()}
        handleBookDelete={handleBookDelete}
        isLoading={isLoading}
      />
      </div>
    </main>
  );
};

export default BookList;
