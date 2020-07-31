class HttpErrorHandler extends Error {
  constructor(message, errorCode) {
    super(message); //Adds a message property
    this.code = errorCode; //adds error code
  }
}

module.exports = HttpErrorHandler;
