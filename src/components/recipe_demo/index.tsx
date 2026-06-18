export default function RecipeDemoPage({slot1, slot2, slot3}) {
  return (
    <main className="bg-[#fafaf9] min-h-screen font-sans">
      {slot1}

      {/* The Interactive Scaler from previous response */}
      <div className="px-8">
        {slot2}
      </div>
      {slot3}
      {/* Small Footer Demo */}
      <footer className="py-12 border-t border-stone-200 text-center">
        <p className="text-stone-400 text-sm tracking-widest uppercase">
          &copy; 2024 Culinaria Digital
        </p>
      </footer>
    </main>
  );
}