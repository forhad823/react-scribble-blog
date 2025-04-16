import React from "react";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookmarked, handleMarkAsRead }) => {
  return (
    <div className="m-2">
      {/* ________________card start_______________ */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} />
        </figure>
        <div className="card-body text-left">
          <div className="author flex justify-between items-center">
            <div className="flex items-center gap-0.5">
              <img
                className="w-8 h-8 object-contain"
                src={blog.author_img}
                alt="author-image"
              />
              <h1 className="text-base font-semibold">{blog.author}</h1>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => handleBookmarked(blog)}
            >
              <FaBookmark size={20} />
            </button>
          </div>
          <h2 className="card-title font-bold text-xl">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((tag) => (
              <p
                key={tag}
                className="font-semibold text-blue-700 cursor-pointer"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                handleMarkAsRead(blog.reading_time, blog.id);
              }}
              className="btn btn-primary"
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
      {/* ________________card end_______________ */}
    </div>
  );
};

export default Blog;
