import { nanoid } from 'nanoid';

const IdBadge = ({ label = 'Build ID', prefix = 'run' }) => {
  const generatedId = `${prefix}-${nanoid(8)}`;

  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-sm text-white">
      <span className="font-semibold">{label}</span>
      <code className="rounded bg-white/10 px-2 py-1 font-mono">
        {generatedId}
      </code>
    </div>
  );
};

export default IdBadge;
