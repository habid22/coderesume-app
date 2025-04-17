import React from "react";
import Link from "next/link";
// Update the import path for Button to the correct location
import { Button } from "../ui/button";

const Integration = () => {
  return (
    <section id="integration" className="section-padding">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
              Seamless Integration
            </p>

            <h2 className="section-title mb-6">
              Connect With Your <span className="gradient-text">Tech Ecosystem</span>
            </h2>

            <p className="mb-6 text-lg text-muted-foreground">
              Our resume builder seamlessly integrates with the tools and platforms CS and Software Engineering students
              use every day. Import your projects, skills, and achievements automatically.
            </p>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Pull projects directly from <span className="font-medium text-foreground">GitHub and GitLab</span> with automatic skills detection</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">Import certifications from <span className="font-medium text-foreground">LinkedIn and course platforms</span> like Coursera and Udemy</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 flex-shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">One-click application to <span className="font-medium text-foreground">job boards and company portals</span> with your optimized resume</p>
              </li>
            </ul>

            <Button size="lg" asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-primary/20 via-purple-600/10 to-blue-600/20 blur-2xl rounded-xl" />
            <div className="relative rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-6 shadow-md">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub Integration</h3>
                    <p className="text-sm text-muted-foreground">Connect your account to import repos</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn Profile Sync</h3>
                    <p className="text-sm text-muted-foreground">Import education and experience</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Universal Export</h3>
                    <p className="text-sm text-muted-foreground">PDF, DOCX, JSON, and more formats</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">One-Click Applications</h3>
                    <p className="text-sm text-muted-foreground">Apply directly to job boards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
