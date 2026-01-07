import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.contact.description}
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {t.contact.phone}
                  </h3>
                  <Button asChild variant="link" className="h-auto p-0">
                    <a href="tel:+41798333322" className="text-primary hover:text-primary/80">
                      +41 79 833 33 22
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {t.contact.email}
                  </h3>
                  <Button asChild variant="link" className="h-auto p-0">
                    <a href="mailto:horeno@bluewin.ch" className="text-primary hover:text-primary/80">
                      horeno@bluewin.ch
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {t.contact.address}
                  </h3>
                  <p className="text-muted-foreground">
                    Käsereistrasse 1<br />
                    2575 Täuffelen<br />
                    Switzerland
                  </p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="tel:+41798333322">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-medium h-96 lg:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.5280873645603!2d7.200880000000001!3d47.069399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3d9d9d9d9d9d%3A0x0!2sKäsereistrasse%201%2C%202575%20Täuffelen!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
