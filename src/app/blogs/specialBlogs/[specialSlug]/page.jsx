import React from 'react';

const page = ({ params }) => {
    console.log("special", params.slug);
    return (
        <div>
            <h1>all special slugs are here</h1>
        </div>
    );
};

export default page;