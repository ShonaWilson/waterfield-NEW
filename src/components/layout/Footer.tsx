import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-primary-foreground" style={{ backgroundColor: '#222E40' }}>
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img
              src="/White_logo.png.avif"
              alt="Waterfield"
              className="h-6 w-auto"
            />
            <p className="font-heading text-sm font-normal text-primary-foreground/80">
              Clear strategic direction & action
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="font-heading font-medium text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Services
              </Link>
              <Link to="/build-capacity" className="font-heading font-medium text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Build Capacity
              </Link>
              <Link to="/ai-tools" className="font-heading font-medium text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                AI Tools
              </Link>
              <Link to="/process" className="font-heading font-medium text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Process
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-primary">Contact</h4>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="font-heading font-medium text-sm text-primary-foreground">Contact us</span>
              </Link>
              <a
                href="tel:+61299221881"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-heading font-medium text-sm text-primary-foreground">+61 2 9922 1881</span>
              </a>
              <a
                href="mailto:info@waterfield.com.au"
                className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-heading font-medium text-sm text-primary-foreground">info@waterfield.com.au</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            PO Box 1328, North Sydney NSW 2060, Australia
          </p>
          <p className="text-primary-foreground/60 text-sm mt-1">
            © Waterfield 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
