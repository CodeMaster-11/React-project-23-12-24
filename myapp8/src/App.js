// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './about';
import Contact from './contact';
import Error from './error';
import Menu from './menu';
import User from './user';

function App() {
  return (
      <>
      <Menu/>
      <Routes>
        <Route path="/about" Component={About}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/user/:fname" element={<User/>}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
      </>
  );
}

export default App;
