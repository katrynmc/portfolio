import React from "react";

import Image from "src/components/section/art/index_image";
import PORTFOLIO from "src/config/images_index";

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
