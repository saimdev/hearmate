import { format } from "date-fns";
import { Link } from "react-router-dom";



const BlogCard = ({ id, title, siteName, coverImg, createdAt }) => {
    return (
        <div className="p-4 hover:shadow-lg transition-shadow duration-300 rounded-lg border space-y-4 bg-slate-400/10 backdrop-blur z-10">
            <div className="">
                <div className="aspect-video rounded-md overflow-hidden">
                    <img src={coverImg} alt={title} className="h-full w-full object-cover" />
                </div>
            </div>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold line-clamp-3 min-h-16">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{siteName}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-700">
                    {format(new Date(createdAt), "PPP")}
                </span>
                <Link
                    to={`/blogs/${id}`}
                    className="!text-xs hover:underline"
                >
                    Read Blog
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
