CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  experience_years INT,
  skills TEXT
);

CREATE TABLE evaluations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  candidate_id INT,
  crisis_management_score INT,
  sustainability_score INT,
  team_motivation_score INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
  candidate_id INT PRIMARY KEY,
  total_score INT,
  rank_position INT,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE VIEW candidate_rankings AS
SELECT
  c.id,
  c.name,
  (e.crisis_management_score +
   e.sustainability_score +
   e.team_motivation_score) AS total_score
FROM candidates c
JOIN evaluations e ON c.id = e.candidate_id
ORDER BY total_score DESC;
