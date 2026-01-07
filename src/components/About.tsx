import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="uber-mich"
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
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.about.title1}</h2>
          <p className="text-primary text-xl mt-2">{t.about.title2}</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-8"
          >
            {[
              { label: t.about.stat1, value: "20+" },
              { label: t.about.stat2, value: "6+" },
              { label: t.about.stat3, value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="bg-background rounded-xl p-6 shadow-soft border border-border">
                <p className="text-4xl md:text-5xl font-serif text-primary font-semibold mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/70 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
