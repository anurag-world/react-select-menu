/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Data from '../data/list.json';
import DataExt from '../data/listExt.json';

test('App Snapshot Test', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.createElement('root')
  );
});

// Data Check
test('Data is available for the list of simple menu items', () => {
  expect(Data).toEqual(expect.arrayContaining(Data));
});

test('Data is available for the list of extended menu items', () => {
  expect(DataExt).toEqual(expect.arrayContaining(DataExt));
});
