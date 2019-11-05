const logger = require('log4js').getLogger('app');

// map contains ip, number of attempts, firstReqTime
const map = {};

const LIMIT = 60000;

module.exports = (req, res, next) => {

  const record = map[req.ip];
  const currTime = Date.now();

  if (record != null) {
    if ((currTime - record.firstReqTime) < LIMIT) {
      ++record.attempts;
      if (record.attempts >= 20) {
        logger.info(`${req.ip} has reached maximum number of requests within ${LIMIT/1000}s. Sending 'Robot Detected' Request Count : ${record.attempts}`);
        res.status(403).send('Robot Detected');
        return;
      }
      logger.info(`${req.ip} has reached service ${record.attempts} within ${LIMIT/1000}s`)
    } else {
      map[req.ip] = { attempts: 1, firstReqTime: currTime };
    }
  } else {
    map[req.ip] = { attempts: 1, firstReqTime: currTime };
  }

  next();
};