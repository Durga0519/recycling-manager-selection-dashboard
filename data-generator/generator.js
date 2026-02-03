import { faker } from '@faker-js/faker';
import fs from 'fs';

const candidates = [];

for (let i = 0; i < 40; i++) {
  candidates.push({
    name: faker.person.fullName(),
    experience_years: faker.number.int({ min: 2, max: 20 }),
    skills: faker.helpers.arrayElements(
      [
        'Lean Manufacturing',
        'Six Sigma',
        'Safety Compliance',
        'Team Leadership',
        'Sustainability'
      ],
      faker.number.int({ min: 2, max: 4 })
    ).join(', ')
  });
}

fs.writeFileSync(
  '../sql/sample-candidates.json',
  JSON.stringify(candidates, null, 2)
);

console.log('40 candidates generated.');
