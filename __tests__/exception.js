import Exception from '../src/exception';

describe('Exception module', () => {
  const exception = new Exception("Test Exception", "Exception instance");
  it('can make instance.', () => {
    expect(exception).toBeInstanceOf(Exception);
  });
});