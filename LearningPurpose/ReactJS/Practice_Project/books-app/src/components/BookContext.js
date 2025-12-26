import { createContext, useEffect, useState } from "react";
import { fakeBookFetch } from "./fakeBookFetch";

// Step 1 - create context
export const BookContext = createContext();

// Step 2 - Create Provider
export const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [allFavorites, setAllFavorites] = useState([]);
  const [allRead, setAllRead] = useState([]);
  const [userInfo, setUserInfo] = useState([])
  const handleFavorites = (book) =>{
    setAllFavorites((prevFavorites) => {
        const isFavorite = prevFavorites.some((fav) => fav.id === book.id)
        if(isFavorite){
            return prevFavorites;
        }
        return [...prevFavorites, book];
    })
  }
  const handleRead = (book) =>{
     setAllRead((prevRead) =>{
        const isRead = prevRead.some((read) => read.id === book.id);
        if(isRead){
          return prevRead
        }
        return [...prevRead, book]
     })
  }
  

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fakeBookFetch("https://example.com/api/books");
        if (response.status === 200) {
          setAllBooks(response.data.books);
          setUserInfo(response.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookDetails();
  }, []);

  return (
    <BookContext.Provider value={{ allBooks, allFavorites, handleFavorites , allRead, handleRead, userInfo }}>
      {children}
    </BookContext.Provider>
  );
};
