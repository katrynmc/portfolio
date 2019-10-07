import React from "react";
import { Link } from "react-router-dom";

import { PortfolioEntry } from "config/images_index";

interface IndexImageProps {
  image: PortfolioEntry;
}

interface IndexImageState {
  isHovered: boolean;
}

class IndexImage extends React.Component<IndexImageProps, IndexImageState> {
  constructor(props: IndexImageProps) {
    super(props);
    this.state = {
      isHovered: false,
    };

    this.handleHover = this.handleHover.bind(this);
  }

  public handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }

  public render() {
    const { image } = this.props;

    return (
      <div
        key={`${image.title}-${this.state.isHovered}wrapper`}
        className="image-wrapper">
        <Link to={`/art/${image.slug}`}>
          <img
            className="portfolio-image"
            src={image.inFocusIndex}
            alt={image.indexAltText}
          />
        </Link>
      </div>
    );
  }
}

export default IndexImage;
