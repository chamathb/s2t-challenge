const {PATHS, HTTP_METHODS} = require('../conf');

const getHandler = (req, res) => {
  console.log(req.query);
};

module.exports = {
  facialRecognitionDocs: {
    [PATHS.FACIAL_ANALYZER]: [{
      method: HTTP_METHODS.GET,
      handler: getHandler,
    }],
  }
};