import React from "react";
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Build Something amazing with GPT-3</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
