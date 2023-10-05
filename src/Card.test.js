import {render} from '@testing-library/react';
import App from './App';
import Card from './Card';

// smoke test
test('it renders without crashing', () => {
  render(<Card />);
});

// snapshot test
test('it matches snapshot', () => {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});