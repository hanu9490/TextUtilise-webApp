import React from "react";

const About = (props) => {
  return (
    <div className="container text-center mt-5">
      <h2
        style={
          props.textMode === "light" ? { color: "black" } : { color: "white" }
        }
      >
        Hello This is About Page
      </h2>
    </div>
  );
};

export default About;
