import React from 'react';

import Spinner from '../ElementsAndActions/Spinner/Spinner';

const ElementWrapper: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  return <React.Suspense fallback={<Spinner />}>{element}</React.Suspense>;
};

export default ElementWrapper;
