'use client';

import confetti from 'canvas-confetti';

const fireConfetti = () => {
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.7 },
  });
};

const ConfettiButton = ({
  text = 'Celebrate',
  note = 'Hydrated client component using canvas-confetti.',
}) => {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <button
        type="button"
        onClick={fireConfetti}
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        {text}
      </button>
      <p className="mt-2 text-xs text-slate-600">{note}</p>
    </div>
  );
};

export default ConfettiButton;
