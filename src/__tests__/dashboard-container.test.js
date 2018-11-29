import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';
import store from '../store';

import Dashboard from '../_containers/dashboard-container';

describe('<Dashboard />', () => {

  const testState = {
    auth: {
      user: 'Test'
    },
    note: {
      noteDisplayed: 'C',
      nextNote: 'D'
    },
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Dashboard />, testStore);
  });

  it('Renders without crashing', () => {
    shallow(
      <Provider store={testStore}>
        <Dashboard />
      </Provider>
    );
  });

})