const ProductImages = ({images}) => {
// GalleryLayout.jsx
  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows gap-6 lg:px-25 md:px-15 px-10 lg:mt-30 mt-15">
      {images.map((img, index) => (
        <figure key={index} className="group w-full h-70 overflow-hidden rounded-xl shadow-md shadow-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-1/30">
          <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-115" />
        </figure>
      ))}
    </section>

  );
};

export default ProductImages;
