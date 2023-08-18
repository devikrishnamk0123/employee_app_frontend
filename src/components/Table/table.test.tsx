
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
});
describe('If table is redered properly', () => {
  test('If header of table is rendered correctly', () => []);
});
