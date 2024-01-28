import Header from '../Header/Header';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Header />
      <div className="error-page-text-container">
        <h1 classNamer="error-page-text">
          Oh no! Something happened! Please go back
        </h1>
      </div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
