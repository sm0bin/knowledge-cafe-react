import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Container = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);

  return (
    <main className=" max-w-7xl mx-auto ">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>

        <div>
          <div className="py-5 text-center bg-violet-100 border border-violet-500 rounded-lg">
            <h2>Spent time on read : 177 min</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Container;
