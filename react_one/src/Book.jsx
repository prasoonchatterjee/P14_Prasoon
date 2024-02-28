const Book = (props) => {
  const { title, author, year } = props.book;
  return (
    <li>
      Title: {title}, Author: {author} Year: {year}
    </li>
  );
};

export default Book;
