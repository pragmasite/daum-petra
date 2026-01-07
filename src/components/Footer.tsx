import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Petra Daum
            </h3>
            <p className="text-background/80 text-sm">
              {t.footer.tagline}
            </p>
            <p className="text-background/70 text-sm mt-2">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              {t.footer.navigation}
            </h4>
            <nav className="space-y-2">
              <a
                href="#uber-mich"
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {t.nav.about}
              </a>
              <a
                href="#leistungen"
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {t.nav.services}
              </a>
              <a
                href="#galerie"
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#offnungszeiten"
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {t.nav.hours}
              </a>
              <a
                href="#kontakt"
                className="text-background/80 hover:text-background transition-colors text-sm"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              {t.contact.label}
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+41562217383"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +41 56 221 73 83
                </a>
              </p>
              <p>
                <a
                  href="mailto:petra.daum@gmx.ch"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  petra.daum@gmx.ch
                </a>
              </p>
              <p className="text-background/70">
                Alte Spinnerei 9<br />
                5210 Windisch, CH
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 pt-8 text-center text-background/60 text-sm">
          <p>
            © {new Date().getFullYear()} Petra Daum. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
