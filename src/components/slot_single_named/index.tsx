const SlotSingleNamed = ({ title, rail }) => {
  return (
    <aside className="my-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <p className="text-xs font-semibold tracking-wide text-amber-700 uppercase">
        Single named slot: rail
      </p>
      <h3 className="mt-2 text-lg font-semibold text-amber-950">{title}</h3>
      <div className="mt-3 rounded-lg border border-amber-100 bg-white p-3">
        {rail}
      </div>
    </aside>
  );
};

export default SlotSingleNamed;
