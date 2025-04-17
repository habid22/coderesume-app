import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-md border-t border-border/20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-8">
        {/* Logo & blurb */}
        <div className="flex-1 min-w-[200px]">
          <Link href="/" className="text-lg font-bold inline-block">
            <span className="gradient-text">coderesume.</span>
          </Link>


          <div className="mt-4 flex space-x-4">
            {[
              { href: "#", svg: (<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />) },
              { href: "#", svg: (<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />) },
              { href: "#", svg: (
                <>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </>
              ) },
              { href: "#", svg: (
                <>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </>
              ) },
            ].map(({ href, svg }, i) => (
              <Link
                key={i}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {svg}
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center lg:text-right flex-1">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} coderesume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
