import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';

import Signup from '../_containers/signup-container';

describe('<Signup />', () => {

  const testState = {
    card: {
      cards: []
    },
    point: {
      points: '30',
      initialPoints: '10'
    },
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {

    shallow(
      <Provider store={testStore}>
        <Signup />
      </Provider>
    );
  });

})