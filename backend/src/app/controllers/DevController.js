import axios from 'axios';

import Dev from '../models/Dev';

class DevController {
  async store(req, res) {
    const { github_username, techs } = req.body;

    const response = await axios.get(
      `https://api.github.com/users/${github_username}` // eslint-disable-line
    );

    const { name = login, login, bio, avatar_url } = response.data; // eslint-disable-line

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
      name,
      bio,
      avatar_url,
      github_username,
      techs: techsArray,
    });

    return res.status(201).json(dev);
  }
}

export default new DevController();
