import React from "react";

const Blog = () => {
  return (
    <article>
      <img className="w-full" src="https://i.ibb.co/84Zfw2n/1.jpg" alt="" />
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            className="w-12 h-12 "
            src="https://i.ibb.co/VvLNdLL/boy1.png"
            alt=""
          />
          <div>
            <h3>Hamza Sohail</h3>
            <h4>Mar 14 (4 Days ago)</h4>
          </div>
        </div>
        <div className="flex">
          <p>05 min read</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default Blog;
