import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage'
import ErrorPage from '../ErrorPage/ErrorPage';
import { useState, useEffect } from 'react';
import { getAllArticles } from '../../apicalls';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then(data => {
        setArticles(data.articles);
        console.log('articles:', data.articles);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage articles={articles} setFilteredNews={setFilteredNews} />
          }
        />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
