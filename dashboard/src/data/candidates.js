import rawCandidates from './candidates.json';

function randomScore() {
  return Math.floor(Math.random() * 10) + 1;
}

export const candidates = rawCandidates.map((c, index) => {
  const crisis = randomScore();
  const sustainability = randomScore();
  const motivation = randomScore();

  return {
    id: index + 1,
    name: c.name,                 // ✅ REAL NAME
    experience: c.experience_years,
    skills: c.skills.split(', '), // ✅ REAL SKILLS
    crisis,
    sustainability,
    motivation,
    total: crisis + sustainability + motivation,
  };
});
