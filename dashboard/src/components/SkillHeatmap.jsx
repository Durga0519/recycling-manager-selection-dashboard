import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { candidates } from '../data/candidates';

const data = [...candidates]
  .sort((a, b) => b.total - a.total)
  .slice(0, 5); // clarity > clutter

export default function SkillHeatmap() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="crisis" fill="#ff6b6b" name="Crisis Mgmt" />
        <Bar dataKey="sustainability" fill="#51cf66" />
        <Bar dataKey="motivation" fill="#339af0" />
      </BarChart>
    </ResponsiveContainer>
  );
}
