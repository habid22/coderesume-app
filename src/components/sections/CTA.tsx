import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary/5 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-circle" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-circle" />
      <div className="absolute left-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] translate-x-1/2 translate-y-1/2 rounded-full bg-pink-600/10 blur-circle" />

      <div className="container text-center">
        <h2 className="section-title">
          Ready to Build Your <span className="gradient-text">Technical Resume?</span>
        </h2>

        <p className="section-subtitle">
          Join thousands of CS and Software Engineering students who have landed
          interviews at top tech companies using our specialized resume builder.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#get-started">Get Started — It's Free</Link>
          </Button>

          <div className="text-muted-foreground">
            No credit card required · Free plan available
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2 text-muted-foreground">
              Get help with your resume from our technical support team anytime.
            </p>
          </div>

          <div className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Industry Approved</h3>
            <p className="mt-2 text-muted-foreground">
              Templates verified by tech recruiters from FAANG companies.
            </p>
          </div>

          <div className="rounded-lg border border-border/40 bg-card/50 p-6 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Privacy First</h3>
            <p className="mt-2 text-muted-foreground">
              Your resume data is encrypted and never shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
