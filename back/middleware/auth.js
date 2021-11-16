//----------------//
// Import package //
//----------------//
const jwt = require('jsonwebtoken');
//-------------------//
// Export middleware //
//-------------------//
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split('')[1];
    const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodeToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid UserId.';
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | 'Unauthenticated request.' });
  }
};
