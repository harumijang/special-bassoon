const Hero = ({
  layout = 'left', // 'left' | 'center'
  preHeading,
  heading,
  headingElement: HeadingTag = 'h1',
  headingSize = 'large',
  text,
  textColor = 'dark',
  backgroundImage,
  darkenImage = false,
}) => {
  // Handle Background Image Logic
  const backgroundImageUrl = backgroundImage?.src ? `url(${backgroundImage.src})` : undefined;
  
  // Replace CVA logic with a simple template literal
  const overlayStyles = `flex flex-col h-full w-full px-8 py-16 justify-center ${
    darkenImage ? 'backdrop-brightness-75 bg-black/20' : ''
  }`;

  // Mapping for heading sizes
  const headingSizeClasses = {
    small: 'text-3xl md:text-4xl',
    medium: 'text-4xl md:text-6xl',
    large: 'text-5xl md:text-7xl font-bold',
  };

  // Text color logic
  const textColors = textColor === 'dark' ? 'text-gray-900' : 'text-white';

  return (
    <section
      className="relative flex min-h-[672px] w-full items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <div className={overlayStyles}>
        <div className={`max-w-7xl mx-auto w-full grid gap-8 ${layout === 'center' ? 'text-center' : 'grid-cols-1 md:grid-cols-2'}`}>
          
          {/* Content Wrapper */}
          <div className="flex flex-col space-y-6">
            {preHeading && (
              <span className={`uppercase tracking-widest text-sm font-semibold ${textColors}`}>
                {preHeading}
              </span>
            )}
            
            <HeadingTag className={`${headingSizeClasses[headingSize]} ${textColors} leading-tight drop-shadow-md`}>
              {heading}
            </HeadingTag>

            {text && (
              <p className={`text-lg md:text-xl max-w-2xl ${textColors} opacity-90`}>
                {text}
              </p>
            )}
          </div>

          {/* This empty div helps maintain the Two-Column layout if layout is not 'center' */}
          {layout !== 'center' && <div className="hidden md:block" />}
        </div>
      </div>
    </section>
  );
};

export default Hero;