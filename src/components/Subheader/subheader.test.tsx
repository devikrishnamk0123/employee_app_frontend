import { render, screen } from '@testing-library/react';
import SubHeader, { SubHeaderPropTypes } from './subheader';

describe('If subheader component works properly', () => {
  test('If label is rendered properly', () => {
    const subheaderprops: SubHeaderPropTypes = {
      label: 'hello'
    };

    render(<SubHeader {...subheaderprops} />);
    const element = screen.getByTestId('label test');

    expect(element.innerHTML).toBe('hello');
  });

  test('if renders the button and images when buttonLabel and imgSrc props are passed', () => {
    const subheaderprops: SubHeaderPropTypes = {
      label: 'hello',
      buttonLabel: 'buttonLabel',
      imgSrc: 'test.png'
    };

    render(<SubHeader {...subheaderprops} />);
    const buttonElement = screen.getByTestId('button label test');

    expect(buttonElement.innerHTML).toBe('buttonLabel');
    //const imageElement = screen.getByTestId('image test');
  });
});
