import React, { FC } from 'react';

import './Gift.scss';
import gift from '../../img/gift.png';

const Gift: FC = () => {
  return (
    <section className="gift">
      <div className="gift__img">
        <img className="gift__img gift__img_position" src={gift} alt="gift" />
      </div>
      <div className="gift__button">
        <button className="gift__button gift__button_style">המשרה</button>
      </div>
      <div className="gift__text">
        <h1 className="gift__text-heading gift__text-heading_position">
          תונתמ תוקנעה
        </h1>
        <p className="gift__text-paragraph gift__text-paragraph_position">
          הסיבכ דראק טפיג תקנעה הסיבכ תוריש וקינעהו וישכע ומשריה םכלש םיריקיל
        </p>
      </div>
    </section>
  );
};

export default Gift;
