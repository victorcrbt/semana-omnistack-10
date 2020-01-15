import axios from 'axios';

import parseStringAsArray from '../../utils/parseStringAsArray';
import Dev from '../models/Dev';

class DevController {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username });

    if (devExists)
      return res.status(409).json({ error: 'Dev already registered.' });
    try {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}` // eslint-disable-line
      );

      if (response.status === 404) return console.log('erro');

      const { name, login, bio, avatar_url } = response.data; // eslint-disable-line

      const techsArray = parseStringAsArray(techs, ',');

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      try {
        const dev = await Dev.create({
          name: name || github_username,
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
    } catch (error) {
      return res.status(404).json({ error: 'GitHub user not found.' });
    }
  }
}

export default new DevController();
