import React from 'react'
import { useParams } from 'react-router-dom'
import Section from '../Section'
import { useQuery } from '@tanstack/react-query'
import { getBlog } from '../../apis/blogs/blogApi'

const Blog = () => {

    const { id } = useParams()
    const { data, isPending } = useQuery({
        queryKey: ["hearmate-blog", id],
        queryFn: () => getBlog(id)
    })

    console.log(data)

    const blogContent = data?.data?.content

    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25rem] "
            crossesOffset="lg:translate-y-[5.25rem]"
        >
            <div className='container mx-auto min-h-[calc(100vh-80px)] md:pt-24'>
                <div
                    className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:mx-auto prose-img:w-full"
                    dangerouslySetInnerHTML={{
                        __html: blogContent,
                    }}
                />
            </div>
        </Section>
    )
}

export default Blog