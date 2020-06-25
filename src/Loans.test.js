import React from 'react';
import { shallow } from 'enzyme';
import App from './Loans';

test('Average paragraph renders', () => {
  const wrapper = shallow(<App />);
  const amount = wrapper.find('p.average').text();
  expect(amount).toBe('No loans found for this interest rate');
});

test('Buttons are all displayed', () => {
  const wrapper = shallow(<App />);
  const amount = wrapper.find('button');
  expect(amount).toHaveLength(11);
});
