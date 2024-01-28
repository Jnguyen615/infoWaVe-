import './MainPage.scss';
import Header from '../Header/Header';
import ArticleContainer from '../ArticleContianer/ArticleContainer'
import SearchBar from '../SearchBar/SearchBar';
import ScrollButton from '../ScrollButton/ScrollButton';
import { useState } from 'react';
import PropTypes from 'prop-types';

const MainPage = ({ articles, setFilteredNews }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
    setFilteredNews(term);
  };

  const filteredNews = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="main-page">
      <Header />
      <SearchBar
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ArticleContainer articles={filteredNews} />
      <ScrollButton />
    </main>
  );
};

export default MainPage;

MainPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
      ]).isRequired,
      urlToImage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setFilteredNews: PropTypes.func.isRequired,
};
