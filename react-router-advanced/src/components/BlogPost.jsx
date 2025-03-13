import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic blog ID from the URL

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Blog Post {id}</h1>
      <p>This is the content for blog post ID: {id}.</p>
    </div>
  );
};

export default BlogPost;
