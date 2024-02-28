import React from "react";

class Book extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, author, year} = this.props.book;
    return (
      <li>
      Title: {title}, Author: {author} Year: {year}
    </li>
    )
  }
}
export default Book;
