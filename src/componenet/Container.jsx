import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Bookmark from "./Bookmark";

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
        {/* Blogs */}
        <div className="col-span-2">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>

        <aside>
          {/* Spent Time */}
          <div className="py-5 text-center bg-violet-100 border-2 border-violet-500 rounded-lg mb-6">
            <h2 className="font-bold text-2xl text-indigo-600">
              Spent time on read : 177 min
            </h2>
          </div>

          {/* Bookmarks Field */}
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="font-bold text-2xl mb-4">Bookmarked Blogs : 8</h2>

            {/* Bookmarks */}
            <div className="flex flex-col gap-4">
              <Bookmark />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Container;
