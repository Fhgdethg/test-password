import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../../pages/Home/Home'));
import ElementWrapper from '../ElementWrapper/ElementWrapper';

import { routes } from '../../routes/routes';

function App() {
  return (
    <ElementWrapper
      element={
        <Routes>
          <Route
            path={routes.home}
            element={<ElementWrapper element={<Home />} />}
          />
          <Route
            path={routes.error}
            element={<ElementWrapper element={<Home />} />}
          />
        </Routes>
      }
    />
  );
}

export default App;
