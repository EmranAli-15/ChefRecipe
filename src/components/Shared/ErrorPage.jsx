import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <img src="https://i.ibb.co/vw3HJRj/404page.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;