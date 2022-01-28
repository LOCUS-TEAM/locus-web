import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0" style={{marginTop: '25px', display: 'flex'}}>
        <Link to="/">
          <Image
            src={require('./../../../assets/logo.png')}
            alt="Open"
            width={32}
            height={32} />
        </Link>&nbsp;
        <span style={{fontSize: '20px', lineHeight: '32px'}}>Team Locus</span>
      </h1>
    </div>
  );
}

export default Logo;