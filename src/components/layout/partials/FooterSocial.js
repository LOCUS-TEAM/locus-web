import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub } from "react-icons/fa";

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/discord">
            <FaDiscord size="24" alt="Discord Logo" />
          </Link>
        </li>
        <li>
          <a href="https://github.com/LOCUS-TEAM">
            <FaGithub size="24" alt="GitHub Logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;