import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light');

  
  return (
    <ThemeContext.Provider value={theme}>
      <BookList setTheme={setTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
