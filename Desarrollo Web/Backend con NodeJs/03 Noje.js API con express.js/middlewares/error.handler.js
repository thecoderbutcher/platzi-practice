
function logErrors(err, req, res, next){
  console.error(err);
  next(err)
}

function errorHanler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHanler(err, req, res, next){
  if(err.isboom){
    const {output} = err;
    res.status(err.statusCode).json(output.payload)
  }else{
    next(err)
  }
}

module.exports = {logErrors, errorHanler}

