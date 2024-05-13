import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p>404 not found</p>
            <Link to='/'>Go to home</Link>
        </div>
    );
};

export default ErrorPage;