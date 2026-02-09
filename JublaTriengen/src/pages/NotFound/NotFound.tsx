import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-header">404</h1>
            <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="not-found-link">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;