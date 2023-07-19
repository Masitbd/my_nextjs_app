import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {
    const router = useRouter()

    setTimeout(() => {
        router.back('/')
    }, 2000);

    return (
        <div>
            This is 404 error page
        </div>
    );
};

export default ErrorPage;