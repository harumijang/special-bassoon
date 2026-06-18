import { formatTitle } from '@/lib/formatTitle';

export default function Example({ title = 'Hello' }) {
  return <h2 className="text-blue-500"> Uses helper function from local folder: {formatTitle(title)}</h2>;
}
