const Card = ({ title, description, badgeText, price, testSlot }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-hover hover:shadow-lg">
      {/* Decorative Header Area */}
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        {badgeText && (
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {badgeText}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6">
         {testSlot}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          {price && <span className="text-lg font-bold text-indigo-600">{price}</span>}
        </div>
        
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description || "No description provided for this item."}
        </p>

        {/* Action Button */}
        <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:bg-slate-950">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
