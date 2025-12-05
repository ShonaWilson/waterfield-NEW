import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Clients", href: "/our-clients" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/waterfield-logo-small.jpg"
              alt="Waterfield"
              className="h-8 md:h-10 w-auto -translate-y-0.5"
            />
            <span className="hidden lg:inline font-heading text-sm font-normal ml-2 border-l border-border pl-5 self-center" style={{ color: 'rgb(175, 171, 137)' }}>
              Clear strategic direction & action
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-heading text-sm font-medium transition-colors duration-200",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-primary hover:text-primary-light"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-custom mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "font-heading text-base font-medium py-3 px-4 rounded-lg transition-colors duration-200",
                  location.pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-primary hover:text-primary-light hover:bg-primary/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
