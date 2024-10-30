import React from "react";
import PropTypes from "prop-types";

const Headline = ({ level = "h1", children, className }) => {
  const Tag = level; // Verwende den level-Prop als HTML-Tag

  return <Tag className={className}>{children}</Tag>;
};

Headline.propTypes = {
  level: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Headline;
