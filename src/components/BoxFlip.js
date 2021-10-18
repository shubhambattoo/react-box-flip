import * as React from 'react';
import classNames from 'clsx';
import './BoxFlip.css';

const BoxFlip = ({ children, isFlipped, isVertical = false }) => {
  const flipClass = isVertical ? 'flipOverX' : 'flipOverY';
  return (
    <div className={classNames('card', { [flipClass]: isFlipped })}>
      <div className="card__side card__side--front">{children[0]}</div>
      <div
        className={classNames('card__side card__side--back', {
          '-x': isVertical,
          '-y': !isVertical,
        })}
      >
        {children[1]}
      </div>
    </div>
  );
};

export {BoxFlip as default};
