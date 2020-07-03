import React, { FC } from 'react';

import './BannerSection.scss';
import banner from '../../img/banner.png';
import mainLogo from '../../img/logo-name-main.png';

const BannerSection: FC = () => {
  return (
    <section className="banner">
      <div className="banner__background-img">
        <img
          className="banner__background-img-element banner__background-img-element_size"
          src={banner}
          alt="banner"
        />
      </div>
      <div className="banner__container banner__container_style">
        <div className="banner__container-btn banner__container-btn_size">
          <button className="banner__container-btn-element banner__container-btn-element_style">
            קפס ה/תא םא
          </button>
        </div>
        <div className="banner__container-logo banner__container-logo_position">
          <div className="banner__container-logo-img">
            <img src={mainLogo} alt="main-logo" />
          </div>
          <div className="banner__container-logo-text banner__container-logo-text_position">
            <h1 className="banner__container-logo-text-heading-one banner__container-logo-text-heading-one_font">
              קילקב הסבכמ
            </h1>
            <p className="banner__container-logo-text-paragraph banner__container-logo-text-paragraph_font">
              לארשי לש תוסבכמה תייצקילפא הניה
            </p>
            <h2 className="banner__container-logo-text-heading-two banner__container-logo-text-heading-two_font">
              דיינב םכלצא תוסבכמה לכ
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
