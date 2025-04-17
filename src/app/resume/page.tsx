"use client";

import React, { useState, useRef } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import { TDocumentDefinitions, Content } from "pdfmake/interfaces";
import { ResumePreview } from "@/components/ui/ResumePreview";
import { Download, Trash2, Plus  } from 'lucide-react';
import { AnimatedBackground } from "@/components/ui/animated-background";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function ResumePage() {
  // -----------------------------
  // Resume State
  // -----------------------------
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("youremail@su.edu");
  const [phone, setPhone] = useState("123-456-7890");
  const [github, setGithub] = useState("github.com/yourusername");
  const [linkedin, setLinkedin] = useState("linkedin.com/in/yourusername");

  const [education, setEducation] = useState([
    {
      school: "University of Western Ontario",
      location: "London ON",
      degree: "Bachelors of Software Engineering",
      date: "2021 - Present"
    },
    
  ]);

  const [experience, setExperience] = useState([
    {
      title: "Software Developer",
      company: "FAANG Company",
      location: "Toronto ON",
      date: "2023 - Present",
      bullets: ["Developed feature A", "Improved performance by 30%"]
    },
    {
      title: "Software Intern",
      company: "Tech Solutions",
      location: "Remote",
      date: "2021 - 2022",
      bullets: ["Assisted in project X", "Conducted user testing"]
    }
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Project Alpha",
      tech: "React, Node",
      bullets: ["Designed UI", "Implemented API integration"]
    }
  ]);

  const [skills, setSkills] = useState({
    Languages: "JavaScript, TypeScript, Python",
    Frameworks: "React, Next.js",
    Tools: "Git, Docker",
    Libraries: "pdfMake, Tailwind CSS"
  });

  const previewRef = useRef<HTMLDivElement>(null);

  // -----------------------------
  // Helper Functions to Build PDF Content
  // -----------------------------
  // Education: line 1 contains school (left) and location (right),
  // line 2 contains degree (left) and date (right)
  const buildEducationContent = (): Content[] => {
    return education
      .map((edu) => [
        {
          columns: [
            { text: edu.school, style: "eduSchool" },
            { text: edu.location, style: "eduLocation", alignment: "right" }
          ]
        },
        {
          columns: [
            { text: edu.degree, style: "eduDegree" },
            { text: edu.date, style: "eduDate", alignment: "right" }
          ]
        },
        { text: "", margin: [0, 5] }
      ])
      .flat();
  };

  // Experience: line 1 shows the title; 
  // line 2 shows company (left) and date (right);
  // line 3 shows location; 
  // then bullet details.
  const buildExperienceContent = (): Content[] => {
    return experience
      .map((exp) => [
        {
          columns: [
            { text: exp.title, style: "expTitle" },
            { text: exp.location, style: "expLocation", alignment: "right" }
          ]
        },
        {
          columns: [
            { text: exp.company, style: "expCompany" },
            { text: exp.date, style: "expDate", alignment: "right" }
          ]
        },
        { ul: exp.bullets.filter((b) => b.trim()), style: "bullets" },

      ])
      .flat();
  };


  // Projects: line 1 shows project name (left) and tech details (right);
  // page.tsx

  // … inside ResumePage …

  // Projects: name | tech on one line (pipe not italic), then bullets
  const buildProjectsContent = (): Content[] => {
    return projects
      .map((proj) => [
        {
          // render as an array of pieces:
          text: [
            { text: proj.name, style: "projName" },
            { text: " | " },                    // <-- no style here
            { text: proj.tech, style: "projTech" }
          ],
        },
        {
          ul: proj.bullets.filter((b) => b.trim() !== ""),
          style: "bullets",
        },
        { text: "", margin: [0, 5] },
      ])
      .flat();
  };


  // Skills: simple list
  const buildSkillsContent = (): Content[] => {
    return Object.entries(skills).map(([category, items]) => ({
      text: `${category}: ${items}`,
      style: "skillText",
      margin: [0, 2, 0, 2]
    }));
  };

  // -----------------------------
  // PDF Generation Logic
  // -----------------------------
  const handleDownload = async () => {
    // Load fonts from public folder
    const [regular, bold, italic] = await Promise.all([
      loadFont("/fonts/cmunrm.ttf"),
      loadFont("/fonts/cmunbx.ttf"),
      loadFont("/fonts/cmunsl.ttf")
    ]);

    pdfMake.vfs = {
      "cmunrm.ttf": regular,
      "cmunbx.ttf": bold,
      "cmunsl.ttf": italic
    };

    pdfMake.fonts = {
      ComputerModern: {
        normal: "cmunrm.ttf",
        bold: "cmunbx.ttf",
        italics: "cmunsl.ttf",
        bolditalics: "cmunbx.ttf"
      }
    };

    const docDefinition: TDocumentDefinitions = {
      pageSize: "LETTER",
      pageMargins: [40, 40, 40, 40],
      content: [
        // Personal Information
        { text: name, style: "name" },
        {
          text: `${phone} | ${email} | ${linkedin} | ${github}`,
          style: "contact",
          margin: [0, 0, 0, 10]
        },
        // Education Section
        { text: "EDUCATION", style: "sectionHeader", margin: [0, 10, 0, 5] },
        ...buildEducationContent(),
        // Experience Section
        { text: "EXPERIENCE", style: "sectionHeader", margin: [0, 10, 0, 5] },
        ...buildExperienceContent(),
        // Projects Section
        { text: "PROJECTS", style: "sectionHeader", margin: [0, 10, 0, 5] },
        ...buildProjectsContent(),
        // Skills Section
        {
          text: "TECHNICAL SKILLS",
          style: "sectionHeader",
          margin: [0, 10, 0, 5]
        },
        ...buildSkillsContent()
      ],
      styles: {
        name: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          marginBottom: 4,
          font: "ComputerModern"
        },
        contact: {
          fontSize: 10,
          alignment: "center",
          marginBottom: 16,
          font: "ComputerModern"
        },
        sectionHeader: {
          fontSize: 14,
          bold: true,
          decoration: "underline",
          font: "ComputerModern"
        },
        eduSchool: {
          fontSize: 12,
          bold: true,
          font: "ComputerModern"
        },
        eduLocation: {
          fontSize: 10,
          color: "gray",
          font: "ComputerModern"
        },
        eduDegree: {
          fontSize: 10,
          italics: true,
          font: "ComputerModern"
        },
        eduDate: {
          fontSize: 10,
          color: "gray",
          font: "ComputerModern"
        },
        expTitle: {
          fontSize: 12,
          bold: true,
          font: "ComputerModern"
        },
        expCompany: {
          fontSize: 10,
          italics: true,
          font: "ComputerModern"
        },
        expDate: {
          fontSize: 10,
          color: "gray",
          font: "ComputerModern"
        },
        expLocation: {
          fontSize: 10,
          italic: true,
          color: "gray",
          font: "ComputerModern"
        },
        projName: {
          fontSize: 12,
          bold: true,
          font: "ComputerModern"
        },
        projTech: {
          fontSize: 10,
          italics: true,
          font: "ComputerModern"
        },
        bullets: {
          fontSize: 10,
          marginLeft: 10,
          font: "ComputerModern"
        },
        skillText: {
          fontSize: 10,
          marginBottom: 4,
          font: "ComputerModern"
        }
      },
      defaultStyle: {
        font: "ComputerModern",
        fontSize: 10
      }
    };

    pdfMake.createPdf(docDefinition).download("resume.pdf");
  };

  const loadFont = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer).toString("base64");
  };

  // -----------------------------
  // Render Layout
  // -----------------------------


  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/90" />
      <div className="absolute left-1/2 top-0 -z-40 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[80px]" />
      <div className="absolute left-1/4 bottom-10 -z-40 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[60px]" />
      <div className="absolute right-1/4 top-1/3 -z-40 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-pink-600/20 blur-[50px]" />
  
      <div className="flex min-h-screen">
        {/* Form Panel */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-900/80 backdrop-blur-lg border-r border-white/10">
          <div className="max-w-3xl mx-auto">
         
          <Link href="/">
            <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
              coderesume.
              <span className="text-sm block mt-1 font-normal text-gray-400">Click on fields to edit</span>
            </h1>
          </Link>
  
            {/* Personal Info */}
            <div className="mb-8 p-6 rounded-xl bg-gray-800/50 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                    Personal Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: name, onChange: setName },
                    { label: "Email", value: email, onChange: setEmail },
                    { label: "Phone", value: phone, onChange: setPhone },
                    { label: "GitHub", value: github, onChange: setGithub },
                    { label: "LinkedIn", value: linkedin, onChange: setLinkedin, fullWidth: true },
                  ].map((field) => (
                    <div key={field.label} className={`space-y-1 ${field.fullWidth ? 'md:col-span-2' : ''}`}>
                      <label className="text-sm font-medium text-gray-300">{field.label}</label>
                      <input
                        className="w-full px-4 py-2.5 bg-gray-700/50 rounded-lg border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 placeholder-gray-500 transition-all"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder={field.label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Education Section */}
            <div className="mb-8 p-6 rounded-xl bg-gray-800/50 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                    Education
                  </h2>
                  <button
                    onClick={() => setEducation([...education, { school: "", location: "", degree: "", date: "" }])}
                    className="px-3 py-1.5 text-sm bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-300 hover:text-white transition-colors border border-purple-500/20 flex items-center gap-1"
                  >
                    <Plus size={14} />
                    Add Education
                  </button>
                </div>
                {education.map((edu, i) => (
                  <div key={i} className="mb-4 p-4 rounded-xl bg-gray-700/20 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-2">
                        <input
                          className="w-full text-gray-100 bg-transparent placeholder-gray-500 focus:outline-none text-sm font-medium"
                          placeholder="School Name"
                          value={edu.school}
                          onChange={(e) => {
                            const copy = [...education];
                            copy[i].school = e.target.value;
                            setEducation(copy);
                          }}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => {
                              const copy = [...education];
                              copy[i].degree = e.target.value;
                              setEducation(copy);
                            }}
                          />
                          <input
                            className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm text-right"
                            placeholder="Location"
                            value={edu.location}
                            onChange={(e) => {
                              const copy = [...education];
                              copy[i].location = e.target.value;
                              setEducation(copy);
                            }}
                          />
                        </div>
                        <input
                          className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                          placeholder="Dates (e.g., 2021 - Present)"
                          value={edu.date}
                          onChange={(e) => {
                            const copy = [...education];
                            copy[i].date = e.target.value;
                            setEducation(copy);
                          }}
                        />
                      </div>
                      <button 
                        onClick={() => setEducation(education.filter((_, index) => index !== i))}
                        className="text-gray-400 hover:text-red-400 transition-colors h-fit"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Experience Section */}
            <div className="mb-8 p-6 rounded-xl bg-gray-800/50 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                    Experience
                  </h2>
                  <button
                    onClick={() => setExperience([...experience, { title: "", company: "", location: "", date: "", bullets: [""] }])}
                    className="px-3 py-1.5 text-sm bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-300 hover:text-white transition-colors border border-purple-500/20 flex items-center gap-1"
                  >
                    <Plus size={14} />
                    Add Position
                  </button>
                </div>
                {experience.map((exp, i) => (
                  <div key={i} className="mb-4 p-4 rounded-xl bg-gray-700/20 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-2">
                        <input
                          className="w-full text-gray-100 bg-transparent placeholder-gray-500 focus:outline-none text-sm font-medium"
                          placeholder="Job Title"
                          value={exp.title}
                          onChange={(e) => {
                            const copy = [...experience];
                            copy[i].title = e.target.value;
                            setExperience(copy);
                          }}
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) => {
                              const copy = [...experience];
                              copy[i].company = e.target.value;
                              setExperience(copy);
                            }}
                          />
                          <input
                            className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm text-right"
                            placeholder="Location"
                            value={exp.location}
                            onChange={(e) => {
                              const copy = [...experience];
                              copy[i].location = e.target.value;
                              setExperience(copy);
                            }}
                          />
                        </div>
                        <input
                          className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                          placeholder="Dates"
                          value={exp.date}
                          onChange={(e) => {
                            const copy = [...experience];
                            copy[i].date = e.target.value;
                            setExperience(copy);
                          }}
                        />
                        <div className="pt-2 space-y-1.5">
                          {exp.bullets.map((bullet, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <div className="text-purple-400/50">•</div>
                              <input
                                className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                                placeholder="Bullet point"
                                value={bullet}
                                onChange={(e) => {
                                  const copy = [...experience];
                                  copy[i].bullets[j] = e.target.value;
                                  setExperience(copy);
                                }}
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const copy = [...experience];
                              copy[i].bullets.push("");
                              setExperience(copy);
                            }}
                            className="text-purple-300 hover:text-white text-xs mt-1 flex items-center gap-1"
                          >
                            <Plus size={12} />
                            Add Bullet
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => setExperience(experience.filter((_, index) => index !== i))}
                        className="text-gray-400 hover:text-red-400 transition-colors h-fit"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Projects Section */}
            <div className="mb-8 p-6 rounded-xl bg-gray-800/50 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                    Projects
                  </h2>
                  <button
                    onClick={() => setProjects([...projects, { name: "", tech: "", bullets: [""] }])}
                    className="px-3 py-1.5 text-sm bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-300 hover:text-white transition-colors border border-purple-500/20 flex items-center gap-1"
                  >
                    <Plus size={14} />
                    Add Project
                  </button>
                </div>
                {projects.map((proj, i) => (
                  <div key={i} className="mb-4 p-4 rounded-xl bg-gray-700/20 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            className="w-full text-gray-100 bg-transparent placeholder-gray-500 focus:outline-none text-sm font-medium"
                            placeholder="Project Name"
                            value={proj.name}
                            onChange={(e) => {
                              const copy = [...projects];
                              copy[i].name = e.target.value;
                              setProjects(copy);
                            }}
                          />
                          <input
                            className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm text-right"
                            placeholder="Technologies"
                            value={proj.tech}
                            onChange={(e) => {
                              const copy = [...projects];
                              copy[i].tech = e.target.value;
                              setProjects(copy);
                            }}
                          />
                        </div>
                        <div className="pt-2 space-y-1.5">
                          {proj.bullets.map((bullet, j) => (
                            <div key={j} className="flex items-center gap-2">
                              <div className="text-purple-400/50">•</div>
                              <input
                                className="w-full text-gray-400 bg-transparent placeholder-gray-600 text-sm"
                                placeholder="Bullet point"
                                value={bullet}
                                onChange={(e) => {
                                  const copy = [...projects];
                                  copy[i].bullets[j] = e.target.value;
                                  setProjects(copy);
                                }}
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const copy = [...projects];
                              copy[i].bullets.push("");
                              setProjects(copy);
                            }}
                            className="text-purple-300 hover:text-white text-xs mt-1 flex items-center gap-1"
                          >
                            <Plus size={12} />
                            Add Bullet
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => setProjects(projects.filter((_, index) => index !== i))}
                        className="text-gray-400 hover:text-red-400 transition-colors h-fit"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Skills Section */}
            <div className="mb-8 p-6 rounded-xl bg-gray-800/50 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                    Technical Skills
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(skills).map(([category, value]) => (
                    <div key={category} className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">{category}</label>
                      <input
                        className="w-full px-4 py-2.5 bg-gray-700/50 rounded-lg border border-white/10 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 placeholder-gray-500 transition-all"
                        value={value}
                        onChange={(e) => setSkills({ ...skills, [category]: e.target.value })}
                        placeholder={category}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Preview Panel */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-900/80 backdrop-blur-lg">
          <div className="max-w-3xl mx-auto">
            <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm pb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-100">
                  Live Preview
                  <span className="block text-sm font-normal text-gray-400">View your resume live</span>
                </h2>
                <button 
                  onClick={handleDownload}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Download size={16} />
                  Export PDF
                </button>
              </div>
            </div>
            
            <div className="relative rounded-2xl bg-white border border-gray-200 shadow-2xl transform hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none" />
              <ResumePreview
                ref={previewRef}
                name={name}
                email={email}
                phone={phone}
                github={github}
                linkedin={linkedin}
                education={education}
                experience={experience}
                projects={projects}
                skills={skills}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}