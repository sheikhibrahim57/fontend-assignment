import axios from "axios";
import { useEffect, useState } from "react";

const Crad = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/getBlog");
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const blogTitle = form.blogTitle.value;
    const blogDescription = form.blogDescription.value;

    const blog = { blogTitle, blogDescription };

    const res = await axios.post("http://localhost:3000/createBlog", blog);

    console.log(res);
  };

  return (
    <div className="container mx-auto p-10">
      <div>
        <p className="text-4xl">Crate Your Crad</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              name="blogTitle"
              type="text"
              placeholder="Input Your Title"
              className="text-[#03014C] my-2 text-[20px] font-semibold font-open p-[16px] w-90 border-[1px] rounded-md border-[#03014C] border-opacity-30 outline-none  mr-2"
              required
            />
            <input
              name="blogDescription"
              type="text"
              placeholder="Input Your Description"
              className="text-[#03014C] text-[20px] font-semibold font-open p-[16px] w-90 border-[1px] rounded-md border-[#03014C] border-opacity-30 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-90 bg-[#000] text-white rounded-md p-[16px] mt-2 hover:bg-red-900"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="lg:p-5 grid lg:grid-cols-4 flex-wrap gap-6">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="col-span-1 bg-slate-500 p-5 rounded-2xl"
          >
            <h1>{blog?.blogTitle}</h1>
            <p>{blog?.blogDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crad;
