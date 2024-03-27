import { Link } from "react-router-dom";
import placeholder from '../assets/404.jpg'
import { FaDeleteLeft } from "react-icons/fa6";
const Blog = ({blog,deletable,handleDelete}) => {
    const { cover_image, title, description, published_at, id } = blog;




    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 group hover:no-underline focus:no-underline rounded-2xl ">
                <img role="presentation" className="object-cover w-full rounded-lg h-44 p-5" src={cover_image || placeholder} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{published_at}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
               deletable && <div onClick={()=>{handleDelete(id)}}
                className="absolute bg-primary hover:bg-secondary group cursor-pointer p-3 rounded-full hover:scale-105 -top-5 right-1 lg:-right-15">
                    <FaDeleteLeft size={20} className="text-secondary group-hover:text-primary"></FaDeleteLeft>
               </div>
            }
        </div>
    );
};

export default Blog;