import axios from 'axios';

import parseStringAsArray from '../../utils/parseStringAsArray';
import Dev from '../models/Dev';

class DevController {
  async index(req, res) {
    const devs = await Dev.findAll();

    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude, password } = req.body;

    const devExists = await Dev.findOne({ where: { github_username } });

    if (devExists)
      return res.status(409).json({ error: 'Dev already registered.' });

    try {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}` // eslint-disable-line
      );

      const { name, login, bio, avatar_url } = response.data; // eslint-disable-line

      const techsArray = parseStringAsArray(techs, ',');

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      try {
        const dev = await Dev.create({
          name: name || login,
          bio,
          avatar_url,
          github_username,
          techs: techsArray,
          location,
          password,
        });

        const sendSocketMessageTo = req.io.findConnections(
          { latitude, longitude },
          techsArray
        );

        req.io.sendMessage(sendSocketMessageTo, 'new-dev', dev);

        return res.status(201).json(dev);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    } catch (error) {
      if (error.response.status === 404)
        return res.status(404).json({ error: 'GitHub user not found.' });

      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async update(req, res) {
    const { name, techs, latitude, longitude, password } = req.body;

    const techsArray = parseStringAsArray(techs, ',');

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    try {
      const dev = await Dev.findByPk(req.dev_id);

      await dev.update({
        name,
        password,
        techs: techsArray,
        location,
      });

      const updatedDev = await Dev.findByPk(req.dev_id, {
        attributes: ['id', 'name', 'avatar_url', 'techs', 'location'],
      });

      return res.status(200).json(updatedDev);
    } catch (error) {
      return res.status(500).json({ error: error.status });
    }
  }
}

export default new DevController();
