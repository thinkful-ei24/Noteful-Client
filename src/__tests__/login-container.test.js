import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import store from '../store';

import Login from '../_containers/login-container';

const testState = {
  auth: {
    user: 'Test'
  },
}
const testStore = createMockStore(testState);


describe('<Login />', () => {

  it('Renders without crashing', () => {
    shallow(
    <Provider store={testStore}>
      <Login />
    </Provider>);
  });

  // it('Renders without crashing', () => {
  //   const testState = {
  //     auth: {
  //       user: 'Test'
  //     },
  //   }
  //   const testStore = createMockStore(testState);

  //   shallowWithStore(<Login />, testStore);
  // });

})