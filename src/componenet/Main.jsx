import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <main className=" max-w-7xl mx-auto ">
      <hr className="my-8" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Blog />
        </div>
        <div className="shrink">
          <div className="py-5 text-center bg-purple-100 border border-purple-500 rounded-lg">
            <h2>Spent time on read : 177 min</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
