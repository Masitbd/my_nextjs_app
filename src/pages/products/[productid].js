import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsPage = () => {

    const router = useRouter()
    return (
        <div>
           This is products dynamic page {router.query.productid}
        </div>
    );
};

export default ProductDetailsPage;