import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const RelativeTime = ({
  label = 'Published',
  isoDate = '2026-01-01T00:00:00Z',
}) => {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-base font-medium text-slate-900">
        {dayjs(isoDate).fromNow()}
      </p>
    </div>
  );
};

export default RelativeTime;
