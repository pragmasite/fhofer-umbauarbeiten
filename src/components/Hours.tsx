import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Schedule - No fixed hours for a craftsman (by appointment)
  const getByAppointmentText = () => {
    const lang = t.nav.profession;
    if (lang === "UMBAUTEN & RENOVATIONEN") return "Nach Vereinbarung";
    if (lang === "RENOVATIONS & RENOVATIONS") return "By appointment";
    return "Sur rendez-vous";
  };

  const byAppointment = getByAppointmentText();

  const schedule = [
    { hours: byAppointment },
    { hours: byAppointment },
    { hours: byAppointment },
    { hours: byAppointment },
    { hours: byAppointment },
    { hours: byAppointment },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-foreground">
              {t.hours.header}
            </span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            isToday ? "font-medium text-primary" : ""
                          }
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-sm ${
                      isClosed ? "text-muted-foreground italic" : ""
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-4 bg-primary/5 border-t text-sm text-muted-foreground italic">
            {t.contact.callNow}: +41 79 833 33 22
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
