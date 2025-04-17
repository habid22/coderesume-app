"use client";

import React, { forwardRef } from "react";

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  date: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  tech: string;
  bullets: string[];
}

export interface Skills {
  [category: string]: string;
}

export interface ResumePreviewProps {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: Skills;
}

// 👇 forwardRef so parent can grab the DOM node if needed
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  (
    {
      name,
      email,
      phone,
      github,
      linkedin,
      education,
      experience,
      projects,
      skills,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="p-6 font-serif text-black max-w-[8.5in] w-full"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-sm text-gray-700">
            {phone} | {email} | {linkedin} | {github}
          </p>
        </div>

        {/* Education */}
        <section className="mb-6">
          <h2 className="uppercase font-semibold mb-2 text-sm border-b pb-1">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <span className="font-bold">{edu.school}</span>
                <span className="text-gray-600">{edu.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="italic">{edu.degree}</span>
                <span className="text-gray-600">{edu.date}</span>
              </div>
            </div>
          ))}
        </section>

       {/* Experience */}
<section className="mb-6">
  <h2 className="uppercase font-semibold mb-2 text-sm border-b pb-1">
    Experience
  </h2>
  {experience.map((exp, i) => (
    <div key={i} className="mb-4">
      {/* Title + Location in same line */}
      <div className="flex justify-between">
        <span className="font-bold">{exp.title}</span>
        <span className="text-gray-600">{exp.location}</span>
      </div>
      {/* Company + Date */}
      <div className="flex justify-between">
        <span className="italic">{exp.company}</span>
        <span className="text-gray-600">{exp.date}</span>
      </div>
      {/* Bullet points */}
      <ul className="list-disc ml-6 space-y-1 mt-2">
        {exp.bullets.map((b, j) =>
          b.trim() ? <li key={j}>{b}</li> : null
        )}
      </ul>
    </div>
  ))}
</section>
        {/* Projects */}
        <section className="mb-6">
          <h2 className="uppercase font-semibold mb-2 text-sm border-b pb-1">
            Projects
          </h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <div className="flex gap-1 mb-1">
                <span className="font-bold">{proj.name}</span>
                <span className="text-gray-600">| {proj.tech}</span>
              </div>
              <ul className="list-disc ml-6 space-y-1">
                {proj.bullets.map((b, j) =>
                  b.trim() ? <li key={j}>{b}</li> : null
                )}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="uppercase font-semibold mb-2 text-sm border-b pb-1">
            Technical Skills
          </h2>
          <div className="space-y-1">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex gap-1">
                <span className="font-medium">{category}:</span>
                <span>{items}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
);

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
