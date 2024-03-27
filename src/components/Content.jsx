import { useLoaderData } from "react-router-dom";
import placeholder from '../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";



const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, tags, body_html } = blog;
    return (
        <div className="mx-auto border-2  border-opacity-30 group hover:no-underline focus:no-underline rounded-2xl ">
            <img role="presentation" className="object-cover w-full rounded-lg h-44 p-5" src={cover_image || placeholder} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">{tag}</a>)
                }


            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}
                </h3>
                <Markdown rehypePlugins={[rehypeRaw]} >{body_html}</Markdown>
                <p></p>

            </div>
        </div>
    );
};

export default Content;