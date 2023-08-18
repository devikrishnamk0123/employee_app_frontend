import { render, screen } from '@testing-library/react';
import Status, { StatusPropsTypes } from './status';

describe('Status component works properly', () => {
  test('If background color is light green when status is Active', () => {
    const statusProps: StatusPropsTypes = {
      isActive: 'Active'
    };

    render(<Status {...statusProps} />);
    const element = screen.getByTestId('status test');

    expect(element.style.backgroundColor).toBe('rgb(211, 244, 190)');
  });
  test('If background color is purple when status is Inactive', () => {
    const statusProps: StatusPropsTypes = {
      isActive: 'Inactive'
    };

    render(<Status {...statusProps} />);
    const element = screen.getByTestId('status test');

    expect(element.style.backgroundColor).toBe('rgb(255, 191, 191)');
  });
});
