import React, { Component } from 'react';
import Book from './Book';

export class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      year: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id:`${this.state.author}-${this.state.title}-${this.state.year}`,
      author: this.state.author,
      title: this.state.title,
      year: this.state.year,
      description:"common description",
      genre:"common genre"
    };
    this.props.handleBookAdd(newBook);
    this.setState({
      author: '',
      title: '',
      year: '',
    });
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit} id={"BookForm"}>
          <label htmlFor='title'>
            Title:
            <input
              id='title'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </label>
          <label htmlFor='author'>
            Author:
            <input
              id='author'
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
            />
          </label>
          <label htmlFor='year'>
            Year:
            <input
              id='year'
              value={this.state.year}
              onChange={(e) => this.setState({ year: e.target.value })}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
    );
  }
}

export default BookForm;
