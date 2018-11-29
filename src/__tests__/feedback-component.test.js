import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';
import store from '../store';

import Feedback from '../_components/feedback-component';

describe('<Feedback />', () => {

  const testState = {
    auth: {
      user: 'Test'
    },
    note: {
      noteDisplayed: 'C',
      selectedKey: ''
    },
  }
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Feedback />, testStore);
  });

  it('Displays general feedback', () => {
    const wrapper = mount(
      <Provider store={testStore}>
        <Feedback />
      </Provider>
    );
    let mes = 'What note is this?';
    expect(wrapper.contains(mes)).toEqual(true);
  });


  it('Displays correct note feedback', () => {
    const testState = {
      auth: {
        user: 'Test'
      },
      note: {
        noteDisplayed: 'C',
        selectedKey: 'C'
      },
    }
    const testStore = createMockStore(testState);

    const wrapper = mount(
      <Provider store={testStore}>
        <Feedback />
      </Provider>
    );
    let mes = `You're correct!`;
    expect(wrapper.contains(mes)).toEqual(true);
  });

})