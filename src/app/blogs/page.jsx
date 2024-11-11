import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className=' grid grid-cols-3 gap-4'>
            {
                blogs.map(blog => <div
                    key={blog.slug}
                    className=' border-2 border-black p-3'
                >
                    <h1>{blog.title}</h1>
                    <h1>{blog.description}</h1>
                    <button className=' p-2 bg-blue-500'>
                        <Link href={`/blogs/${blog.slug}`}> View Details
                        </Link></button>

                    <button className=' p-2 bg-red-500'>
                        <Link href={`/blogs/specialBlogs`}> View special Details
                        </Link></button>
                </div>)
            }
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

export default BlogsPage;