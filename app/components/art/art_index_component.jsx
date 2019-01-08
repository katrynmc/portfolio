import React from "react";

import Image from "Components/art/index_image_component";
import PORTFOLIO from "Config/images_index";

const ArtIndex = () => {
  const gallery = PORTFOLIO.map(image => (
    <Image key={`${image.year}-${image.slug}`} image={image} />
  ));

  return (
    <div className="art-index">
      <div className="gallery">{gallery}</div>
    </div>
  );
};

export default ArtIndex;
