export default class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = `HTTPError`;
    this.statusCode = statusCode;
  }

  get codeToErrorMessage() {
    let result = { message: '', success: false };
    switch (this.statusCode) {
      case 400:
        result = {
          message: '동일한 이메일이 이미 존재합니다.',
          success: false,
        };
        break;
      case 401:
        result = {
          message: '이메일 혹은 비밀번호를 확인해주세요.',
          success: false,
        };
        break;
      case 404:
        result = {
          message: '해당 사용자가 존재하지 않습니다.',
          success: false,
        };
        break;
      default:
        throw new Error('Unknown Error');
    }
    return result;
  }
}
