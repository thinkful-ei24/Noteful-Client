import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';

import Points from '../_components/points-component';

describe('<Points />', () => {

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
    shallowWithStore(<Points />, testStore);
  });

  it('Prints correct amount of points', () => {

    const wrapper = mount(
      <Provider store={testStore}>
        <Points />
      </Provider>);

    const total = testState.point.initialPoints + testState.point.points;
    expect(wrapper.contains(total)).toEqual(true);
  })

})