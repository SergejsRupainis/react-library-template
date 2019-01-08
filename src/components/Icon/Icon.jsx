import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon components
 *
 * @param {string} src Icon URL
 */
const Icon = ({ src }) => <img src={src} alt="some icon" />;

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
