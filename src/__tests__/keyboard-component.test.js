import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';
import store from '../store';

import Keyboard from '../_components/keyboard-component';

describe('<Keyboard />', () => {

  const testState = {
    note: {
      noteDisplayed: 'C',
      selectedKey: '',
      keyboardDisabled: false
    },
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Keyboard />, testStore);
  });

})