import React from 'react';
import { TemplateSection } from './templates';
import { Sparkles, FileText, Mail, Search, Mic, MessageCircle, Building, DollarSign, Users, TrendingUp, Shuffle, Laptop, Star, Briefcase, Target, MessageSquare, Shield, CheckSquare, Rocket, BookOpen, Bot, Scale, LifeBuoy, Compass, UserCircle } from 'lucide-react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>);

export const NEW_CATEGORIES = ["Resume & CV", "LinkedIn", "Cover Letters", "Job Search", "Interview Preparation", "Behavioural Interview", "Company Research", "Salary", "Networking", "Career Growth", "Career Change", "Freelancing", "Personal Branding", "Portfolio", "Performance Reviews", "Workplace Communication", "Leadership", "Productivity", "Entrepreneurship", "Students", "AI Career Assistant", "Offer Evaluation", "Layoffs & Career Recovery", "AI-Powered Career Coach", "Specialized by Profession", "Premium Wow Prompts"];

export const NEW_TEMPLATES_BY_CATEGORY: Record<string, TemplateSection[]> = {
  "Resume & CV": [
    {
      category: "Resume & CV",
      icon: <FileText className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Resume Builder",
          desc: "Resume Builder expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume Builder. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build a professional resume from scratch",
          desc: "Build a professional resume from scratch expert...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build a professional resume from scratch. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ATS-optimized resume",
          desc: "ATS-optimized resume expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: ATS-optimized resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "One-page resume",
          desc: "One-page resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: One-page resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive resume",
          desc: "Executive resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Executive resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Academic CV",
          desc: "Academic CV expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Academic CV. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical resume",
          desc: "Technical resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Technical resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career switch resume",
          desc: "Career switch resume expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career switch resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Internship resume",
          desc: "Internship resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Internship resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Fresher resume",
          desc: "Fresher resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Fresher resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup resume",
          desc: "Startup resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Startup resume. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resume Improvement",
          desc: "Resume Improvement expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume Improvement. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resume review",
          desc: "Resume review expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume review. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resume scoring",
          desc: "Resume scoring expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume scoring. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Rewrite bullet points",
          desc: "Rewrite bullet points expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Rewrite bullet points. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quantify achievements",
          desc: "Quantify achievements expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Quantify achievements. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Improve impact statements",
          desc: "Improve impact statements expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Improve impact statements. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Add measurable metrics",
          desc: "Add measurable metrics expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Add measurable metrics. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Reduce to one page",
          desc: "Reduce to one page expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Reduce to one page. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ATS keyword optimization",
          desc: "ATS keyword optimization expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: ATS keyword optimization. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "LinkedIn": [
    {
      category: "LinkedIn",
      icon: <LinkedinIcon className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "LinkedIn headline generator",
          desc: "LinkedIn headline generator expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn headline generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn About summary",
          desc: "LinkedIn About summary expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn About summary. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Experience section rewrite",
          desc: "Experience section rewrite expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Experience section rewrite. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Featured section suggestions",
          desc: "Featured section suggestions expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Featured section suggestions. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Skills optimization",
          desc: "Skills optimization expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Skills optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn SEO optimization",
          desc: "LinkedIn SEO optimization expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn SEO optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn profile audit",
          desc: "LinkedIn profile audit expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn profile audit. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Creator profile optimization",
          desc: "Creator profile optimization expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Creator profile optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Personal branding strategy",
          desc: "Personal branding strategy expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Personal branding strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn content ideas",
          desc: "LinkedIn content ideas expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn content ideas. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Cover Letters": [
    {
      category: "Cover Letters",
      icon: <Mail className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Cover letter generator",
          desc: "Cover letter generator expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Cover letter generator. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Personalized cover letter",
          desc: "Personalized cover letter expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Personalized cover letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cold application letter",
          desc: "Cold application letter expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Cold application letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Internship cover letter",
          desc: "Internship cover letter expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Internship cover letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career transition cover letter",
          desc: "Career transition cover letter expert guidance ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career transition cover letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral-based cover letter",
          desc: "Referral-based cover letter expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Referral-based cover letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive cover letter",
          desc: "Executive cover letter expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Executive cover letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scholarship application letter",
          desc: "Scholarship application letter expert guidance ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Scholarship application letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Graduate school motivation letter",
          desc: "Graduate school motivation letter expert guidan...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Graduate school motivation letter. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Job Search": [
    {
      category: "Job Search",
      icon: <Search className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Job search strategy",
          desc: "Job search strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Job search strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Find hidden job opportunities",
          desc: "Find hidden job opportunities expert guidance a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Find hidden job opportunities. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build a target company list",
          desc: "Build a target company list expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build a target company list. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Weekly job application planner",
          desc: "Weekly job application planner expert guidance ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Weekly job application planner. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Optimize applications",
          desc: "Optimize applications expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Optimize applications. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Networking strategy",
          desc: "Networking strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Networking strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral outreach plan",
          desc: "Referral outreach plan expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Referral outreach plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "International job search",
          desc: "International job search expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: International job search. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Remote job strategy",
          desc: "Remote job strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Remote job strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Interview Preparation": [
    {
      category: "Interview Preparation",
      icon: <Mic className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Technical",
          desc: "Technical expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Technical. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Coding interview",
          desc: "Coding interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Coding interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "System design interview",
          desc: "System design interview expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: System design interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product interview",
          desc: "Product interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Product interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Data science interview",
          desc: "Data science interview expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Data science interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ML interview",
          desc: "ML interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: ML interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "DevOps interview",
          desc: "DevOps interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: DevOps interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UI/UX interview",
          desc: "UI/UX interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: UI/UX interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Finance interview",
          desc: "Finance interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Finance interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "HR",
          desc: "HR expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: HR. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "HR interview preparation",
          desc: "HR interview preparation expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: HR interview preparation. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mock interview",
          desc: "Mock interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Mock interview. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Tough questions",
          desc: "Tough questions expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Tough questions. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Strengths & weaknesses",
          desc: "Strengths & weaknesses expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Strengths & weaknesses. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Tell me about yourself",
          desc: "Tell me about yourself expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Tell me about yourself. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Why should we hire you?",
          desc: "Why should we hire you? expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Why should we hire you?. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Salary expectations",
          desc: "Salary expectations expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Salary expectations. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career goals",
          desc: "Career goals expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career goals. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Behavioural Interview": [
    {
      category: "Behavioural Interview",
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "STAR answer generator",
          desc: "STAR answer generator expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: STAR answer generator. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Leadership stories",
          desc: "Leadership stories expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Leadership stories. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conflict resolution answers",
          desc: "Conflict resolution answers expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Conflict resolution answers. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Failure stories",
          desc: "Failure stories expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Failure stories. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Success stories",
          desc: "Success stories expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Success stories. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Teamwork examples",
          desc: "Teamwork examples expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Teamwork examples. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Communication examples",
          desc: "Communication examples expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Communication examples. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision-making examples",
          desc: "Decision-making examples expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Decision-making examples. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Problem-solving stories",
          desc: "Problem-solving stories expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Problem-solving stories. I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Company Research": [
    {
      category: "Company Research",
      icon: <Building className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Research company before interview",
          desc: "Research company before interview expert guidan...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Research company before interview. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Understand company culture",
          desc: "Understand company culture expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Understand company culture. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Analyze financials",
          desc: "Analyze financials expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Analyze financials. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product breakdown",
          desc: "Product breakdown expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Product breakdown. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor comparison",
          desc: "Competitor comparison expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Competitor comparison. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Recent news summary",
          desc: "Recent news summary expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Recent news summary. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Interview insights",
          desc: "Interview insights expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Interview insights. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hiring trends",
          desc: "Hiring trends expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Hiring trends. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Company SWOT",
          desc: "Company SWOT expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Company SWOT. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Salary": [
    {
      category: "Salary",
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Salary negotiation",
          desc: "Salary negotiation expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Salary negotiation. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Counter-offer strategy",
          desc: "Counter-offer strategy expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Counter-offer strategy. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compensation comparison",
          desc: "Compensation comparison expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Compensation comparison. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Equity evaluation",
          desc: "Equity evaluation expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Equity evaluation. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup offer analysis",
          desc: "Startup offer analysis expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Startup offer analysis. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "FAANG offer comparison",
          desc: "FAANG offer comparison expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: FAANG offer comparison. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cost of living adjustment",
          desc: "Cost of living adjustment expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Cost of living adjustment. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Freelance pricing",
          desc: "Freelance pricing expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Freelance pricing. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Networking": [
    {
      category: "Networking",
      icon: <Users className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Cold LinkedIn message",
          desc: "Cold LinkedIn message expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Cold LinkedIn message. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Recruiter outreach",
          desc: "Recruiter outreach expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Recruiter outreach. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Alumni networking",
          desc: "Alumni networking expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Alumni networking. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conference networking",
          desc: "Conference networking expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Conference networking. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Follow-up messages",
          desc: "Follow-up messages expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Follow-up messages. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral request",
          desc: "Referral request expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Referral request. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Coffee chat request",
          desc: "Coffee chat request expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Coffee chat request. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Thank-you message",
          desc: "Thank-you message expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Thank-you message. My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Career Growth": [
    {
      category: "Career Growth",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Career roadmap",
          desc: "Career roadmap expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career roadmap. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Promotion strategy",
          desc: "Promotion strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Promotion strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Performance review preparation",
          desc: "Performance review preparation expert guidance ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Performance review preparation. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build influence at work",
          desc: "Build influence at work expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build influence at work. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Learn new skills",
          desc: "Learn new skills expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Learn new skills. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Become a manager",
          desc: "Become a manager expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Become a manager. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career transition planning",
          desc: "Career transition planning expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career transition planning. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Long-term career planning",
          desc: "Long-term career planning expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Long-term career planning. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Career Change": [
    {
      category: "Career Change",
      icon: <Shuffle className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Switch careers",
          desc: "Switch careers expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Switch careers. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Transferable skills analysis",
          desc: "Transferable skills analysis expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Transferable skills analysis. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Transition roadmap",
          desc: "Transition roadmap expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Transition roadmap. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Industry comparison",
          desc: "Industry comparison expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Industry comparison. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build experience quickly",
          desc: "Build experience quickly expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build experience quickly. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Portfolio strategy",
          desc: "Portfolio strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Portfolio strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Freelancing": [
    {
      category: "Freelancing",
      icon: <Laptop className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Freelance profile optimization",
          desc: "Freelance profile optimization expert guidance ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Freelance profile optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Proposal generator",
          desc: "Proposal generator expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Proposal generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Client outreach",
          desc: "Client outreach expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Client outreach. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing strategy",
          desc: "Pricing strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Pricing strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Contract suggestions",
          desc: "Contract suggestions expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Contract suggestions. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build portfolio",
          desc: "Build portfolio expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build portfolio. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Upwork optimization",
          desc: "Upwork optimization expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Upwork optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Fiverr optimization",
          desc: "Fiverr optimization expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Fiverr optimization. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Personal Branding": [
    {
      category: "Personal Branding",
      icon: <Star className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Build personal brand",
          desc: "Build personal brand expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build personal brand. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Twitter/X strategy",
          desc: "Twitter/X strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Twitter/X strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn content calendar",
          desc: "LinkedIn content calendar expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn content calendar. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Portfolio website copy",
          desc: "Portfolio website copy expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Portfolio website copy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Elevator pitch",
          desc: "Elevator pitch expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Elevator pitch. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Bio generator",
          desc: "Bio generator expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Bio generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Professional introduction",
          desc: "Professional introduction expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Professional introduction. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Thought leadership plan",
          desc: "Thought leadership plan expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Thought leadership plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Portfolio": [
    {
      category: "Portfolio",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Portfolio review",
          desc: "Portfolio review expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Portfolio review. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Project descriptions",
          desc: "Project descriptions expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Project descriptions. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "GitHub README improvement",
          desc: "GitHub README improvement expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: GitHub README improvement. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Case study writing",
          desc: "Case study writing expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Case study writing. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX portfolio review",
          desc: "UX portfolio review expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: UX portfolio review. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Engineering portfolio",
          desc: "Engineering portfolio expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Engineering portfolio. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product portfolio",
          desc: "Product portfolio expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Product portfolio. My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Performance Reviews": [
    {
      category: "Performance Reviews",
      icon: <Target className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Self-evaluation",
          desc: "Self-evaluation expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Self-evaluation. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Annual review preparation",
          desc: "Annual review preparation expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Annual review preparation. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Promotion document",
          desc: "Promotion document expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Promotion document. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Achievement tracker",
          desc: "Achievement tracker expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Achievement tracker. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Goal setting",
          desc: "Goal setting expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Goal setting. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SMART goals",
          desc: "SMART goals expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: SMART goals. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quarterly review",
          desc: "Quarterly review expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Quarterly review. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Workplace Communication": [
    {
      category: "Workplace Communication",
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Professional emails",
          desc: "Professional emails expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Professional emails. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Slack message drafting",
          desc: "Slack message drafting expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Slack message drafting. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Difficult conversations",
          desc: "Difficult conversations expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Difficult conversations. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Meeting agenda",
          desc: "Meeting agenda expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Meeting agenda. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Meeting recap",
          desc: "Meeting recap expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Meeting recap. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Status updates",
          desc: "Status updates expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Status updates. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive summaries",
          desc: "Executive summaries expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Executive summaries. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Leadership": [
    {
      category: "Leadership",
      icon: <Shield className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "First-time manager guide",
          desc: "First-time manager guide expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: First-time manager guide. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Team feedback",
          desc: "Team feedback expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Team feedback. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Delegation strategy",
          desc: "Delegation strategy expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Delegation strategy. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conflict management",
          desc: "Conflict management expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Conflict management. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hiring plan",
          desc: "Hiring plan expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Hiring plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Coaching employees",
          desc: "Coaching employees expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Coaching employees. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "One-on-one meeting agenda",
          desc: "One-on-one meeting agenda expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: One-on-one meeting agenda. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Productivity": [
    {
      category: "Productivity",
      icon: <CheckSquare className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Weekly work planner",
          desc: "Weekly work planner expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Weekly work planner. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Time management",
          desc: "Time management expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Time management. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Prioritization matrix",
          desc: "Prioritization matrix expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Prioritization matrix. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Deep work schedule",
          desc: "Deep work schedule expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Deep work schedule. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Burnout prevention",
          desc: "Burnout prevention expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Burnout prevention. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Work-life balance planner",
          desc: "Work-life balance planner expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Work-life balance planner. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Entrepreneurship": [
    {
      category: "Entrepreneurship",
      icon: <Rocket className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Founder resume",
          desc: "Founder resume expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Founder resume. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup pitch",
          desc: "Startup pitch expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Startup pitch. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investor introduction",
          desc: "Investor introduction expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Investor introduction. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Founder LinkedIn",
          desc: "Founder LinkedIn expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Founder LinkedIn. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical co-founder profile",
          desc: "Technical co-founder profile expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Technical co-founder profile. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Personal brand for founders",
          desc: "Personal brand for founders expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Personal brand for founders. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Students": [
    {
      category: "Students",
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Internship preparation",
          desc: "Internship preparation expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Internship preparation. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Campus placement prep",
          desc: "Campus placement prep expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Campus placement prep. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SOP review",
          desc: "SOP review expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: SOP review. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scholarship applications",
          desc: "Scholarship applications expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Scholarship applications. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Higher studies planning",
          desc: "Higher studies planning expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Higher studies planning. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Research assistant applications",
          desc: "Research assistant applications expert guidance...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Research assistant applications. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "AI Career Assistant": [
    {
      category: "AI Career Assistant",
      icon: <Bot className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Analyze my resume against a job description",
          desc: "Analyze my resume against a job description exp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Analyze my resume against a job description. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Match my profile to this role",
          desc: "Match my profile to this role expert guidance a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Match my profile to this role. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Generate interview questions from my resume",
          desc: "Generate interview questions from my resume exp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Generate interview questions from my resume. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Find skill gaps",
          desc: "Find skill gaps expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Find skill gaps. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Recommend certifications",
          desc: "Recommend certifications expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Recommend certifications. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Build a 90-day learning roadmap",
          desc: "Build a 90-day learning roadmap expert guidance...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Build a 90-day learning roadmap. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Predict ATS score",
          desc: "Predict ATS score expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Predict ATS score. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Rewrite resume for a specific company",
          desc: "Rewrite resume for a specific company expert gu...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Rewrite resume for a specific company. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Offer Evaluation": [
    {
      category: "Offer Evaluation",
      icon: <Scale className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Compare two job offers",
          desc: "Compare two job offers expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Compare two job offers. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup vs MNC decision",
          desc: "Startup vs MNC decision expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Startup vs MNC decision. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Remote vs onsite analysis",
          desc: "Remote vs onsite analysis expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Remote vs onsite analysis. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Total compensation calculator",
          desc: "Total compensation calculator expert guidance a...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Total compensation calculator. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Equity value estimation",
          desc: "Equity value estimation expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Equity value estimation. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career growth comparison",
          desc: "Career growth comparison expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career growth comparison. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Risk analysis",
          desc: "Risk analysis expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Risk analysis. My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Layoffs & Career Recovery": [
    {
      category: "Layoffs & Career Recovery",
      icon: <LifeBuoy className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Layoff recovery plan",
          desc: "Layoff recovery plan expert guidance and templa...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Layoff recovery plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resume after layoff",
          desc: "Resume after layoff expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume after layoff. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Explain employment gap",
          desc: "Explain employment gap expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Explain employment gap. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Return to workforce",
          desc: "Return to workforce expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Return to workforce. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Confidence rebuilding",
          desc: "Confidence rebuilding expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Confidence rebuilding. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Emergency job search plan",
          desc: "Emergency job search plan expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Emergency job search plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "AI-Powered Career Coach": [
    {
      category: "AI-Powered Career Coach",
      icon: <Compass className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Career coaching session",
          desc: "Career coaching session expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career coaching session. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Weekly accountability coach",
          desc: "Weekly accountability coach expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Weekly accountability coach. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Skill development planner",
          desc: "Skill development planner expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Skill development planner. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Industry trend advisor",
          desc: "Industry trend advisor expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Industry trend advisor. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career decision framework",
          desc: "Career decision framework expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career decision framework. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mentorship simulation",
          desc: "Mentorship simulation expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Mentorship simulation. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Leadership coaching",
          desc: "Leadership coaching expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Leadership coaching. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive coaching",
          desc: "Executive coaching expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Executive coaching. Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Specialized by Profession": [
    {
      category: "Specialized by Profession",
      icon: <UserCircle className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Software Engineer",
          desc: "Software Engineer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Software Engineer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Engineer",
          desc: "AI Engineer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: AI Engineer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Data Scientist",
          desc: "Data Scientist expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Data Scientist. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Manager",
          desc: "Product Manager expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Product Manager. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Designer",
          desc: "Product Designer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Product Designer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX Designer",
          desc: "UX Designer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: UX Designer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Graphic Designer",
          desc: "Graphic Designer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Graphic Designer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mechanical Engineer",
          desc: "Mechanical Engineer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Mechanical Engineer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Civil Engineer",
          desc: "Civil Engineer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Civil Engineer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Electrical Engineer",
          desc: "Electrical Engineer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Electrical Engineer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Manager",
          desc: "Marketing Manager expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Marketing Manager. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Executive",
          desc: "Sales Executive expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Sales Executive. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Analyst",
          desc: "Business Analyst expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Business Analyst. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Financial Analyst",
          desc: "Financial Analyst expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Financial Analyst. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investment Banker",
          desc: "Investment Banker expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Investment Banker. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Consultant",
          desc: "Consultant expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Consultant. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Doctor",
          desc: "Doctor expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Doctor. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Nurse",
          desc: "Nurse expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Nurse. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Lawyer",
          desc: "Lawyer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Lawyer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Teacher",
          desc: "Teacher expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Teacher. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Research Scientist",
          desc: "Research Scientist expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Research Scientist. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Premium Wow Prompts": [
    {
      category: "Premium Wow Prompts",
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Resume -> Job Description Optimizer",
          desc: "Resume -> Job Description Optimizer expert guid...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Resume -> Job Description Optimizer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Interview Simulator",
          desc: "AI Interview Simulator expert guidance and temp...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: AI Interview Simulator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn Profile Makeover",
          desc: "LinkedIn Profile Makeover expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: LinkedIn Profile Makeover. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ATS Resume Checker",
          desc: "ATS Resume Checker expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: ATS Resume Checker. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Salary Negotiation Coach",
          desc: "Salary Negotiation Coach expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Salary Negotiation Coach. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career Roadmap Generator",
          desc: "Career Roadmap Generator expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career Roadmap Generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Company Research Assistant",
          desc: "Company Research Assistant expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Company Research Assistant. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Behavioral Interview Coach (STAR)",
          desc: "Behavioral Interview Coach (STAR) expert guidan...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Behavioral Interview Coach (STAR). Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career Switch Planner",
          desc: "Career Switch Planner expert guidance and templ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career Switch Planner. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Promotion Strategy Coach",
          desc: "Promotion Strategy Coach expert guidance and te...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Promotion Strategy Coach. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Personal Branding Strategist",
          desc: "Personal Branding Strategist expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Personal Branding Strategist. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mock HR Interview",
          desc: "Mock HR Interview expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Mock HR Interview. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical Interview Generator",
          desc: "Technical Interview Generator expert guidance a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Technical Interview Generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Offer Comparison Assistant",
          desc: "Offer Comparison Assistant expert guidance and ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Offer Comparison Assistant. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Job Search Operating System",
          desc: "Job Search Operating System expert guidance and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Job Search Operating System. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Skill Gap Analyzer",
          desc: "Skill Gap Analyzer expert guidance and templates.",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Skill Gap Analyzer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "90-Day Career Growth Plan",
          desc: "90-Day Career Growth Plan expert guidance and t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: 90-Day Career Growth Plan. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Networking Message Generator",
          desc: "Networking Message Generator expert guidance an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Networking Message Generator. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Resume Writer",
          desc: "Executive Resume Writer expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Executive Resume Writer. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career Decision Advisor",
          desc: "Career Decision Advisor expert guidance and tem...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }],
          promptTemplate: "Act as an expert Career Strategist and Advisor. I need your professional help with: Career Decision Advisor. Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
};