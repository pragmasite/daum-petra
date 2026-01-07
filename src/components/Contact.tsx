import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 56 221 73 83",
      href: "tel:+41562217383",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "petra.daum@gmx.ch",
      href: "mailto:petra.daum@gmx.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Alte Spinnerei 9, 5210 Windisch",
      href: "https://maps.google.com/?q=Alte+Spinnerei+9,+5210+Windisch",
    },
  ];

  return (
    <section
      id="kontakt"
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
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
          </h2>
          <p className="text-primary text-xl mt-2">{t.contact.title2}</p>
          <p className="text-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="group flex items-start gap-4 p-6 bg-background rounded-xl border border-border shadow-soft hover:shadow-medium hover:border-primary transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Call CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="tel:+41562217383">
                  <Phone className="h-5 w-5 mr-2" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-96 rounded-2xl overflow-hidden shadow-medium border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.8923829823987!2d8.230798!3d47.482035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAlte%20Spinnerei%209%2C%205210%20Windisch!5e0!3m2!1sde!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "24rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.contact.mapTitle}
            />
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center"
        >
          <h3 className="font-serif text-2xl font-semibold mb-4">
            Anfahrtsweg
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-4">
            Die Praxis ist in einem ruhigen, naturnahen Quartier in Windisch gelegen.
            <br />
            8 Minuten von der Bahnstation Brugg mit Bus 361 (Haltestelle: Kunzareal Windisch).
            <br />
            Kostenlose Parkplätze stehen vor dem Gebäude zur Verfügung.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
