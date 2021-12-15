export default class Validator {
  static validateUsername(nickname) {
    const regRule = /^[a-zA-Z]+[a-zA-Z][-_]?[0-9]{0,3}[-_]?[a-zA-Z]+$/;
    return regRule.test(nickname);
  }
}
