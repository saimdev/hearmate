import React from 'react'
import Section from '../Section'
import { curve } from "@/assets";
import BlogCard from './blog-card';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../../apis/blogs/blogApi';
import { BackgroundCircles, BottomLine, Gradient } from "@/components/design/Hero";


const Blogs = () => {


    const { data, isPending } = useQuery({
        queryKey: ["hearmate-blogs"],
        queryFn: getBlogs
    })

    console.log(data)

    // const blogPosts = [
    //     {
    //         id: "asdasd",
    //         title: "Understanding JavaScript Closures",
    //         siteName: "Fitxol",
    //         createdAt: "2025-07-01T10:30:00Z",
    //     },
    //     {
    //         id: "Asdasd",
    //         title: "A Beginner's Guide to CSS Flexbox",
    //         siteName: "Fitxol",
    //         createdAt: "2025-06-20T14:15:00Z",
    //     },
    //     {
    //         id: "asduhxc",
    //         title: "10 Productivity Tips for Developers",
    //         siteName: "Hearmate",
    //         createdAt: "2025-05-12T08:00:00Z",
    //     },
    //     {
    //         id: "adjahsdkjzz",
    //         title: "Mastering React Hooks in 2025",
    //         siteName: "Hearmate",
    //         createdAt: "2025-07-05T16:45:00Z",
    //     },
    //     {
    //         id: "asdjahkjsd",
    //         title: "Exploring Node.js Streams",
    //         siteName: "Fitxol",
    //         createdAt: "2025-04-28T11:20:00Z",
    //     },
    // ];

    const blogPosts = data?.data;
    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25rem] "
            crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className='container mx-auto min-h-[calc(100vh-80px)] md:pt-24 '>

                {/* Heading */}
                <div className='text-center py-4'>
                    <h3 className='h4 md:h3'>
                        <span className="inline-block relative">
                            <span style={{ color: "#B84646" }}>Hear</span>
                            <span className="text-[#0058A5]">Mate</span>
                            <span style={{ color: "#B84646" }}> - B</span>
                            <span className="text-[#0058A5]">logs</span>
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h3>
                </div>

                {/* Blogs */}
                <div className="relative mx-auto md:max-w-5xl xl:mb-24 mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-10 pt-20">
                        {blogPosts?.map((blog) => (
                            <BlogCard
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                siteName={blog.siteName}
                                createdAt={blog.createdAt}
                            />
                        ))}
                    </div>
                    <BackgroundCircles />
                </div>
            </div>
        </Section >
    )
}

export default Blogs