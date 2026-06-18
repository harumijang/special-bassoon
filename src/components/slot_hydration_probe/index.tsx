'use client';

import { useState } from 'react';

const SlotHydrationProbe = ({ title, content, note }) => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="my-4 rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-4">
      <p className="text-xs font-semibold tracking-wide text-fuchsia-700 uppercase">
        Client hydration slot probe
      </p>
      <h3 className="mt-2 text-lg font-semibold text-fuchsia-950">{title}</h3>
      <p className="mt-2 text-sm text-fuchsia-900">
        Hydration clicks: <strong>{clickCount}</strong>
      </p>
      <button
        className="mt-3 rounded-md bg-fuchsia-700 px-3 py-2 text-sm font-semibold text-white hover:bg-fuchsia-800"
        onClick={() => setClickCount((currentCount) => currentCount + 1)}
        type="button"
      >
        Increment hydration counter
      </button>
      <div className="mt-4 rounded-lg border border-fuchsia-100 bg-white p-3">
        <p className="mb-2 text-xs font-semibold tracking-wide text-fuchsia-600 uppercase">
          Content slot
        </p>
        {content}
      </div>
      <div className="mt-3 rounded-lg border border-fuchsia-100 bg-white p-3">
        <p className="mb-2 text-xs font-semibold tracking-wide text-fuchsia-600 uppercase">
          Note slot
        </p>
        {note}
      </div>
    </section>
  );
};

export default SlotHydrationProbe;
