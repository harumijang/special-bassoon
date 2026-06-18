const SlotMultiNamed = ({ title, lead, supporting, actions }) => {
  return (
    <section className="my-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
        Multiple named slots
      </p>
      <h3 className="mt-2 text-lg font-semibold text-emerald-950">{title}</h3>
      <div className="mt-3 space-y-3">
        <div className="rounded-lg border border-emerald-100 bg-white p-3">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600 uppercase">
            Lead
          </p>
          {lead}
        </div>
        <div className="rounded-lg border border-emerald-100 bg-white p-3">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600 uppercase">
            Supporting
          </p>
          {supporting}
        </div>
        <div className="rounded-lg border border-emerald-100 bg-white p-3">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600 uppercase">
            Actions
          </p>
          {actions}
        </div>
      </div>
    </section>
  );
};

export default SlotMultiNamed;
