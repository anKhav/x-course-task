import React from 'react';
import './NotFoundPage.scss'

const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <h1 className="not-found__title">
                404
            </h1>
            <p className="not-found__subtitle">
                Page not found
            </p>
        </div>
    );
};

export default NotFoundPage;