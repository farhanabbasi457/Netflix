import React from 'react'
import "./App.scss";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TvShow from './Components/Other/TvShow';
import Movies from './Components/Other/Movies';
import RecentlyAdded from './Components/Other/RecentlyAdded';
import MyList from './Components/Other/MyList';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import Play from './Components/Other/Play';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tvshow" element={<TvShow/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/recentlyadded" element={<RecentlyAdded/>}></Route>
        <Route path="/mylist" element={<MyList/>}></Route>

        <Route path="/play" element={<Play/>}></Route>
        <Route path="/mylist" element={<MyList/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App