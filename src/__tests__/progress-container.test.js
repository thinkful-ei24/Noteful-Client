import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';


import Progress from '../_containers/progress-container';

describe('<Progress />', () => {

  const testState = {
    auth: {
      user: 'Test'
    },
    card: {
      cards: []
    }
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Progress />, testStore);
  });

})