module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 25432,
  username: 'docker',
  password: 'docker',
  database: 'omnistack10',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
