import Validator from './app';

const checkNickname = [
  ['Player', true],
  ['1Player', false],
  ['layer1', false],
  ['-Player-', false],
  ['Player*new', false],
  ['Player-new', true],
  ['Player1234new', false],
  ['Player12-new', true],
  ['Player_1new', true],
];
checkNickname.forEach((arrkey) => {
  test(`Check valid nickname: ${arrkey[0]}`, () => {
    expect(Validator.validateUsername(arrkey[0])).toBe(arrkey[1]);
  });
});
