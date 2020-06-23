import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('axios', () => {
  const exampleArticles = [{ title: 'test article', url: 'test url' }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});

const axios = require('axios');

it('fetch articles on #componentDidMount', () => {
  const app = shallow(<App />);
  app
    .instance()
    .componentDidMount()
    .then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('articles_url');
      expect(app.state()).toHaveProperty('articles', [
        { title: 'test article', url: 'test url' },
      ]);
      done();
    });
});
