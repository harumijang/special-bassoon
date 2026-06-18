const SlotMixedSlots = ({ title, content, sidebar, footer }) => {
  return (
    <section className="my-6 rounded-2xl border border-slate-300 bg-slate-50 p-5">
      <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
        Default + named slots
      </p>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Content (default slot)
          </p>
          {content}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Sidebar (named slot)
          </p>
          {sidebar}
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Footer (named slot)
        </p>
        {footer}
      </div>
    </section>
  );
};

export default SlotMixedSlots;
