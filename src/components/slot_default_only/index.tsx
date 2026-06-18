const SlotDefaultOnly = ({ title, content }) => {
  return (
    <section className="my-4 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <p className="text-xs font-semibold tracking-wide text-indigo-700 uppercase">
        Default slot only
      </p>
      <h3 className="mt-2 text-lg font-semibold text-indigo-950">{title}</h3>
      <div className="mt-3 rounded-lg border border-indigo-100 bg-white p-3">
        {content}
      </div>
    </section>
  );
};

export default SlotDefaultOnly;
