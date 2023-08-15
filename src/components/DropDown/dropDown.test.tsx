import DropDown, { DropDownPropsType } from './dropDown';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test if dropDown component works properly', () => {
  test('If the label is rendered properly', () => {
    const DropDownProps: DropDownPropsType = {
      label: 'This is the label for dropDown',
      options: ['abc', 'def', 'ghe']
    };

    render(<DropDown {...DropDownProps} />);
    const element = screen.getByTestId('dropDown label test');

    expect(element.innerHTML).toBe('This is the label for dropDown');
  });

  test('If the options array is rendered properly', () => {
    const DropDownProps: DropDownPropsType = {
      label: 'hello',
      options: ['abc', 'def', 'ghe']
    };

    render(<DropDown {...DropDownProps} />);
    const optionElements = screen.getAllByRole('option');

    expect(optionElements.length).toBe(3);
  });

  test('If onChange is called with selected value', () => {
    const handleSelected = jest.fn();
    const DropDownProps: DropDownPropsType = {
      label: 'hello',
      options: ['abc', 'def', 'ghe']
    };

    render(<DropDown {...DropDownProps} onChange={handleSelected} />);
    const element = screen.getByTestId('dropDown select test');

    fireEvent.change(element, { target: { value: 'def' } });

    expect(handleSelected).toHaveBeenCalledWith('def');
  });
});
