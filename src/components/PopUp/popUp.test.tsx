import { fireEvent, render, screen } from '@testing-library/react';
import PopUp, { PopUpPropsType } from './popUp';
jest.mock('../../Pages/Employee/employeeapi', () => ({
  useDeleteEmployeeMutation: jest.fn(() => [jest.fn()])
}));

describe('Test for PopUp', () => {
  test('If onClose function works properly when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const PopUpProps: PopUpPropsType = {
      empId: '123',
      onClose: onCloseMock
    };

    render(<PopUp {...PopUpProps} />);
    const element = screen.getByTestId('popUp Close Button');

    fireEvent.click(element);
    expect(onCloseMock).toBeCalledTimes(1);
  });
  test('If onClose function works properly when cancel button is clicked', () => {
    const onCloseMock = jest.fn();
    const PopUpProps: PopUpPropsType = {
      empId: '123',
      onClose: onCloseMock
    };

    render(<PopUp {...PopUpProps} />);
    const element = screen.getByTestId('popUp Cancel Button');

    fireEvent.click(element);
    expect(onCloseMock).toBeCalledTimes(1);
  });

  test('If confirm button works properly when clicked', () => {
    const onCloseMock = jest.fn();
    const PopUpProps: PopUpPropsType = {
      empId: '123',
      onClose: onCloseMock
    };

    render(<PopUp {...PopUpProps} />);
    const element = screen.getByTestId('popUp Confirm Button');

    fireEvent.click(element);
    expect(onCloseMock).toBeCalledTimes(1);
  });
});
