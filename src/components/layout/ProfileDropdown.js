import React, { useState } from 'react';
import { ProfileMenuItems } from './ProfileMenuItems';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'Profile-dropdown__menu clicked' : 'Profile-dropdown__menu'}
      >
        {ProfileMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="Profile-dropdown__link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
