import index from '../src/index';

describe('setting up the tests', () => {
  it('wallaby tests should run', () => {
    expect(index).to.exist;
  });
});
