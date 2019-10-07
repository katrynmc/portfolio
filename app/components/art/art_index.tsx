import React from "react";

import Image from "components/art/index_image";
import PORTFOLIO from "config/images_index";

const ArtIndex = (): React.ReactElement => {
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
