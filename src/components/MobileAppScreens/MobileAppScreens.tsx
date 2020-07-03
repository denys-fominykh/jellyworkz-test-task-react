import React, { FC } from 'react';

import './MobileAppScreens.scss';
import bannerTop from '../../img/main-banner-top.png';
import bannerBottom from '../../img/main-banner-bottom.png';
import firstScreen from '../../img/app-screen-1.png';
import secondScreen from '../../img/app-screen-2.png';
import thirdScreen from '../../img/app-screen-3.png';
import fourthScreen from '../../img/app-screen-4.png';
import block from '../../img/block.png';
import ellipse from '../../img/ellipse.png';
import ellipseMini from '../../img/ellipse-mini.png';

const MobileAppScreens: FC = () => {
  return (
    <section className="mobile-app-screens mobile-app-screens_size">
      <div className="mobile-app-screens__ellipse-container mobile-app-screens__ellipse-container_position">
        <img
          className="mobile-app-screens__ellipse-container-element mobile-app-screens__ellipse-container-element_first"
          src={ellipse}
          alt="ellipse"
        />
        <img
          className="mobile-app-screens__ellipse-container-element mobile-app-screens__ellipse-container-element_second"
          src={ellipse}
          alt="ellipse"
        />
        <img
          className="mobile-app-screens__ellipse-container-element mobile-app-screens__ellipse-container-element_third"
          src={ellipse}
          alt="ellipse"
        />
        <img
          className="mobile-app-screens__ellipse-container-element mobile-app-screens__ellipse-container-element_fourth"
          src={ellipse}
          alt="ellipse"
        />
      </div>
      <div className="mobile-app-screens__ellipse-mini-container mobile-app-screens__ellipse-mini-container_position">
        <img
          className="mobile-app-screens__ellipse-mini-container-element mobile-app-screens__ellipse-mini-container-element_first"
          src={ellipseMini}
          alt="ellipse-mini"
        />
        <img
          className="mobile-app-screens__ellipse-mini-container-element mobile-app-screens__ellipse-mini-container-element_second"
          src={ellipseMini}
          alt="ellipse-mini"
        />
        <img
          className="mobile-app-screens__ellipse-mini-container-element mobile-app-screens__ellipse-mini-container-element_third"
          src={ellipseMini}
          alt="ellipse-mini"
        />
        <img
          className="mobile-app-screens__ellipse-mini-container-element mobile-app-screens__ellipse-mini-container-element_fourth"
          src={ellipseMini}
          alt="ellipse-mini"
        />
      </div>
      <div className="mobile-app-screens__heading-text mobile-app-screens__heading-text_position">
        <h1 className="mobile-app-screens__heading-text-element mobile-app-screens__heading-text-element_font">
          דבוע הז ךיא
        </h1>
      </div>
      <div className="mobile-app-screens__background">
        <img
          className="mobile-app-screens__background-img-top mobile-app-screens__background-img-top_position"
          src={bannerTop}
          alt="main-banner-top"
        />
        <img
          className="mobile-app-screens__background-img-bottom mobile-app-screens__background-img-bottom_position"
          src={bannerBottom}
          alt="main-banner-bottom"
        />
      </div>
      <div className="mobile-app-screens__screens-container">
        <div className="mobile-app-screens__screens-container-img mobile-app-screens__screens-container-img_position">
          <img
            className="mobile-app-screens__screens-container-img-element mobile-app-screens__screens-container-img-element_style"
            src={firstScreen}
            alt="app-screen-1"
          />
          <div className="mobile-app-screens__screens-container-img-shadow mobile-app-screens__screens-container-img-shadow_style"></div>
          <p className="mobile-app-screens__screens-container-img-text mobile-app-screens__screens-container-img-text_font">
            םכילא ךרדב הסבכמהו
          </p>
        </div>
        <div className="mobile-app-screens__screens-container-img mobile-app-screens__screens-container-img_position">
          <img
            className="mobile-app-screens__screens-container-img-element mobile-app-screens__screens-container-img-element_style"
            src={secondScreen}
            alt="app-screen-2"
          />
          <div className="mobile-app-screens__screens-container-img-shadow mobile-app-screens__screens-container-img-shadow_style"></div>
          <p className="mobile-app-screens__screens-container-img-text mobile-app-screens__screens-container-img-text_font">
            העשו םוי םירחוב
          </p>
        </div>
        <div className="mobile-app-screens__screens-container-img mobile-app-screens__screens-container-img_position">
          <img
            className="mobile-app-screens__screens-container-img-element mobile-app-screens__screens-container-img-element_style"
            src={thirdScreen}
            alt="app-screen-3"
          />
          <div className="mobile-app-screens__screens-container-img-shadow mobile-app-screens__screens-container-img-shadow_style"></div>
          <p className="mobile-app-screens__screens-container-img-text mobile-app-screens__screens-container-img-text_font">
            הסיבכה לס תא םיוושמ תוסבכמה ןיב
          </p>
        </div>
        <div className="mobile-app-screens__screens-container-img mobile-app-screens__screens-container-img_position">
          <img
            className="mobile-app-screens__screens-container-img-element mobile-app-screens__screens-container-img-element_style"
            src={fourthScreen}
            alt="app-screen-4"
          />
          <div className="mobile-app-screens__screens-container-img-shadow mobile-app-screens__screens-container-img-shadow_style"></div>
          <p className="mobile-app-screens__screens-container-img-text mobile-app-screens__screens-container-img-text_font">
            תייצקילפא תא םידירומ קילקב הסבכמ
          </p>
        </div>
        <div className="mobile-app-screens__screens-container-block mobile-app-screens__screens-container-block_position">
          <img
            className="mobile-app-screens__screens-container-block-img"
            src={block}
            alt="block"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppScreens;
