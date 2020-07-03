import React, { FC } from 'react';

import './Footer.scss';
import banner from '../../img/footer-banner.png';
import userIcon from '../../img/icon-form-user.png';
import emailIcon from '../../img/icon-form-email.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import youtube from '../../img/youtube.png';
import logo from '../../img/logo-name-main.png';
import callIcon from '../../img/call-icon.png';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__background-img">
        <img
          className="footer__background-img-item footer__background-img-item_position"
          src={banner}
          alt="footer-banner"
        />
      </div>
      <div className="footer__social-network-links">
        <img
          className="footer__social-network-links-item footer__social-network-links-item_position"
          src={facebook}
          alt="facebook"
        />
        <img
          className="footer__social-network-links-item footer__social-network-links-item_position"
          src={instagram}
          alt="instagram"
        />
        <img
          className="footer__social-network-links-item footer__social-network-links-item_position"
          src={youtube}
          alt="youtube"
        />
      </div>
      <form className="footer__form">
        <h1 className="footer__form-heading footer__form-heading_position">
          רשק רוצ
        </h1>
        <input
          className="footer__form-user-name footer__form-user-name_position"
          type="text"
          name="user"
          placeholder="אלמ םש"
        />
        <img
          className="footer__form-user-name-icon footer__form-user-name-icon_position"
          src={userIcon}
          alt="user-icon"
        />
        <input
          className="footer__form-user-email footer__form-user-email_position"
          type="text"
          name="email"
          placeholder="ליימ תבותכ"
        />
        <img
          className="footer__form-user-email-icon footer__form-user-email-icon_position"
          src={emailIcon}
          alt="email-icon"
        />
        <textarea
          className="footer__form-textarea footer__form-textarea_position"
          name="message"
          placeholder="ןאכ בותכ"
        />
        <input
          className="footer__form-submit-btn footer__form-submit-btn_position"
          type="submit"
          value="חלש"
        />
      </form>
      <div className="footer__contacts">
        <img
          className="footer__contacts-logo footer__contacts-logo_position"
          src={logo}
          alt="logo"
        />
        <p className="footer__contacts-logo-text footer__contacts-logo-text_position">
          קילקב הסבכמ
        </p>
        <p className="footer__contacts-email footer__contacts-email_position">
          unfo@cliklaundry.co.il
        </p>
        <p className="footer__contacts-phone footer__contacts-phone_position">
          +972 503 500 750
        </p>
        <img
          className="footer__contacts-call-icon footer__contacts-call-icon_position"
          src={callIcon}
          alt="call-icon"
        />
      </div>
    </footer>
  );
};

export default Footer;
