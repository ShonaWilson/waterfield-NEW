import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const offeringsSubmenu = [
  { label: "Services", href: "/services" },
  { label: "Build Capacity", href: "/build-capacity" },
  { label: "AI Tools", href: "/ai-tools" },
];

const navItems = [
  { label: "About", href: "/about" },
  { label: "Clients", href: "/our-clients" },
  { label: "Articles", href: "/articles" },
  { label: "Contact us", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isOfferingsActive = offeringsSubmenu.some(item => location.pathname === item.href);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsOfferingsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOfferingsOpen(false);
    }, 300);
    setHoverTimeout(timeout);
  };

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
            {/* Offerings Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "font-heading text-sm font-medium transition-colors duration-200 flex items-center gap-1 cursor-default",
                  isOfferingsActive
                    ? "text-primary"
                    : "text-primary hover:text-primary-light"
                )}
              >
                Offerings
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Dropdown Menu */}
              {isOfferingsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 animate-fade-in"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {offeringsSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "block font-heading text-sm font-medium px-4 py-2 transition-colors duration-200",
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-primary hover:text-primary-light hover:bg-primary/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Nav Items */}
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
            {/* Offerings Section in Mobile */}
            <div>
              <div className="font-heading text-base font-medium py-3 px-4 text-primary/60">
                Offerings
              </div>
              <div className="pl-4">
                {offeringsSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "font-heading text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 block",
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-primary hover:text-primary-light hover:bg-primary/5"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Regular Nav Items in Mobile */}
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
