import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="/#">About us</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#whatwedo">What we do</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;