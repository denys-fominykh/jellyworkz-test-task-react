import React, { FC } from 'react';

import './Main.scss';

import BannerSection from '../BannerSection';
import MobileApp from '../MobileApp';
import MobileAppLinks from '../MobileAppLinks';
import MobileAppScreens from '../MobileAppScreens';
import Service from '../Service';
import Gift from '../Gift';

const Main: FC = () => {
  return (
    <main className="main">
      <article className="article">
        <BannerSection />
        <MobileApp />
        <MobileAppLinks />
        <MobileAppScreens />
        <Service />
        <Gift />
      </article>
    </main>
  );
};

export default Main;
