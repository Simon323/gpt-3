import React from "react";
import "./blog.scss";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Lorem Ipsum is simply dummy text of the printing.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Jan 20, 2022"
            title="Lorem Ipsum is simply dummy text of the printing."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Feb 10, 2022"
            title="Lorem Ipsum is simply dummy text of the printing."
          />
          <Article
            imgUrl={blog03}
            date="Jul 12, 2022"
            title="Lorem Ipsum is simply dummy text of the printing."
          />
          <Article
            imgUrl={blog04}
            date="Sep 24, 2022"
            title="Lorem Ipsum is simply dummy text of the printing."
          />
          <Article
            imgUrl={blog05}
            date="Dec 09, 2022"
            title="Lorem Ipsum is simply dummy text of the printing."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
