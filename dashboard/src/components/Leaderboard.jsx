import { Card, Text, Progress, Stack, Group, Badge } from '@mantine/core';
import { candidates } from '../data/candidates';

const top10 = [...candidates]
  .sort((a, b) => b.total - a.total)
  .slice(0, 10);

export default function Leaderboard() {
  return (
    <Stack spacing="sm">
      {top10.map((c, index) => (
        <Card key={c.id} shadow="sm" radius="md" withBorder>
          <Group position="apart" align="flex-start">
            <Group>
              <Badge radius="xl" color="gray">
                #{index + 1}
              </Badge>
              <div>
                <Text fw={500}>{c.name}</Text>
                <Text size="xs" c="dimmed">
                  {c.experience} yrs experience
                </Text>
              </div>
            </Group>

            <Text fw={600}>{c.total} / 30</Text>
          </Group>

          <Progress
            value={(c.total / 30) * 100}
            color="green"
            radius="xl"
            size="sm"
            mt="sm"
          />
        </Card>
      ))}
    </Stack>
  );
}
