import React, { FC } from 'react';

import './MobileAppLinks.scss';
import girl from '../../img/girl.png';
import cloud from '../../img/cloud.png';
import googlePlay from '../../img/google-play.png';
import appStore from '../../img/app-store.png';

const MobileAppLinks: FC = () => {
  return (
    <section className="mobile-app-links mobile-app-links_size">
      <div className="mobile-app-links__store-links mobile-app-links__store-links_display">
        <div className="mobile-app-links__store-links-girl mobile-app-links__store-links-girl_size">
          <img
            className="mobile-app-links__store-links-girl-img mobile-app-links__store-links-girl-img_position"
            src={girl}
            alt="girl"
          />
        </div>
        <div className="mobile-app-links__store-links-info mobile-app-links__store-links-info_size">
          <div className="mobile-app-links__store-links-info-cloud">
            <img
              className="mobile-app-links__store-links-info-cloud-img mobile-app-links__store-links-info-cloud-img_position"
              src={cloud}
              alt="dialogue-cloud"
            />
            <p className="mobile-app-links__store-links-info-cloud-text mobile-app-links__store-links-info-cloud-text_position">
              &quot;!קילקב סבכל טושפ&quot;
            </p>
          </div>
          <div className="mobile-app-links__store-links-info-buttons mobile-app-links__store-links-info-buttons_position">
            <img src={googlePlay} alt="google-play" />
            <img src={appStore} alt="app-store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppLinks;
