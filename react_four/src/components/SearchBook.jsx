import { useState } from 'react';
import useBookFilter from "../hooks/useBookFilter";
import { useEffect } from 'react';

const SearchBook = ({books,setSearchBooks}) => {
  const [keyword, setKeyowrd] = useState('');
  const output = useBookFilter(books,keyword);

  useEffect(()=>{

    setSearchBooks(output)
  },[output])

  return (
    <div id={"SearchBook"}>
      <input
        placeholder={'search a book'}
        value={keyword}
        onChange={(e) => setKeyowrd(e.target.value)}
      />
    </div>
  );
};

export default SearchBook;
