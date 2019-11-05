const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;

const records = [
  { id: 1, username: 'jack', token: '123456789', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
  , { id: 2, username: 'jill', token: 'abcdefghi', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

const findByToken = (token, cb) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      const record = records[i];
      if (record.token === token) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};

const initPassport = () => {
  // Configure the Bearer strategy for use by Passport.
  //
  // The Bearer strategy requires a `verify` function which receives the
  // credentials (`token`) contained in the request.  The function must invoke
  // `cb` with a user object, which will be set at `req.user` in route handlers
  // after authentication.
  passport.use(new Strategy(
    (token, cb) => {
      findByToken(token, (err, user) => {
        if (err) { return cb(err); }
        if (!user) {
          return cb(null, false);
        }
        return cb(null, user);
      });
    }));

};

const authentication = (req, res, next) => {
  passport.authenticate('bearer', {session: false}, function(err, user, info) {
    if (err) { return next(err); }

    //authentication error
    if (!user) {
      res.status(401).send('Access Denied');
      return;
    }

    //success
    return next();

  })(req, res, next)
};

module.exports = { initPassport, passport, authentication };