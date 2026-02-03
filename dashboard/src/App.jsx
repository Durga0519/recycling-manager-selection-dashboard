import { Container, Title, Divider, SimpleGrid } from '@mantine/core';
import Leaderboard from './components/Leaderboard';
import SkillHeatmap from './components/SkillHeatmap';
import CandidateCard from './components/CandidateCard';
import { candidates } from './data/candidates';

export default function App() {
  return (
    <Container>
      <Title order={2} my="md">
        Recycling Manager Selection Dashboard
      </Title>

      <Leaderboard />

      <Divider my="lg" />

      <Title order={3}>Skill Heatmap (Top Candidates)</Title>
      <SkillHeatmap />

      <Divider my="lg" />

      <Title order={3}>Candidate Profiles</Title>
      <SimpleGrid cols={2}>
        {candidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
