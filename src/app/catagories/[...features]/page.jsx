import React from 'react';

const CatagoriesDetailsPage = ({ params }) => {
    if (params.features.length == 3)
        return (
            <div>
                <h1>{params.features?.[2]}</h1>
            </div>
        )
    if (params.features.length == 2)
        return (
            <div>{params.features[1]}</div>
        )
    return (
        <div>
            <h1> Catagories details page</h1>
            <h1>nested dynamic page</h1>
        </div>
    );
};

export default CatagoriesDetailsPage;