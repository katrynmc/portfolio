import React from "react";

import { propEq, find, join } from "ramda";
import PORTFOLIO from "Config/images_index";

const findImage = imageSlug => {
  return find(propEq("slug", imageSlug))(PORTFOLIO);
};

const ArtShow = ({ match }) => {
  const image = findImage(match.params.image);
  const categories = join(" | ", image.categories);

  return (
    <div className="art-show">
      <div className="sidebar">
        <h6>{categories}</h6>
        <h3>{`${image.title}, ${image.year}`}</h3>
        <p className="description">{image.description}</p>
        <div className="production-details">
          <div className="stat-wrapper">
            <div className="stat">{image.medium}</div>
            <h5>MEDIUM</h5>
          </div>
          <div className="stat-wrapper">
            <div className="stat">{image.size}</div>
            <h5>DIMENSIONS</h5>
          </div>
        </div>
      </div>

      <div className="main-view image-panel">
        <img
          className="large-image"
          src={image.largeAsset}
          alt={image.indexAltText}
        />
      </div>
    </div>
  );
};

export default ArtShow;
