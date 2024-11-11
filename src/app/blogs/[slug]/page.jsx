import React from 'react';
import SpecialBlogs from '../specialBlogs/page';

const page = ({ params }) => {
    console.log(params.slug);
    const singleBlog = blogs.find(blog => blog.slug === params.slug)

    return (
        <div className=' h-screen'>
            <h1 className=' text-blue-600'>title: {singleBlog.title}</h1>
            <h1 className=' text-red-600'>description: {singleBlog.description}</h1>
        </div>
    );
};

const blogs = [
    {
        slug: "introduction-to-js",
        title: "Introduction to JavaScript",
        description: "A beginner's guide to the basics of JavaScript programming."
    },
    {
        slug: "advanced-css",
        title: "Advanced CSS Techniques",
        description: "Explore complex CSS concepts to enhance your web designs."
    },
    {
        slug: "react-hooks-overview",
        title: "React Hooks Overview",
        description: "An in-depth look at React hooks and how they simplify component logic."
    },
    {
        slug: "nodejs-api-development",
        title: "API Development with Node.js",
        description: "Learn to create RESTful APIs using Node.js and Express."
    },
    {
        slug: "data-structures",
        title: "Understanding Data Structures",
        description: "A guide to fundamental data structures in computer science."
    }
];

export default page;