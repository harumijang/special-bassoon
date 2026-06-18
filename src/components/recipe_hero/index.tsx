const RecipeHero = ({ 
  title = "Buttermilk Cloud Pancakes", 
  prepTime = "10 MINS",
  cookTime = "15 MINS",
  image,
}) => {
  const backgroundUrl = image?.src ? `url(${image.src})` : undefined;

  return (
    <section className="relative w-full h-[65vh] flex items-center bg-stone-900">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: backgroundUrl }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest">Featured Recipe</span>
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest self-center">Classic Comfort</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            {title}
          </h1>
          <div className="flex gap-8 border-t border-white/20 pt-6">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-tighter">Prep</p>
              <p className="text-white font-mono">{prepTime}</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-tighter">Cook</p>
              <p className="text-white font-mono">{cookTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeHero;