'use client';

import { useState } from 'react';

const IngredientScaler = () => {
  const [servings, setServings] = useState(2);
  
  const ingredients = [
    { name: "All-purpose Flour", amount: 0.5, unit: "cups" },
    { name: "Fresh Buttermilk", amount: 0.5, unit: "cups" },
    { name: "Melted Butter", amount: 1.5, unit: "tbsp" },
    { name: "Large Eggs", amount: 0.5, unit: "pcs" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 relative z-20">
      <div className="max-w-md bg-white border border-stone-200 p-8 rounded-2xl shadow-2xl -mt-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-2xl text-stone-800">Ingredients</h3>
          <div className="flex items-center gap-3 bg-stone-50 rounded-full px-3 py-1.5 border border-stone-200">
            <button 
              onClick={() => setServings(Math.max(1, servings - 1))}
              className="text-stone-400 hover:text-orange-600 font-bold px-2 transition-all active:scale-125"
            >–</button>
            <span className="text-sm font-bold text-stone-900 w-12 text-center select-none whitespace-nowrap">
                {servings} {servings === 1 ? 'stack' : 'stacks'}
            </span>
            <button 
              onClick={() => setServings(servings + 1)}
              className="text-stone-400 hover:text-orange-600 font-bold px-2 transition-all active:scale-125"
            >+</button>
          </div>
        </div>

        <ul className="space-y-5">
          {ingredients.map((item, i) => (
            <li key={i} className="flex justify-between items-center text-sm border-b border-stone-50 pb-3 last:border-0">
              <span className="text-stone-500 font-sans tracking-tight">{item.name}</span>
              <span className="font-mono font-bold text-stone-900 bg-stone-100 px-3 py-1 rounded-md min-w-[80px] text-center">
                {(item.amount * servings).toFixed(1)} {item.unit}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-center gap-2">
           <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
           <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-semibold">
              Live Scaler Logic
           </p>
        </div>
      </div>
    </div>
  );
};
export default IngredientScaler;