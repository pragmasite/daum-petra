import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-background opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm tracking-widest text-white backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10 max-w-2xl text-lg text-white/90"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <a href="tel:+41562217383">
              <Phone className="mr-2 h-5 w-5" />
              {t.hero.badge}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            <a href="mailto:petra.daum@gmx.ch">
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-white/70 text-sm"
        >
          <MapPin className="h-4 w-4" />
          {t.hero.location}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#uber-mich"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-white/30 p-3 text-white/60 hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
