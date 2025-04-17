import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-950/50 backdrop-blur-md border-t border-border/20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-8">
        {/* Logo & social links */}
        <div className="flex-1 min-w-[200px]">
          <Link href="/" className="text-lg font-bold inline-block">
            <span className="gradient-text">coderesume.</span>
          </Link>

          <div className="mt-4 flex space-x-4">
            {[
              { 
                href: "https://github.com/habid22", 
                svg: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                )
              },
              { 
                href: "https://linkedin.com/in/hassan-abid-amin", 
                svg: (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                )
              },
            ].map(({ href, svg }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
            &copy; {new Date().getFullYear()} coderesume by Hassan Amin. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;