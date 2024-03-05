import React, { Fragment } from 'react';
import BookForm from './BookForm';
import BookDetail from './BookDetail';
class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: this.booksArr,
      books:[]
    };
  }

  booksArr = [
    {id:1, author:"author", year:"2013", title:"titke" },
    {id:2, author:"author2", year:"2015", title:"titke2" },
  ];

  handleBookAdd = (book) => {
    this.setState({
      books: [...this.state.books, book],
    });
  };

  handleBookDelete = (e, bookId) => {
    e.preventDefault();
    console.log('bookId', bookId)
    const filteredBooks = this.state.books.filter((book) => book.id !== bookId);
    this.setState({ books: filteredBooks });
  };

  render() {
    return (
      <main id={"BookList"}>
        <BookForm handleBookAdd={this.handleBookAdd}/>
          <BookDetail
            books={this.state.books}
            handleBookDelete={this.handleBookDelete}
          />
      </main>
    );
  }
}
export default BookList;
