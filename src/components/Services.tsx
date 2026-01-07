import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leistungen" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.services.title}
          </h2>
          <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conditions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10"
        >
          <h3 className="font-serif text-3xl font-semibold mb-8 text-center">
            {t.conditions.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.conditions.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
