import React, { FC } from 'react';

import './MobileApp.scss';
import check from '../../img/check.png';
import phone from '../../img/client-phone.png';

const MobileApp: FC = () => {
  return (
    <section className="mobile-app mobile-app_display">
      <div className="mobile-app__functions mobile-app__functions_size">
        <table className="mobile-app__functions-table mobile-app__functions-table_style">
          <tbody className="mobile-app__functions-table-body mobile-app__functions-table-body_display">
            <tr className="mobile-app__functions-table-body-row mobile-app__functions-table-body-row_style">
              <td className="mobile-app__functions-table-body-cell">
                <p className="mobile-app__functions-table-body-cell-text mobile-app__functions-table-body-cell-text_font">
                  ריחמ תאוושה
                </p>
              </td>
              <td className="mobile-app__functions-table-body-cell">
                <img
                  className="mobile-app__functions-table-body-cell-img mobile-app__functions-table-body-cell-img_size"
                  src={check}
                  alt="check"
                />
              </td>
            </tr>
            <tr className="mobile-app__functions-table-body-row mobile-app__functions-table-body-row_style">
              <td className="mobile-app__functions-table-body-cell">
                <p className="mobile-app__functions-table-body-cell-text mobile-app__functions-table-body-cell-text_font">
                  תונימז תקידב
                </p>
              </td>
              <td className="mobile-app__functions-table-body-cell">
                <img
                  className="mobile-app__functions-table-body-cell-img mobile-app__functions-table-body-cell-img_size"
                  src={check}
                  alt="check"
                />
              </td>
            </tr>
            <tr className="mobile-app__functions-table-body-row mobile-app__functions-table-body-row_style">
              <td className="mobile-app__functions-table-body-cell">
                <p className="mobile-app__functions-table-body-cell-text mobile-app__functions-table-body-cell-text_font">
                  תחטבואמו תילטיגיד הנמזה
                </p>
              </td>
              <td className="mobile-app__functions-table-body-cell">
                <img
                  className="mobile-app__functions-table-body-cell-img mobile-app__functions-table-body-cell-img_size"
                  src={check}
                  alt="check"
                />
              </td>
            </tr>
            <tr className="mobile-app__functions-table-body-row mobile-app__functions-table-body-row_style">
              <td className="mobile-app__functions-table-body-cell">
                <p className="mobile-app__functions-table-body-cell-text mobile-app__functions-table-body-cell-text_font">
                  הסיבכה ךילהת לע תמא ןמזב בקעמ
                </p>
              </td>
              <td className="mobile-app__functions-table-body-cell">
                <img
                  className="mobile-app__functions-table-body-cell-img mobile-app__functions-table-body-cell-img_size"
                  src={check}
                  alt="check"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mobile-app__phone-screen mobile-app__phone-screen_size">
        <img
          className="mobile-app__phone-screen-img mobile-app__phone-screen-img_style"
          src={phone}
          alt="phone"
        />
      </div>
    </section>
  );
};

export default MobileApp;
