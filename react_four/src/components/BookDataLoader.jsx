import { useState } from "react";
import { useEffect } from "react";

const BookDataLoader = (props) => {
  const {setBooks, setIsLoading} = props;

  const booksArr = [
    {id:1, author:"author-one", year:"2013", title:"title-one" },
    {id:2, author:"author-two", year:"2015", title:"title-two" },
  ];


  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      setBooks(booksArr)
      setIsLoading(false);
    },1000)
    
  },[])

  return null;
}

export default BookDataLoader;