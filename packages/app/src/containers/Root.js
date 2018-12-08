import React from 'react';
import { hot } from 'react-hot-loader';

import { TestComponent } from 'atlantis-ui/src/TestComponent';

const Root = () => (
  <div>
    Hello world Artem and Anna!
    <TestComponent />
  </div>
);

export default hot(module)(Root);