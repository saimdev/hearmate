import React from 'react'
import Section from '../Section'
import { curve } from "@/assets";
import BlogCard from './blog-card';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getBlogs } from '../../apis/blogs/blogApi';
import { BackgroundCircles, BottomLine, Gradient } from "@/components/design/Hero";
import { useInView } from 'react-intersection-observer';



const Blogs = () => {

    const { ref, inView } = useInView();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["hearmate-blogs"],
        queryFn: getBlogs,
        getNextPageParam: (lastPage) => {
            const { currentPage, totalPages } = lastPage.pagination;
            // ✅ only fetch if currentPage < totalPages
            if (currentPage < totalPages) {
                return currentPage + 1;
            }
            return undefined; // stops infinite loop
        },
    });


    const blogs = data?.pages.flatMap(page => page.data) ?? [];
    // auto load next page when bottom div is visible
    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    // const blogPosts = data?.data;
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 pt-20">
                        {blogs?.map((blog) => (
                            <BlogCard
                                key={blog._id}
                                id={blog._id}
                                title={blog.title}
                                siteName={blog.siteName}
                                coverImg={blog.cover_image}
                                createdAt={blog.createdAt}
                            />
                        ))}
                    </div>
                    {hasNextPage ? (
                        <div ref={ref} className="text-center py-6">
                            {isFetchingNextPage ? "Loading more..." : "Scroll to load more"}
                        </div>
                    ) : (
                        <div className="text-center py-6">No more blogs</div>
                    )}
                    <BackgroundCircles />
                </div>
            </div>
        </Section >
    )
}

export default Blogs