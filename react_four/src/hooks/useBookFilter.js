import { useMemo } from "react";

const useBookFilter = (books, keyword) => {

  const filterBooks = () => {
    return books.filter((book)=>{
      if(book.author.includes(keyword)) return true;
      else if(book.title.includes(keyword)) return true;
      else if(book.year.includes(keyword)) return true;
    })
  }
  
  const memoFilterBooks = useMemo(filterBooks,[keyword,books])

  return memoFilterBooks;
}

export default useBookFilter;