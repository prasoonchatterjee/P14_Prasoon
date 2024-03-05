import React from 'react';

class Book extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  handleToggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  renderShowDetails = (book) => {
    if (!this.state.showDetails) return null;
    else {
      return (
        <p>
          Description:{book.description} and Genre: {book.genre}
        </p>
      );
    }
  };

  render() {
    const { handleBookDelete, book } = this.props;
    const { title, author, year, id } = book;
    return (
      <article className={'Book'}>
        <div>
          <li>
            Title: {title}, Author: {author} Year: {year}
          </li>
          {this.renderShowDetails(book)}
        </div>
        <div>
          <button onClick={(e) => handleBookDelete(e, id)}>Delete</button>
          <button onClick={this.handleToggleDetails}>Toggle Details</button>
        </div>
      </article>
    );
  }
}
export default Book;
