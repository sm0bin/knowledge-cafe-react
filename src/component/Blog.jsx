import PropTypes from "prop-types";

const Blog = ({ blog, handleMarkAsRead, handleBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <article>
      <img className="w-full rounded-lg mb-9" src={cover} alt="" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-6">
          <img
            className="w-12 h-12"
            src={author_img}
            alt={`Image of ${title}`}
          />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <h4>{posted_date} (4 Days ago)</h4>
          </div>
        </div>
        <div className="flex gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(title)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:fill-current cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="mt-4 mb-5 flex gap-4">
        {hashtags.map((hashtag, index) => (
          <span key={index}>
            <a href="#">#{hashtag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-xl font-semibold text-violet-600 underline underline-offset-2 hover:text-violet-800"
      >
        Mark as read
      </button>
      <hr className="mt-9 mb-10" />
    </article>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleMarkAsRead: PropTypes.func,
  handleBookmark: PropTypes.func,
};

export default Blog;
