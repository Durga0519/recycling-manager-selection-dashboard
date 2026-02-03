import {
  Card,
  Text,
  Badge,
  Group,
  Progress,
  Stack,
  Divider,
  Button,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { IconShare } from '@tabler/icons-react';

export default function CandidateCard({ candidate }) {
  const handleShare = () => {
    // Mock HR workflow action
    alert(`Candidate profile shared with HR:\n\n${candidate.name}`);
  };

  return (
    <Card shadow="md" radius="lg" p="lg" withBorder>
      <Stack spacing="xs">
        {/* Header */}
        <Group position="apart">
          <Text fw={600} size="lg">
            {candidate.name}
          </Text>

          <Group spacing="xs">
            <Badge color="green" variant="light">
              {candidate.total} / 30
            </Badge>

            <Tooltip label="Share with HR">
              <ActionIcon
                variant="light"
                color="gray"
                onClick={handleShare}
              >
                <IconShare size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>

        <Text size="sm" c="dimmed">
          {candidate.experience} years experience
        </Text>

        {/* Score Progress */}
        <Progress
          value={(candidate.total / 30) * 100}
          radius="xl"
          size="md"
          mt="xs"
        />

        <Divider my="sm" />

        {/* Skills */}
        <Group spacing="xs">
          {candidate.skills.map((skill, index) => (
            <Badge key={index} variant="outline" color="green">
              {skill}
            </Badge>
          ))}
        </Group>

        {/* Detailed Scores */}
        <Group grow mt="sm">
          <Badge color="red" variant="light">
            Crisis: {candidate.crisis}
          </Badge>
          <Badge color="teal" variant="light">
            Sustainability: {candidate.sustainability}
          </Badge>
          <Badge color="blue" variant="light">
            Motivation: {candidate.motivation}
          </Badge>
        </Group>

        {/* Footer Action */}
        <Button
          variant="light"
          size="xs"
          mt="sm"
          leftSection={<IconShare size={14} />}
          onClick={handleShare}
        >
          Share Candidate
        </Button>
      </Stack>
    </Card>
  );
}
