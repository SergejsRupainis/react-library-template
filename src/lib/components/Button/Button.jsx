import React from 'react';
import PropTypes from 'prop-types';

/**
 * Some documentation
 *
 * @param {SyntheticEvent} event The react `SyntheticEvent`
 * @param {Object} allProps All props of this Button
 */
const Button = ({ text }) => <button type="button">{text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
