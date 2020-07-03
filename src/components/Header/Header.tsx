import React, { FC } from 'react';

import './Header.scss';
import logoMini from '../../img/logo-mini.png';

const Header: FC = () => {
  return (
    <header className="header header_style">
      <nav className="header__navigation header__navigation_display">
        <ul className="header__navigation-btn-list header__navigation-btn-list_display">
          <li className="header__navigation-btn-list-item header__navigation-btn-list-item_style">
            <button className="header__navigation-btn-list-item-element header__navigation-btn-list-item-element_style">
              קפסכ םשריה
            </button>
          </li>
          <li className="header__navigation-btn-list-item header__navigation-btn-list-item_style">
            <button className="header__navigation-btn-list-item-element header__navigation-btn-list-item-element_style">
              חוקלכ םשריה
            </button>
          </li>
        </ul>
        <ul className="header__navigation-link-list header__navigation-link-list_display">
          <li className="header__navigation-link-list-item header__navigation-link-list-item_style">
            <a
              href="/#"
              className="header__navigation-link-list-item-element header__navigation-link-list-item-element_style"
            >
              רשק רוצ
            </a>
          </li>
          <li className="header__navigation-link-list-item header__navigation-link-list-item_style">
            <a
              href="/#"
              className="header__navigation-link-list-item-element header__navigation-link-list-item-element_style"
            >
              תונתמ תוקנעה
            </a>
          </li>
          <li className="header__navigation-link-list-item header__navigation-link-list-item_style">
            <a
              href="/#"
              className="header__navigation-link-list-item-element header__navigation-link-list-item-element_style"
            >
              דבוע הז ךיא
            </a>
          </li>
          <li className="header__navigation-link-list-item header__navigation-link-list-item_style">
            <a
              href="/#"
              className="header__navigation-link-list-item-element header__navigation-link-list-item-element_style"
            >
              תודוא
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__logo-container header__logo-container_style">
        <a href="/#">
          <img className="header__logo-img" src={logoMini} alt="logo-mini" />
        </a>
      </div>
    </header>
  );
};

export default Header;
