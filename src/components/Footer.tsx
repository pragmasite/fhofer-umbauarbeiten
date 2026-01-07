import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl mb-3">F. Hofer</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t.footer.description}
            </p>
            <p className="text-xs text-primary-foreground/60">
              Käsereistrasse 1<br />
              2575 Täuffelen<br />
              Switzerland
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#prestations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.nav.contact}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                <a href="tel:+41798333322" className="hover:text-primary-foreground transition-colors">
                  +41 79 833 33 22
                </a>
              </p>
              <p className="text-primary-foreground/80">
                <a href="mailto:horeno@bluewin.ch" className="hover:text-primary-foreground transition-colors">
                  horeno@bluewin.ch
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>© {currentYear} F. Hofer Umbauarbeiten. {t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
