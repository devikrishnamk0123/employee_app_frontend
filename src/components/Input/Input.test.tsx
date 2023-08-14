import Input, { InputPropType } from './Input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('If Input works properly', () => {
  test('If placeholder rendered properly', () => {
    const InputProps: InputPropType = {
      type: 'text',
      placeholder: 'default placeholder'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element.getAttribute('placeholder')).toBe('default placeholder');
  });

  test('If type:text rendered properly', () => {
    const InputProps: InputPropType = {
      type: 'text',
      placeholder: 'hello'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element.getAttribute('type')).toBe('text');
    expect(element).toMatchSnapshot();
  });

  test('If value rendered properly', () => {
    const InputProps: InputPropType = {
      type: 'text',
      placeholder: 'hello',
      value: 'hello world'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element.getAttribute('value')).toBe('hello world');
    expect(element).toMatchSnapshot();
  });

  test('If onChange triggered properly', () => {
    const onChange = jest.fn();
    const InputProps: InputPropType = {
      type: 'text',
      placeholder: 'hello',
      value: 'hello world',
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    fireEvent.change(element);

    expect(onChange).toBeCalledTimes(1);
  });
});
