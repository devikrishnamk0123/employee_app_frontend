import { render, screen } from '@testing-library/react';
import Empdetails, { DetailsPropType } from './details';

describe('If Details work properly', () => {
  test('If data is rendered properly', () => {
    const detailsProps: DetailsPropType = {
      label: 'details',
      data: 'hello world'
    };

    render(<Empdetails {...detailsProps} />);
    const element = screen.getByTestId('details-test');

    expect(element.innerHTML).toBe('hello world');
  });

  test('If label for details is rendered properly', () => {
    const detailsProps: DetailsPropType = {
      label: 'details',
      data: 'hello world'
    };

    render(<Empdetails {...detailsProps} />);
    const element = screen.getByTestId('details-label-test');

    expect(element.innerHTML).toBe('details');
  });
});
