import axios from 'axios';

import Dev from '../models/Dev';

class DevController {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const response = await axios.get(
      `https://api.github.com/users/${github_username}` // eslint-disable-line
    );

    const { name = login, login, bio, avatar_url } = response.data; // eslint-disable-line

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    try {
      const dev = await Dev.create({
        name,
        bio,
        avatar_url,
        github_username,
        techs: techsArray,
        location,
      });

      return res.status(201).json(dev);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new DevController();
