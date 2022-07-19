import React from "react";
import "./features.scss";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Lorem Ipsum is simply dummy text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p>Request early access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map(({ text, title }, index) => (
          <Feature text={text} title={title} key={title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
