import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import './BoxFlip.css';

const BoxFlip = ({
  children,
  isFlipped,
  isVertical = false
}) => {
  const flipClass = isVertical ? 'flipOverX' : 'flipOverY';
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('card', {
      [flipClass]: isFlipped
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__side card__side--front"
  }, children[0]), /*#__PURE__*/React.createElement("div", {
    className: classNames('card__side card__side--back', {
      '-x': isVertical,
      '-y': !isVertical
    })
  }, children[1]));
};

BoxFlip.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  isFlipped: PropTypes.bool,
  isVertical: PropTypes.bool
};
export { BoxFlip as default };