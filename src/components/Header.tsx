"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="gradient-text">coderesume.</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Get Started
            </Link>
            {/* <Link href="#examples" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Examples
            </Link> */}
            
          </nav>
        </div>

        {/* <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="#login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div> */}

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container py-4 bg-background border-b border-border/40">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#examples"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              href="#why-us"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="#login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#get-started" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
