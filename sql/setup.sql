-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists princesses;

CREATE table princesses (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  movie VARCHAR NOT NULL,
  year INT NOT NULL
);

INSERT INTO princesses (name, age, movie, year) VALUES
('Snow White', 14, 'Snow White and the Seven Dwarfs', 1937),
('Cinderella', 19, 'Cinderella', 1950),
('Aurora', 16, 'Sleeping Beauty', 1959),
('Ariel', 16, 'The Little Mermaid', 1989),
('Belle', 17, 'Beauty and the Beast', 1991),
('Jasmine', 16, 'Aladdin', 1992),
('Pocahontas', 18, 'Pocahontas', 1995),
('Mulan', 16, 'Mulan', 1998),
('Tiana', 19, 'The Princess and the Frog', 2009),
('Rapunzel', 18, 'Tangled', 2010),
('Merida', 16, 'Brave', 2012),
('Elsa', 21, 'Frozen', 2013),
('Anna', 18, 'Frozen', 2013),
('Moana', 15, 'Moana', 2016);