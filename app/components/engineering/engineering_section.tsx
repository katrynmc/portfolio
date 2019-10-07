import React from "react";
import { Link } from "react-router-dom";

const EngineeringSection = (): React.ReactElement => {
  return (
    <div>
      <h2>About this site:</h2>
      <h3>Technology</h3>
      <p>
        The repository for this site lives{" "}
        <a href="https://github.com/katrynmc/portfolio">here</a>.
      </p>
      <ul>
        <li>React</li>
        <li>Webpack</li>
        <li>Stylus</li>
        <li>React Router</li>
      </ul>
      <Link to="/style">Style</Link>
    </div>
  );
};

export default EngineeringSection;
