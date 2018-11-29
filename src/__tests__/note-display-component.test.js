import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../utils/shallowWithStore';

import NoteDisplay from '../_components/note-display-component';

describe('<NoteDisplay />', () => {

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
        <NoteDisplay />
      </Provider>
    );
  });

  // it('Renders without crashing', () => {
  //   const testState = {
  //     card: {
  //       cards: []
  //     },
  //     point: {
  //       points: '30',
  //       initialPoints: '10'
  //     },
  //   }
  //   const testStore = createMockStore(testState);

  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <NoteDisplay />
  //     </Provider>
  //   );
  // });

})