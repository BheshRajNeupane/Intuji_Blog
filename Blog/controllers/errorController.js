// Global Error Handaling    

const AppError = require('./../utils/appError');

//handleCastErrorDB
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path} : ${err.value} .`;
  return new AppError(message, 400);
};

const handleDublicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Dublicate field value : ${value} Please use another value`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  // err = req
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    ///true
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  else {
    //1.Log error
    console.error('**ERROR**', err.message);

    //2.Send Generic Message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode  || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
  
    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
    }

    if (error.code === 11000) {
      error = handleDublicateFieldsDB(error);
    }
  
    sendErrorProd(err, res);
  }
};
