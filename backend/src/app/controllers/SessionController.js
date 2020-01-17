import jwt from 'jsonwebtoken';

import Dev from '../models/Dev';

class SessionController {
  async store(req, res) {
    const { username, password } = req.body;

    const dev = await Dev.findOne({ where: { github_username: username } });

    if (!dev) return res.status(401).json({ error: 'Invalid credentials.' });

    if (!(await dev.checkPassword(password)))
      return res.status(401).json({ error: 'Invalid credentials.' });

    const payload = {
      id: dev.id,
      name: dev.name,
      username: dev.github_username,
      avatar_url: dev.avatar_url,
      techs: dev.techs,
      location: dev.location,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.json({ ...payload, token });
  }
}

export default new SessionController();
