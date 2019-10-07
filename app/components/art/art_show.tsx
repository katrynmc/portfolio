import React from "react";
import { RouteComponentProps } from "react-router-dom";

import PORTFOLIO from "config/images_index";
import { find, join, propEq } from "ramda";

interface ImageParams {
  image: string;
}

const findImage = (imageSlug: string) => {
  return find(propEq("slug", imageSlug))(PORTFOLIO);
};

const ArtShow = ({ match }: RouteComponentProps<ImageParams>) => {
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
