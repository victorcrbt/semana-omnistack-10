import Sequelize, { Op } from 'sequelize';

import parseStringAsArray from '../../utils/parseStringAsArray';
import Dev from '../models/Dev';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs, ',');

    const devs = await Dev.findAll({
      where: {
        [Op.and]: [
          { techs: { [Op.contains]: techsArray } },
          Sequelize.fn(
            'ST_DWithin',
            Sequelize.col('location'),
            Sequelize.fn('ST_MakePoint', Number(longitude), Number(latitude)),
            10000
          ),
        ],
      },
    });

    return res.json(devs);
  }
}

export default new SearchController();
