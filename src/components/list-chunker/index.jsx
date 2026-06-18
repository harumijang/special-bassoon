import { chunk } from 'lodash-es';

const splitItems = (itemsText, groupSize) => {
  const values = itemsText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return chunk(values, Math.max(1, groupSize));
};

const ListChunker = ({
  title = 'Chunked list',
  items = 'Alpha, Beta, Gamma, Delta, Epsilon, Zeta',
  groupSize = 2,
}) => {
  const groups = splitItems(items, groupSize);

  return (
    <section className="space-y-3 rounded-lg border border-slate-200 p-4">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="space-y-2">
        {groups.map((group, index) => (
          <p key={`group-${index}`} className="text-sm text-slate-700">
            <span className="font-medium">Group {index + 1}:</span>{' '}
            {group.join(', ')}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ListChunker;
