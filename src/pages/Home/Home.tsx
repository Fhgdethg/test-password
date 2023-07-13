import React from 'react';

import PasswordForm from '../../components/PasswordModal/PasswordModal';

import s from './Home.module.scss';

const Home = () => {
  return (
    <main className={s.home}>
      <PasswordForm />
    </main>
  );
};

export default Home;
