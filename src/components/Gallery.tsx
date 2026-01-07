import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Images with descriptions
  const images = [
    { src: "/images/logo.jpg", alt: t.gallery.description },
  ];

  return (
    <section
      id="galerie"
      className="py-24 bg-gradient-to-b from-background to-muted"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/70 text-lg mt-4">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid - responsive based on image count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-serif font-semibold text-white">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note about practice space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Die Praxis bietet einen ruhigen, therapeutischen Raum für Ihre persönliche Entwicklung und Heilung.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
