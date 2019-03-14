import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1, 'ismaeljtl', '12345', true, 15000.00)).toBeTruthy();
  });
});
