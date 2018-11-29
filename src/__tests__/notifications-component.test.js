import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';

import Notif from '../_components/notifications-component';

describe('<Notif />', () => {

  const testState = {
    auth: {
      notifLoggedIn: true
    },
  };
  const testStore = createMockStore(testState);

  it('Renders without crashing', () => {
    shallowWithStore(<Notif />, testStore);
  });

  // it('does other things', () => {
  //   mount(
  //     <Provider store={store}>
  //       <Notif />
  //     </Provider>
  //   );
  // });

});