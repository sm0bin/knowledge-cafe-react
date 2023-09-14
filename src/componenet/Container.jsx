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

        <div className="flex flex-col gap-4">
          <div className="py-5 text-center bg-violet-100 border-2 border-violet-500 rounded-lg mb-6">
            <h2 className="font-bold text-2xl text-indigo-600">
              Spent time on read : 177 min
            </h2>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <h2 className="font-bold text-2xl mb-4">
              Spent time on read : 177 min
            </h2>
            <div className="flex flex-col gap-4">
              <div className="p-5 bg-white rounded-lg">
                <h3 className="font-semibold text-lg">
                  Master Microsoft Power Platform and Become an In-Demand!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Container;
