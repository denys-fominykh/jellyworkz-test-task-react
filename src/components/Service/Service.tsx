import React, { FC } from 'react';

import './Service.scss';
import firstIcon from '../../img/icon-01.png';
import secondIcon from '../../img/icon-02.png';
import thirdIcon from '../../img/icon-03.png';
import fourthIcon from '../../img/icon-04.png';
import fifthIcon from '../../img/icon-05.png';
import family from '../../img/family.png';
import blueTextile from '../../img/blue-textile.png';
import redTextile from '../../img/red-textile.png';

const Service: FC = () => {
  return (
    <section className="service">
      <div className="service__icons">
        <img
          className="service__icons-img service__icons-img_position"
          src={firstIcon}
          alt="icon-01"
        />
        <img
          className="service__icons-img service__icons-img_position"
          src={secondIcon}
          alt="icon-01"
        />
        <img
          className="service__icons-img service__icons-img_position"
          src={thirdIcon}
          alt="icon-01"
        />
        <img
          className="service__icons-img service__icons-img_position"
          src={fourthIcon}
          alt="icon-01"
        />
        <img
          className="service__icons-img service__icons-img_position"
          src={fifthIcon}
          alt="icon-01"
        />
      </div>
      <div className="service__icons-text">
        <p className="service__icons-text-item service__icons-text-item_position">
          תמואמ גוריד
        </p>
        <p className="service__icons-text-item service__icons-text-item_position">
          תונימז
        </p>
        <p className="service__icons-text-item service__icons-text-item_position">
          תוריש
        </p>
        <p className="service__icons-text-item service__icons-text-item_position">
          תונימא
        </p>
        <p className="service__icons-text-item service__icons-text-item_position">
          תוחונ
        </p>
      </div>
      <div className="service__main-img">
        <img
          className="service__main-img-item service__main-img-item_position"
          src={family}
          alt="family"
        />
        <img
          className="service__main-img-blue-textile service__main-img-blue-textile_position"
          src={blueTextile}
          alt="blue-textile"
        />
        <img
          className="service__main-img-red-textile service__main-img-red-textile_position"
          src={redTextile}
          alt="red-textile"
        />
      </div>
      <div className="service__main-text">
        <p className="service__main-text service__main-text_position">
          תובוט םיידיב םכלש הסיבכה קילקב הסבכמ םע
        </p>
        <p className="service__main-text service__main-text_position">
          תרחא המרב תוריש תיווחו תונימא םתוח םג הווהמו תוסבכמה ףנע לש סיילפ טקרמ
          תייצקילפא הניה קילקב הסבכמ
        </p>
      </div>
    </section>
  );
};

export default Service;
