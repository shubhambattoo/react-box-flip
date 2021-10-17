import classNames from 'classnames';

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

export default BoxFlip;