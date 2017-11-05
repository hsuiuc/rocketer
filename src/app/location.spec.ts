import {Location} from './location';

describe('Location', () => {
  it('should create an instance', () => {
    expect(new Location()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const location = new Location({
      address: 'hello',
      hidden: true
    });
    expect(location.address).toEqual('hello');
    expect(location.hidden).toEqual(true);
  });
});
