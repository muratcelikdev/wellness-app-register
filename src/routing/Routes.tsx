import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from 'modules/home/Home';

import { PATHS } from 'routing/paths';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={PATHS.HOME} element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
