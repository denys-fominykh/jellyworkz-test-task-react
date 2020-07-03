import React, { FC, Fragment } from 'react';

import './App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
