import { render, screen } from '@testing-library/react';
import Header from './header';

describe('If header works properly', () => {
  test('If header rendered properly', () => {
    render(<Header />);
    const element = screen.getByTestId('test for header');

    expect(element).toMatchSnapshot();
  });
});
