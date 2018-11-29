
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';

import Feedback from '../_components/feedback-component';

const FeedbackComponent =
  <Provider store={store}>
    <Feedback />
  </Provider>
;

describe('<Feedback />', () => {


  it('Renders without crashing', () => {
    shallow(FeedbackComponent);
  });

  it('Displays general feedback', () => {

    const wrapper = shallow((FeedbackComponent));
    expect(wrapper.contains(message)).toEqual(true);
  });


})