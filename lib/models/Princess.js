const pool = require('../utils/pool');

module.exports = class Princess {
  id;
  name;
  age;
  movie;
  year;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.movie = row.movie;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM princesses;');
    return rows.map((row) => new Princess(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM princesses WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Princess(rows[0]);
  }
};
