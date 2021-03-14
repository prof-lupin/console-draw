import HelloFunc from '../index';

test('should return string hello', () => {
    let res=HelloFunc();
    expect(res).toBe('Hello');
});