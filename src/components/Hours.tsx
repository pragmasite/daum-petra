import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Schedule - typical psychotherapy hours
  const schedule = [
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 18:00" },
    { hours: "08:00 - 17:00" },
    { hours: "09:00 - 13:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section
      id="offnungszeiten"
      className="py-24 bg-background"
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
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.hours.title}
          </h2>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-semibold">
              {t.hours.header}
            </span>
          </div>

          {/* Schedule */}
          <div className="divide-y divide-border">
            {schedule.map((item, i) => {
              const isToday = i === adjustedIndex;
              const isClosed = item.hours === t.hours.closed;

              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        isToday ? "text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isClosed ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="bg-primary/5 px-6 py-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Termine nach Vereinbarung • Appointments by arrangement
            </p>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Für eine Terminvereinbarung kontaktieren Sie mich bitte telefonisch oder per E-Mail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
