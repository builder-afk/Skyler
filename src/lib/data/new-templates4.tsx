import React from 'react';
import { TemplateSection } from './templates';
import { Compass, Search, FileText, Users, Map, ListOrdered, Target, LineChart, PenTool, TestTube, BarChart2, Rocket, Megaphone, HeartHandshake, RotateCcw, Bot, Smartphone, ShoppingCart, Server, TrendingUp, Shield, FileSignature, Sparkles } from 'lucide-react';

export const NEW_CATEGORIES_4 = ["Product Discovery", "User Research", "Product Requirements", "User Stories", "Roadmapping", "Prioritization", "Product Strategy", "Competitive Research", "UX & Design", "Experimentation", "Metrics & Analytics", "Go-To-Market", "Stakeholder Communication", "Collaboration", "Agile", "AI Product Manager", "Mobile Product Management", "Marketplace Products", "SaaS Product Management", "Growth Product", "Trust & Compliance", "Documentation", "Premium Wow Prompts"];

export const NEW_TEMPLATES_BY_CATEGORY_4: Record<string, TemplateSection[]> = {
  "Product Discovery": [
    {
      category: "Product Discovery",
      icon: <Compass className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Generate Product Ideas",
          desc: "Expert guidance for generate product ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with generate product ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Solve a User Problem",
          desc: "Expert guidance for solve a user problem...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with solve a user problem. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup Idea Validator",
          desc: "Expert guidance for startup idea validator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with startup idea validator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SaaS Idea Generator",
          desc: "Expert guidance for saas idea generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with saas idea generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Product Ideation",
          desc: "Expert guidance for ai product ideation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai product ideation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Brainstorming",
          desc: "Expert guidance for feature brainstorming...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature brainstorming. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Opportunity Finder",
          desc: "Expert guidance for product opportunity finder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product opportunity finder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Blue Ocean Opportunity Analysis",
          desc: "Expert guidance for blue ocean opportunity anal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with blue ocean opportunity analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Innovation Workshop Facilitator",
          desc: "Expert guidance for innovation workshop facilit...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with innovation workshop facilitator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Pain Point Discovery",
          desc: "Expert guidance for customer pain point discove...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer pain point discovery. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Problem Discovery",
          desc: "Expert guidance for problem discovery...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with problem discovery. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Jobs-to-be-Done Analysis",
          desc: "Expert guidance for jobs-to-be-done analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with jobs-to-be-done analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Problem Interview Guide",
          desc: "Expert guidance for customer problem interview ...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer problem interview guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Root Cause Analysis",
          desc: "Expert guidance for root cause analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with root cause analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Opportunity Solution Tree",
          desc: "Expert guidance for opportunity solution tree...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with opportunity solution tree. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Problem Statement Generator",
          desc: "Expert guidance for problem statement generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with problem statement generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Value Proposition Canvas",
          desc: "Expert guidance for value proposition canvas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with value proposition canvas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Needs Analysis",
          desc: "Expert guidance for user needs analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user needs analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Assumption Mapping",
          desc: "Expert guidance for assumption mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with assumption mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hypothesis Generator",
          desc: "Expert guidance for hypothesis generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hypothesis generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Journey Pain Points",
          desc: "Expert guidance for customer journey pain point...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer journey pain points. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "User Research": [
    {
      category: "User Research",
      icon: <Search className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "User Persona Generator",
          desc: "Expert guidance for user persona generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user persona generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ICP Builder",
          desc: "Expert guidance for icp builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with icp builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Interview Questions",
          desc: "Expert guidance for user interview questions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user interview questions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Survey Generator",
          desc: "Expert guidance for survey generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with survey generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Usability Testing Plan",
          desc: "Expert guidance for usability testing plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with usability testing plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Feedback Analysis",
          desc: "Expert guidance for customer feedback analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer feedback analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Voice of Customer Summary",
          desc: "Expert guidance for voice of customer summary...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with voice of customer summary. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Journey Mapping",
          desc: "Expert guidance for user journey mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user journey mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Segmentation",
          desc: "Expert guidance for user segmentation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user segmentation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Empathy Map Generator",
          desc: "Expert guidance for empathy map generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with empathy map generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Product Requirements": [
    {
      category: "Product Requirements",
      icon: <FileText className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Complete PRD Generator",
          desc: "Expert guidance for complete prd generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with complete prd generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "PRD Review",
          desc: "Expert guidance for prd review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with prd review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Product Brief",
          desc: "Expert guidance for executive product brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive product brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Specification",
          desc: "Expert guidance for feature specification...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature specification. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical Requirements",
          desc: "Expert guidance for technical requirements...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with technical requirements. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Functional Requirements",
          desc: "Expert guidance for functional requirements...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with functional requirements. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Non-functional Requirements",
          desc: "Expert guidance for non-functional requirements...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with non-functional requirements. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "MVP Definition",
          desc: "Expert guidance for mvp definition...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mvp definition. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scope Definition",
          desc: "Expert guidance for scope definition...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scope definition. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Acceptance Criteria Generator",
          desc: "Expert guidance for acceptance criteria generat...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with acceptance criteria generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "User Stories": [
    {
      category: "User Stories",
      icon: <Users className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "User Story Generator",
          desc: "Expert guidance for user story generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user story generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Epic Generator",
          desc: "Expert guidance for epic generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with epic generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Breakdown",
          desc: "Expert guidance for feature breakdown...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature breakdown. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Story Mapping",
          desc: "Expert guidance for story mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with story mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Task Breakdown",
          desc: "Expert guidance for task breakdown...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with task breakdown. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Acceptance Test Cases",
          desc: "Expert guidance for acceptance test cases...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with acceptance test cases. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Definition of Done",
          desc: "Expert guidance for definition of done...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with definition of done. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Agile Backlog Creation",
          desc: "Expert guidance for agile backlog creation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with agile backlog creation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sprint Goal Generator",
          desc: "Expert guidance for sprint goal generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint goal generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Release Scope",
          desc: "Expert guidance for release scope...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with release scope. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Roadmapping": [
    {
      category: "Roadmapping",
      icon: <Map className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product Roadmap",
          desc: "Expert guidance for product roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quarterly Roadmap",
          desc: "Expert guidance for quarterly roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with quarterly roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Annual Roadmap",
          desc: "Expert guidance for annual roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with annual roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Prioritization",
          desc: "Expert guidance for feature prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Theme-based Roadmap",
          desc: "Expert guidance for theme-based roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with theme-based roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Outcome-based Roadmap",
          desc: "Expert guidance for outcome-based roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with outcome-based roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Release Planning",
          desc: "Expert guidance for release planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with release planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Milestone Planner",
          desc: "Expert guidance for milestone planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with milestone planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Engineering Roadmap",
          desc: "Expert guidance for engineering roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with engineering roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Roadmap",
          desc: "Expert guidance for executive roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Prioritization": [
    {
      category: "Prioritization",
      icon: <ListOrdered className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "RICE Scoring",
          desc: "Expert guidance for rice scoring...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with rice scoring. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ICE Framework",
          desc: "Expert guidance for ice framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ice framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "MoSCoW Prioritization",
          desc: "Expert guidance for moscow prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with moscow prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Kano Model Analysis",
          desc: "Expert guidance for kano model analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with kano model analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Value vs Effort Matrix",
          desc: "Expert guidance for value vs effort matrix...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with value vs effort matrix. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Impact Mapping",
          desc: "Expert guidance for impact mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with impact mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Opportunity Scoring",
          desc: "Expert guidance for opportunity scoring...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with opportunity scoring. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Ranking",
          desc: "Expert guidance for feature ranking...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature ranking. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical Debt Prioritization",
          desc: "Expert guidance for technical debt prioritizati...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with technical debt prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Request Prioritization",
          desc: "Expert guidance for customer request prioritiza...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer request prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Product Strategy": [
    {
      category: "Product Strategy",
      icon: <Target className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product Vision",
          desc: "Expert guidance for product vision...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product vision. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Mission",
          desc: "Expert guidance for product mission...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product mission. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Strategy",
          desc: "Expert guidance for product strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "North Star Metric",
          desc: "Expert guidance for north star metric...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with north star metric. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Strategic Goals",
          desc: "Expert guidance for strategic goals...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with strategic goals. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Market Positioning",
          desc: "Expert guidance for market positioning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with market positioning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitive Advantage",
          desc: "Expert guidance for competitive advantage...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitive advantage. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Differentiation",
          desc: "Expert guidance for product differentiation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product differentiation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing Strategy",
          desc: "Expert guidance for pricing strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pricing strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Model Analysis",
          desc: "Expert guidance for business model analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business model analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Competitive Research": [
    {
      category: "Competitive Research",
      icon: <LineChart className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Competitor Analysis",
          desc: "Expert guidance for competitor analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Comparison",
          desc: "Expert guidance for feature comparison...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature comparison. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SWOT Analysis",
          desc: "Expert guidance for swot analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with swot analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Benchmarking",
          desc: "Expert guidance for product benchmarking...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product benchmarking. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX Comparison",
          desc: "Expert guidance for ux comparison...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ux comparison. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing Comparison",
          desc: "Expert guidance for pricing comparison...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pricing comparison. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Market Gap Analysis",
          desc: "Expert guidance for market gap analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with market gap analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor Roadmap Guess",
          desc: "Expert guidance for competitor roadmap guess...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor roadmap guess. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Review Analysis",
          desc: "Expert guidance for customer review analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer review analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Win Loss Analysis",
          desc: "Expert guidance for win loss analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with win loss analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "UX & Design": [
    {
      category: "UX & Design",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "UX Writing",
          desc: "Expert guidance for ux writing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ux writing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Onboarding Copy",
          desc: "Expert guidance for onboarding copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with onboarding copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Empty State Copy",
          desc: "Expert guidance for empty state copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with empty state copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Error Messages",
          desc: "Expert guidance for error messages...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with error messages. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Success Messages",
          desc: "Expert guidance for success messages...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with success messages. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Confirmation Dialogs",
          desc: "Expert guidance for confirmation dialogs...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with confirmation dialogs. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Tooltips",
          desc: "Expert guidance for tooltips...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with tooltips. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Notifications",
          desc: "Expert guidance for notifications...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with notifications. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Microcopy",
          desc: "Expert guidance for microcopy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with microcopy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Walkthrough",
          desc: "Expert guidance for feature walkthrough...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature walkthrough. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Help Center Content",
          desc: "Expert guidance for help center content...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with help center content. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Wireframe Ideas",
          desc: "Expert guidance for wireframe ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with wireframe ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Dashboard Layout Suggestions",
          desc: "Expert guidance for dashboard layout suggestion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with dashboard layout suggestions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Information Architecture",
          desc: "Expert guidance for information architecture...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with information architecture. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX Audit",
          desc: "Expert guidance for ux audit...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ux audit. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Accessibility Review",
          desc: "Expert guidance for accessibility review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with accessibility review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Design Critique",
          desc: "Expert guidance for design critique...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with design critique. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Design System Suggestions",
          desc: "Expert guidance for design system suggestions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with design system suggestions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Navigation Planning",
          desc: "Expert guidance for navigation planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with navigation planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile UX Review",
          desc: "Expert guidance for mobile ux review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile ux review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX Heuristic Evaluation",
          desc: "Expert guidance for ux heuristic evaluation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ux heuristic evaluation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Experimentation": [
    {
      category: "Experimentation",
      icon: <TestTube className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "A/B Test Planner",
          desc: "Expert guidance for a/b test planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with a/b test planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hypothesis Generator",
          desc: "Expert guidance for hypothesis generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hypothesis generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Experiment Design",
          desc: "Expert guidance for experiment design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with experiment design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Success Metrics",
          desc: "Expert guidance for success metrics...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with success metrics. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Statistical Significance Guide",
          desc: "Expert guidance for statistical significance gu...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with statistical significance guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Experiment Backlog",
          desc: "Expert guidance for experiment backlog...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with experiment backlog. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Flag Rollout Plan",
          desc: "Expert guidance for feature flag rollout plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature flag rollout plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Beta Testing Strategy",
          desc: "Expert guidance for beta testing strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with beta testing strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "MVP Experiment Design",
          desc: "Expert guidance for mvp experiment design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mvp experiment design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Growth Experiment Ideas",
          desc: "Expert guidance for growth experiment ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with growth experiment ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Metrics & Analytics": [
    {
      category: "Metrics & Analytics",
      icon: <BarChart2 className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "KPI Framework",
          desc: "Expert guidance for kpi framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with kpi framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "North Star Metric",
          desc: "Expert guidance for north star metric...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with north star metric. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Dashboard",
          desc: "Expert guidance for product dashboard...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product dashboard. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Funnel Analysis",
          desc: "Expert guidance for funnel analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with funnel analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Retention Analysis",
          desc: "Expert guidance for retention analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with retention analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Activation Metrics",
          desc: "Expert guidance for activation metrics...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with activation metrics. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Churn Analysis",
          desc: "Expert guidance for churn analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with churn analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Engagement Review",
          desc: "Expert guidance for user engagement review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user engagement review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Adoption Analysis",
          desc: "Expert guidance for feature adoption analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature adoption analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Health Report",
          desc: "Expert guidance for product health report...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product health report. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Go-To-Market": [
    {
      category: "Go-To-Market",
      icon: <Rocket className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "GTM Strategy",
          desc: "Expert guidance for gtm strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with gtm strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Launch Checklist",
          desc: "Expert guidance for product launch checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Launch Timeline",
          desc: "Expert guidance for launch timeline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with launch timeline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Internal Launch Plan",
          desc: "Expert guidance for internal launch plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with internal launch plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Launch Email",
          desc: "Expert guidance for customer launch email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer launch email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Press Release",
          desc: "Expert guidance for press release...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with press release. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Announcement",
          desc: "Expert guidance for product announcement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product announcement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Beta Program Plan",
          desc: "Expert guidance for beta program plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with beta program plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing Launch",
          desc: "Expert guidance for pricing launch...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pricing launch. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Demo Script",
          desc: "Expert guidance for product demo script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product demo script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Stakeholder Communication": [
    {
      category: "Stakeholder Communication",
      icon: <Megaphone className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Executive Update",
          desc: "Expert guidance for executive update...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive update. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sprint Review Summary",
          desc: "Expert guidance for sprint review summary...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint review summary. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Status Report",
          desc: "Expert guidance for product status report...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product status report. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Leadership Brief",
          desc: "Expert guidance for leadership brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with leadership brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investor Product Update",
          desc: "Expert guidance for investor product update...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with investor product update. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Vision Presentation",
          desc: "Expert guidance for product vision presentation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product vision presentation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Pitch",
          desc: "Expert guidance for product pitch...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product pitch. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Kickoff Meeting Brief",
          desc: "Expert guidance for kickoff meeting brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with kickoff meeting brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cross-functional Alignment",
          desc: "Expert guidance for cross-functional alignment...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cross-functional alignment. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision Memo",
          desc: "Expert guidance for decision memo...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision memo. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Collaboration": [
    {
      category: "Collaboration",
      icon: <HeartHandshake className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Engineering Handoff",
          desc: "Expert guidance for engineering handoff...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with engineering handoff. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Design Handoff",
          desc: "Expert guidance for design handoff...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with design handoff. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Enablement",
          desc: "Expert guidance for sales enablement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sales enablement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Success Brief",
          desc: "Expert guidance for customer success brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer success brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Launch Brief",
          desc: "Expert guidance for marketing launch brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing launch brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "QA Testing Checklist",
          desc: "Expert guidance for qa testing checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with qa testing checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Support Documentation",
          desc: "Expert guidance for support documentation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with support documentation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Internal FAQ",
          desc: "Expert guidance for internal faq...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with internal faq. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Release Notes",
          desc: "Expert guidance for release notes...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with release notes. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cross-team Communication",
          desc: "Expert guidance for cross-team communication...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cross-team communication. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Agile": [
    {
      category: "Agile",
      icon: <RotateCcw className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Sprint Planning",
          desc: "Expert guidance for sprint planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sprint Retrospective",
          desc: "Expert guidance for sprint retrospective...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint retrospective. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sprint Review",
          desc: "Expert guidance for sprint review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Daily Standup Summary",
          desc: "Expert guidance for daily standup summary...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with daily standup summary. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Backlog Grooming",
          desc: "Expert guidance for backlog grooming...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with backlog grooming. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Epic Planning",
          desc: "Expert guidance for epic planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with epic planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Story Estimation",
          desc: "Expert guidance for story estimation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with story estimation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scrum Facilitation",
          desc: "Expert guidance for scrum facilitation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scrum facilitation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Agile Coaching",
          desc: "Expert guidance for agile coaching...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with agile coaching. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Capacity Planning",
          desc: "Expert guidance for capacity planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with capacity planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "AI Product Manager": [
    {
      category: "AI Product Manager",
      icon: <Bot className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "AI Product Strategy",
          desc: "Expert guidance for ai product strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai product strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Feature Brainstorm",
          desc: "Expert guidance for ai feature brainstorm...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai feature brainstorm. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Workflow Design",
          desc: "Expert guidance for ai workflow design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai workflow design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Agent Product Ideas",
          desc: "Expert guidance for ai agent product ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai agent product ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Prompt Product Design",
          desc: "Expert guidance for prompt product design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with prompt product design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LLM Product Evaluation",
          desc: "Expert guidance for llm product evaluation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with llm product evaluation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI UX Review",
          desc: "Expert guidance for ai ux review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai ux review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Safety Checklist",
          desc: "Expert guidance for ai safety checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai safety checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Cost Estimation",
          desc: "Expert guidance for ai cost estimation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai cost estimation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Adoption Strategy",
          desc: "Expert guidance for ai adoption strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai adoption strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Mobile Product Management": [
    {
      category: "Mobile Product Management",
      icon: <Smartphone className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Mobile App Roadmap",
          desc: "Expert guidance for mobile app roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile app roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Push Notification Strategy",
          desc: "Expert guidance for push notification strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with push notification strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile Onboarding",
          desc: "Expert guidance for mobile onboarding...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile onboarding. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "App Store Optimization",
          desc: "Expert guidance for app store optimization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with app store optimization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile Feature Prioritization",
          desc: "Expert guidance for mobile feature prioritizati...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile feature prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile UX Review",
          desc: "Expert guidance for mobile ux review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile ux review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile Growth Strategy",
          desc: "Expert guidance for mobile growth strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile growth strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mobile Engagement Analysis",
          desc: "Expert guidance for mobile engagement analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mobile engagement analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Marketplace Products": [
    {
      category: "Marketplace Products",
      icon: <ShoppingCart className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Marketplace Liquidity Strategy",
          desc: "Expert guidance for marketplace liquidity strat...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketplace liquidity strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Supply & Demand Planning",
          desc: "Expert guidance for supply & demand planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with supply & demand planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trust & Safety Framework",
          desc: "Expert guidance for trust & safety framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trust & safety framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketplace Pricing",
          desc: "Expert guidance for marketplace pricing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketplace pricing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Vendor Onboarding",
          desc: "Expert guidance for vendor onboarding...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with vendor onboarding. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Buyer Journey Analysis",
          desc: "Expert guidance for buyer journey analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with buyer journey analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketplace Incentives",
          desc: "Expert guidance for marketplace incentives...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketplace incentives. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketplace Metrics",
          desc: "Expert guidance for marketplace metrics...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketplace metrics. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "SaaS Product Management": [
    {
      category: "SaaS Product Management",
      icon: <Server className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "SaaS Pricing",
          desc: "Expert guidance for saas pricing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with saas pricing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SaaS Feature Roadmap",
          desc: "Expert guidance for saas feature roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with saas feature roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SaaS Retention Strategy",
          desc: "Expert guidance for saas retention strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with saas retention strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trial Conversion",
          desc: "Expert guidance for trial conversion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trial conversion. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Subscription Optimization",
          desc: "Expert guidance for subscription optimization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with subscription optimization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Churn Reduction Plan",
          desc: "Expert guidance for churn reduction plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with churn reduction plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Expansion Revenue Ideas",
          desc: "Expert guidance for expansion revenue ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with expansion revenue ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Success Playbook",
          desc: "Expert guidance for customer success playbook...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer success playbook. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Growth Product": [
    {
      category: "Growth Product",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Activation Strategy",
          desc: "Expert guidance for activation strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with activation strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Retention Strategy",
          desc: "Expert guidance for retention strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with retention strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral System",
          desc: "Expert guidance for referral system...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with referral system. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Viral Loop Design",
          desc: "Expert guidance for viral loop design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral loop design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Habit Loop Design",
          desc: "Expert guidance for habit loop design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with habit loop design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Engagement Campaign",
          desc: "Expert guidance for engagement campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with engagement campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Re-engagement Strategy",
          desc: "Expert guidance for re-engagement strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with re-engagement strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product-led Growth Plan",
          desc: "Expert guidance for product-led growth plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product-led growth plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Trust & Compliance": [
    {
      category: "Trust & Compliance",
      icon: <Shield className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Privacy Review",
          desc: "Expert guidance for privacy review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with privacy review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Security Checklist",
          desc: "Expert guidance for security checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with security checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Risk Assessment",
          desc: "Expert guidance for risk assessment...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with risk assessment. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compliance Planning",
          desc: "Expert guidance for compliance planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compliance planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "GDPR Readiness",
          desc: "Expert guidance for gdpr readiness...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with gdpr readiness. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Accessibility Compliance",
          desc: "Expert guidance for accessibility compliance...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with accessibility compliance. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Incident Response Plan",
          desc: "Expert guidance for incident response plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with incident response plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trust Framework",
          desc: "Expert guidance for trust framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trust framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Documentation": [
    {
      category: "Documentation",
      icon: <FileSignature className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product One-Pager",
          desc: "Expert guidance for product one-pager...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product one-pager. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Summary",
          desc: "Expert guidance for executive summary...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive summary. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Documentation",
          desc: "Expert guidance for feature documentation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature documentation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "API Documentation Outline",
          desc: "Expert guidance for api documentation outline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with api documentation outline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Changelog",
          desc: "Expert guidance for changelog...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with changelog. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision Log",
          desc: "Expert guidance for decision log...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision log. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technical Overview",
          desc: "Expert guidance for technical overview...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with technical overview. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Architecture Overview",
          desc: "Expert guidance for architecture overview...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with architecture overview. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "FAQ Generator",
          desc: "Expert guidance for faq generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with faq generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Knowledge Base Article",
          desc: "Expert guidance for knowledge base article...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with knowledge base article. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Complete PRD Generator",
          desc: "Expert guidance for complete prd generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with complete prd generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Product Manager",
          desc: "Expert guidance for ai product manager...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai product manager. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Strategy Consultant",
          desc: "Expert guidance for product strategy consultant...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product strategy consultant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Roadmap Builder",
          desc: "Expert guidance for product roadmap builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product roadmap builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Prioritization Assistant",
          desc: "Expert guidance for feature prioritization assi...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature prioritization assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Jobs-to-be-Done Research Assistant",
          desc: "Expert guidance for jobs-to-be-done research as...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with jobs-to-be-done research assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Interview Analyzer",
          desc: "Expert guidance for user interview analyzer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user interview analyzer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Launch Planner",
          desc: "Expert guidance for product launch planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor Intelligence Report",
          desc: "Expert guidance for competitor intelligence rep...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor intelligence report. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Metrics Dashboard Designer",
          desc: "Expert guidance for product metrics dashboard d...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product metrics dashboard designer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Feedback Synthesizer",
          desc: "Expert guidance for customer feedback synthesiz...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer feedback synthesizer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Vision & North Star Creator",
          desc: "Expert guidance for product vision & north star...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product vision & north star creator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "GTM Strategy Builder",
          desc: "Expert guidance for gtm strategy builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with gtm strategy builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Experiment Designer",
          desc: "Expert guidance for product experiment designer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product experiment designer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Adoption Analysis",
          desc: "Expert guidance for feature adoption analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature adoption analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "User Story & Acceptance Criteria Generator",
          desc: "Expert guidance for user story & acceptance cri...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user story & acceptance criteria generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UX Copywriter",
          desc: "Expert guidance for ux copywriter...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ux copywriter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Decision Memo Writer",
          desc: "Expert guidance for product decision memo write...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product decision memo writer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Product Review Generator",
          desc: "Expert guidance for executive product review ge...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive product review generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Copilot for Product Managers",
          desc: "Expert guidance for ai copilot for product mana...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai copilot for product managers. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
};
