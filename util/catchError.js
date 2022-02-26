exports.catchError = (err, req, res, next) => {
  const error = new Error(err);
  error.httpStatusCode = 500;
  return next(error);
};

//check
