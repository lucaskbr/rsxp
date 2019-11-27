import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <section>
      <Route path="/" exact component={Home} />
    </section>
  );
}
