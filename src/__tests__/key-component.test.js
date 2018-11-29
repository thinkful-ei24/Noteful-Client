import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';
import store from '../store';

import Key from '../_components/key-component';

describe('<Key />', () => {

  const testState = {
    note: 'C',
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Key />, testStore);
  });

  it('Renders without crashing', () => {
    const wrapper = mount(
      <Provider store={testStore}>
        <Key />
      </Provider>
    );

  });

})