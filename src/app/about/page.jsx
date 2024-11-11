import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className=' bg-blue-400'>this is about page</h2>
            <div className=' flex space-x-4'>
                <Link href={'/about/history'}>History</Link>
                <Link href={'/about/mission'}>Mission</Link>
            </div>
        </div>
    );
};

export default page;