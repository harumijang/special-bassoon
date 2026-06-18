const ImageCard = ({ 
  image, 
  title, 
  authorName, 
  publishDate 
}) => {
  return (
    <div className="group max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image.src}
            alt="test image caption"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
            <span className="text-xs uppercase tracking-widest font-medium">No Image Available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-slate-900 line-clamp-2">
          {title || "Untitled Post"}
        </h3>
        
        <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
          {/* Avatar Placeholder */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-900">{authorName || "Anonymous"}</span>
            <span className="text-xs text-slate-500">{publishDate || "Just now"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;