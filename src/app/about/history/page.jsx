import Link from 'next/link';
import React from 'react';

const HistoryPage = () => {
    return (
        <div>
            <h1>this is history</h1>
            <h1>this is a nesting route.</h1>
            <Link className=' border-2 bg-yellow-200 my-5 p-2' href={'/about/history/vision'}>Vision</Link>
        </div>
    );
};

export default HistoryPage;