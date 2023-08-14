import Button, { ButtonPropType } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('If Button works properly', () => {
  test('If text rendered correctly', () => {
    const ButtonProps: ButtonPropType = {
      text: 'This is a button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.innerHTML).toBe('This is a button');
  });

  test('If onCick works properly', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropType = {
      text: 'This is a button',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(1);
  });
});
