import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: 'No token presented.' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.dev_id = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token.' });
  }
};
