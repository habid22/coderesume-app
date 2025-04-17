import React from "react";
import Link from "next/link";
import { Button } from "../ui/button"; // Adjusted the path to match the correct module structure

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="container flex flex-col items-center justify-center text-center">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-circle" />
        <div className="absolute left-1/4 bottom-10 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-circle" />
        <div className="absolute right-1/4 top-1/3 -z-10 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-pink-600/20 blur-circle" />

        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
  <span className="gradient-text">coderesume.</span>
  <span className="block text-base md:text-lg lg:text-md font-semibold leading-tight tracking-normal">
    your next best resume starts here.
  </span>
</h1>


        <p className="mb-10 max-w-2xl text-md text-muted-foreground md:text-xl">
          for those cs and software engineering students that would rather spend time debugging code than
          formatting resumes, built on jake's resume template.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" asChild>
            <Link href="/resume">Build Your Resume</Link>
          </Button>
          {/* <Button variant="outline" size="lg" asChild>
            <Link href="#examples">View Examples</Link>
          </Button> */}
        </div>

        <div className="mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg blur-md opacity-50"></div>
          <div className="relative dark:bg-gray-900 border border-violet-500/30 bg-slate-950/50 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="p-1">
              <div className="flex items-center bg-slate-950 rounded-t-md px-2 py-1.5 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 text-center text-xs text-gray-400">Resume Builder</div>
              </div>
              <div className="bg-slate-900 h-[320px] w-full rounded-b-md p-4 sm:w-[600px] md:w-[650px] lg:w-[700px]">
                {/* Mock resume builder UI */}
                <div className="flex h-full">
                  <div className="w-1/3 border-r border-slate-700 pr-3">
                    <div className="h-8 w-full rounded bg-slate-800 mb-3"></div>
                    <div className="h-4 w-4/5 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-5/6 rounded bg-slate-800 mb-6"></div>

                    <div className="h-6 w-full rounded bg-violet-800/50 mb-3"></div>
                    <div className="h-4 w-4/5 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-5/6 rounded bg-slate-800 mb-6"></div>

                    <div className="h-6 w-full rounded bg-slate-800 mb-3"></div>
                    <div className="h-4 w-2/3 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-800 mb-2"></div>
                  </div>
                  <div className="w-2/3 pl-3">
                    <div className="h-8 w-full rounded bg-slate-800 mb-4"></div>
                    <div className="flex mb-3">
                      <div className="h-28 w-28 rounded bg-slate-800 mr-3"></div>
                      <div className="flex-1">
                        <div className="h-6 w-full rounded bg-slate-800 mb-2"></div>
                        <div className="h-4 w-4/5 rounded bg-slate-800 mb-2"></div>
                        <div className="h-4 w-3/4 rounded bg-slate-800 mb-2"></div>
                        <div className="h-4 w-5/6 rounded bg-slate-800"></div>
                      </div>
                    </div>
                    <div className="h-6 w-full rounded bg-violet-800/50 mb-3"></div>
                    <div className="h-4 w-full rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-full rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-4/5 rounded bg-slate-800 mb-4"></div>

                    <div className="h-6 w-full rounded bg-slate-800 mb-3"></div>
                    <div className="h-4 w-full rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-4/5 rounded bg-slate-800 mb-2"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-800"></div>
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

export default Hero;
