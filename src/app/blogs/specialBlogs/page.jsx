import Link from 'next/link';
import React from 'react';

const SpecialBlogs = () => {
    return (
        <div>
            <h1>special blogs...</h1>

            {
                blogs.map(blog => <div key={blog.slug}>
                    <Link href={`/blogs/specialBlogs/${blog.slug}`}>
                        <h1>Title: {blog.title}</h1>
                        <button className=' border-2 bg-yellow-200 p-2'>view special slug</button>
                    </Link>
                </div>)
            }

            {/* <button className=' border-2 bg-purple-300 p-4'> <Link href={`/specialBlogs/${specialSlug}`}> view special details </Link></button> */}
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

export default SpecialBlogs;