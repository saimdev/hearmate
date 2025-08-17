import React from 'react'
import { useParams } from 'react-router-dom'
import Section from '../Section'
import { useQuery } from '@tanstack/react-query'
import { getBlog } from '../../apis/blogs/blogApi'
import { format } from 'date-fns'
import { Loader } from 'lucide-react'

const Blog = () => {

    const { id } = useParams()
    const { data, isPending } = useQuery({
        queryKey: ["hearmate-blog", id],
        queryFn: () => getBlog(id)
    })


    const blogContent = data?.data?.content
    const blog = data?.data
    console.log(blog)

    if (isPending) {
        return (<div className='flex flex-col items-center justify-center h-svh gap-4'>
            <Loader className='animate-spin text-n-12 size-10' />
            <p className='font-semibold'>Loading ...</p>
        </div>)
    }
    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25rem] "
            crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className='container mx-auto min-h-[calc(100vh-80px)] md:pt-24'>
                <h3 className='h3 font-bold py-10'>{blog?.title}</h3>
                <small>
                    {blog?.createdAt && format(new Date(blog?.createdAt), "EEEE d MMMM yyyy HH:mm")}
                </small>
                <div className='py-5'>
                    <div className='aspect-video overflow-hidden rounded-2xl '>
                        <img src={blog?.cover_image} alt="" loading='eager' className='h-full w-full object-cover' />
                    </div>
                </div>
                <div
                    className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:mx-auto prose-img:w-full pt-5"
                    dangerouslySetInnerHTML={{
                        __html: blogContent,
                    }}
                />
            </div>
        </Section>
    )
}

export default Blog