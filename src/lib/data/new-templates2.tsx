import React from 'react';
import { TemplateSection } from './templates';
import { Briefcase, Target, Scale, Brain, Calendar, Rocket, DollarSign, Search, ListOrdered, ShieldAlert, Puzzle, Users, Home, Bot, Package, FileText, Lightbulb, Map, Sparkles } from 'lucide-react';

export const NEW_CATEGORIES_2 = ["Business Proposal", "Business Planning", "Decision Making", "Strategic Thinking", "Project Planning", "Startup Planning", "Financial Planning", "Goal Planning", "Research", "Prioritization", "Risk Planning", "Problem Solving", "Team Planning", "Personal Life Planning", "AI Decision Assistant", "Product Management", "Documentation", "Thinking Tools", "Travel & Event Planning", "Premium Wow Prompts"];

export const NEW_TEMPLATES_BY_CATEGORY_2: Record<string, TemplateSection[]> = {
  "Business Proposal": [
    {
      category: "Business Proposal",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Draft a Business Proposal",
          desc: "Expert guidance for draft a business proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with draft a business proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Write a Client Proposal",
          desc: "Expert guidance for write a client proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with write a client proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Partnership Proposal",
          desc: "Expert guidance for partnership proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with partnership proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sponsorship Proposal",
          desc: "Expert guidance for sponsorship proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sponsorship proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Project Proposal",
          desc: "Expert guidance for project proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with project proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Grant Proposal",
          desc: "Expert guidance for grant proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with grant proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Government Tender Proposal",
          desc: "Expert guidance for government tender proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with government tender proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Business Planning": [
    {
      category: "Business Planning",
      icon: <Target className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Business Plan Generator",
          desc: "Expert guidance for business plan generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business plan generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Lean Canvas Builder",
          desc: "Expert guidance for lean canvas builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with lean canvas builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Model Canvas",
          desc: "Expert guidance for business model canvas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business model canvas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Go-to-Market Strategy",
          desc: "Expert guidance for go-to-market strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with go-to-market strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Market Entry Plan",
          desc: "Expert guidance for market entry plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with market entry plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Launch Plan",
          desc: "Expert guidance for product launch plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Revenue Model Designer",
          desc: "Expert guidance for revenue model designer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with revenue model designer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Validation Framework",
          desc: "Expert guidance for business validation framewo...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business validation framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Expansion Strategy",
          desc: "Expert guidance for expansion strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with expansion strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Decision Making": [
    {
      category: "Decision Making",
      icon: <Scale className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Compare Options",
          desc: "Expert guidance for compare options...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare options. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Two Business Ideas",
          desc: "Expert guidance for compare two business ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare two business ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Job Offers",
          desc: "Expert guidance for compare job offers...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare job offers. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Universities",
          desc: "Expert guidance for compare universities...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare universities. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Investment Opportunities",
          desc: "Expert guidance for compare investment opportun...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare investment opportunities. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Software Tools",
          desc: "Expert guidance for compare software tools...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare software tools. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Vendors",
          desc: "Expert guidance for compare vendors...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare vendors. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Cars",
          desc: "Expert guidance for compare cars...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare cars. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Houses",
          desc: "Expert guidance for compare houses...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare houses. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Cities to Live",
          desc: "Expert guidance for compare cities to live...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare cities to live. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Career Paths",
          desc: "Expert guidance for compare career paths...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare career paths. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision Frameworks",
          desc: "Expert guidance for decision frameworks...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision frameworks. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pros & Cons Analysis",
          desc: "Expert guidance for pros & cons analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pros & cons analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Decision Matrix",
          desc: "Expert guidance for decision matrix...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision matrix. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Weighted Scoring Matrix",
          desc: "Expert guidance for weighted scoring matrix...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with weighted scoring matrix. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Risk vs Reward Analysis",
          desc: "Expert guidance for risk vs reward analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with risk vs reward analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Opportunity Cost Analysis",
          desc: "Expert guidance for opportunity cost analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with opportunity cost analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "First Principles Analysis",
          desc: "Expert guidance for first principles analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with first principles analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Eisenhower Matrix",
          desc: "Expert guidance for eisenhower matrix...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with eisenhower matrix. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cost Benefit Analysis",
          desc: "Expert guidance for cost benefit analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cost benefit analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Expected Value Analysis",
          desc: "Expert guidance for expected value analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with expected value analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Strategic Thinking": [
    {
      category: "Strategic Thinking",
      icon: <Brain className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Strategic Planning Assistant",
          desc: "Expert guidance for strategic planning assistan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with strategic planning assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Long-Term Vision Planner",
          desc: "Expert guidance for long-term vision planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with long-term vision planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scenario Planning",
          desc: "Expert guidance for scenario planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scenario planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Future Forecasting",
          desc: "Expert guidance for future forecasting...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with future forecasting. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "What-if Analysis",
          desc: "Expert guidance for what-if analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with what-if analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitive Strategy",
          desc: "Expert guidance for competitive strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitive strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Blue Ocean Strategy",
          desc: "Expert guidance for blue ocean strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with blue ocean strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Strategic Roadmap",
          desc: "Expert guidance for strategic roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with strategic roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Exit Strategy",
          desc: "Expert guidance for exit strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with exit strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Project Planning": [
    {
      category: "Project Planning",
      icon: <Calendar className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Project Planner",
          desc: "Expert guidance for project planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with project planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Project Timeline Builder",
          desc: "Expert guidance for project timeline builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with project timeline builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Sprint Planning",
          desc: "Expert guidance for sprint planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sprint planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resource Allocation",
          desc: "Expert guidance for resource allocation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with resource allocation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Dependency Mapping",
          desc: "Expert guidance for dependency mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with dependency mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Budget Planning",
          desc: "Expert guidance for budget planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with budget planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Delivery Roadmap",
          desc: "Expert guidance for delivery roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with delivery roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Stakeholder Communication Plan",
          desc: "Expert guidance for stakeholder communication p...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with stakeholder communication plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Startup Planning": [
    {
      category: "Startup Planning",
      icon: <Rocket className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Validate Startup Idea",
          desc: "Expert guidance for validate startup idea...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with validate startup idea. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "MVP Roadmap",
          desc: "Expert guidance for mvp roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mvp roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Fundraising Strategy",
          desc: "Expert guidance for fundraising strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with fundraising strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investor Readiness",
          desc: "Expert guidance for investor readiness...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with investor readiness. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Roadmap",
          desc: "Expert guidance for product roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Discovery Plan",
          desc: "Expert guidance for customer discovery plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer discovery plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Founder Decision Advisor",
          desc: "Expert guidance for founder decision advisor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with founder decision advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup Risk Assessment",
          desc: "Expert guidance for startup risk assessment...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with startup risk assessment. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pivot Decision Framework",
          desc: "Expert guidance for pivot decision framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pivot decision framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scale-up Planning",
          desc: "Expert guidance for scale-up planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scale-up planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Financial Planning": [
    {
      category: "Financial Planning",
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Personal Budget Planner",
          desc: "Expert guidance for personal budget planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with personal budget planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Budget Planner",
          desc: "Expert guidance for business budget planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business budget planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investment Planning",
          desc: "Expert guidance for investment planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with investment planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Financial Goal Roadmap",
          desc: "Expert guidance for financial goal roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with financial goal roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Savings Plan",
          desc: "Expert guidance for savings plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with savings plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Debt Repayment Strategy",
          desc: "Expert guidance for debt repayment strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with debt repayment strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Retirement Planning",
          desc: "Expert guidance for retirement planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with retirement planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup Financial Projection",
          desc: "Expert guidance for startup financial projectio...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with startup financial projection. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cash Flow Planning",
          desc: "Expert guidance for cash flow planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cash flow planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Break-even Analysis",
          desc: "Expert guidance for break-even analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with break-even analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Goal Planning": [
    {
      category: "Goal Planning",
      icon: <Target className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "SMART Goal Generator",
          desc: "Expert guidance for smart goal generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with smart goal generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "OKR Planner",
          desc: "Expert guidance for okr planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with okr planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quarterly Goal Planner",
          desc: "Expert guidance for quarterly goal planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with quarterly goal planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Annual Planning",
          desc: "Expert guidance for annual planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with annual planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Weekly Planning",
          desc: "Expert guidance for weekly planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with weekly planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Daily Action Planner",
          desc: "Expert guidance for daily action planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with daily action planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Habit Planning",
          desc: "Expert guidance for habit planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with habit planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Milestone Tracker",
          desc: "Expert guidance for milestone tracker...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with milestone tracker. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Accountability Plan",
          desc: "Expert guidance for accountability plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with accountability plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Success Metrics Builder",
          desc: "Expert guidance for success metrics builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with success metrics builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Research": [
    {
      category: "Research",
      icon: <Search className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Research Any Topic",
          desc: "Expert guidance for research any topic...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with research any topic. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Deep Research Assistant",
          desc: "Expert guidance for deep research assistant...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with deep research assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Literature Review",
          desc: "Expert guidance for literature review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with literature review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Market Research",
          desc: "Expert guidance for market research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with market research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor Research",
          desc: "Expert guidance for competitor research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Industry Analysis",
          desc: "Expert guidance for industry analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with industry analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Technology Research",
          desc: "Expert guidance for technology research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with technology research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Policy Research",
          desc: "Expert guidance for policy research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with policy research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Research",
          desc: "Expert guidance for product research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trend Analysis",
          desc: "Expert guidance for trend analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trend analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Consumer Research",
          desc: "Expert guidance for consumer research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with consumer research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Prioritize Features",
          desc: "Expert guidance for prioritize features...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with prioritize features. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Prioritize Tasks",
          desc: "Expert guidance for prioritize tasks...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with prioritize tasks. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Backlog Prioritization",
          desc: "Expert guidance for product backlog prioritizat...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product backlog prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "RICE Scoring",
          desc: "Expert guidance for rice scoring...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with rice scoring. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "ICE Framework",
          desc: "Expert guidance for ice framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ice framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Opportunity Prioritization",
          desc: "Expert guidance for opportunity prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with opportunity prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Investment Prioritization",
          desc: "Expert guidance for investment prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with investment prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hiring Prioritization",
          desc: "Expert guidance for hiring prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hiring prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Goal Prioritization",
          desc: "Expert guidance for goal prioritization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with goal prioritization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Risk Planning": [
    {
      category: "Risk Planning",
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Risk Register",
          desc: "Expert guidance for risk register...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with risk register. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Risk Mitigation Plan",
          desc: "Expert guidance for risk mitigation plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with risk mitigation plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Contingency Planning",
          desc: "Expert guidance for contingency planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with contingency planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Disaster Recovery Planning",
          desc: "Expert guidance for disaster recovery planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with disaster recovery planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Crisis Management",
          desc: "Expert guidance for crisis management...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with crisis management. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Continuity Planning",
          desc: "Expert guidance for business continuity plannin...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business continuity planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Security Planning",
          desc: "Expert guidance for security planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with security planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Problem Solving": [
    {
      category: "Problem Solving",
      icon: <Puzzle className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Root Cause Analysis",
          desc: "Expert guidance for root cause analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with root cause analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "5 Whys Analysis",
          desc: "Expert guidance for 5 whys analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with 5 whys analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Fishbone Diagram Builder",
          desc: "Expert guidance for fishbone diagram builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with fishbone diagram builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Systems Thinking Analysis",
          desc: "Expert guidance for systems thinking analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with systems thinking analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Constraint Analysis",
          desc: "Expert guidance for constraint analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with constraint analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brainstorm Solutions",
          desc: "Expert guidance for brainstorm solutions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brainstorm solutions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Innovation Workshop",
          desc: "Expert guidance for innovation workshop...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with innovation workshop. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Problem Breakdown",
          desc: "Expert guidance for problem breakdown...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with problem breakdown. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Tradeoff Analysis",
          desc: "Expert guidance for tradeoff analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with tradeoff analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Team Planning": [
    {
      category: "Team Planning",
      icon: <Users className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Meeting Agenda Builder",
          desc: "Expert guidance for meeting agenda builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with meeting agenda builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Workshop Planner",
          desc: "Expert guidance for workshop planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with workshop planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Team Capacity Planning",
          desc: "Expert guidance for team capacity planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with team capacity planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hiring Plan",
          desc: "Expert guidance for hiring plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hiring plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Delegation Planner",
          desc: "Expert guidance for delegation planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with delegation planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Team OKRs",
          desc: "Expert guidance for team okrs...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with team okrs. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Communication Plan",
          desc: "Expert guidance for communication plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with communication plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
        {
          title: "Stakeholder Mapping",
          desc: "Expert guidance for stakeholder mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with stakeholder mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Personal Life Planning": [
    {
      category: "Personal Life Planning",
      icon: <Home className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Life Planning",
          desc: "Expert guidance for life planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with life planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Career Planning",
          desc: "Expert guidance for career planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with career planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Relocation Planning",
          desc: "Expert guidance for relocation planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with relocation planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Wedding Planning",
          desc: "Expert guidance for wedding planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with wedding planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Vacation Planner",
          desc: "Expert guidance for vacation planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with vacation planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Home Buying Decision",
          desc: "Expert guidance for home buying decision...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with home buying decision. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Apartment Comparison",
          desc: "Expert guidance for apartment comparison...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with apartment comparison. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "University Selection",
          desc: "Expert guidance for university selection...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with university selection. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Study Plan",
          desc: "Expert guidance for study plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with study plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Time Management Planner",
          desc: "Expert guidance for time management planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with time management planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "AI Decision Assistant": [
    {
      category: "AI Decision Assistant",
      icon: <Bot className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "AI Advisor for Major Decisions",
          desc: "Expert guidance for ai advisor for major decisi...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai advisor for major decisions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Devil's Advocate",
          desc: "Expert guidance for devil's advocate...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with devil's advocate. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Second Opinion Generator",
          desc: "Expert guidance for second opinion generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with second opinion generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Multi-Perspective Analysis",
          desc: "Expert guidance for multi-perspective analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with multi-perspective analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Bias Detector",
          desc: "Expert guidance for bias detector...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with bias detector. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Blind Spot Finder",
          desc: "Expert guidance for blind spot finder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with blind spot finder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Worst Case Scenario Planner",
          desc: "Expert guidance for worst case scenario planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with worst case scenario planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Best Case Scenario Planner",
          desc: "Expert guidance for best case scenario planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with best case scenario planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision Confidence Checker",
          desc: "Expert guidance for decision confidence checker...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision confidence checker. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Recommendation Engine",
          desc: "Expert guidance for recommendation engine...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with recommendation engine. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Product Management": [
    {
      category: "Product Management",
      icon: <Package className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product Requirement Document (PRD)",
          desc: "Expert guidance for product requirement documen...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product requirement document (prd). Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Roadmap",
          desc: "Expert guidance for product roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "User Story Generator",
          desc: "Expert guidance for user story generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with user story generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Acceptance Criteria",
          desc: "Expert guidance for acceptance criteria...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with acceptance criteria. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Product Strategy",
          desc: "Expert guidance for product strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Vision",
          desc: "Expert guidance for product vision...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product vision. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Product Risk Assessment",
          desc: "Expert guidance for product risk assessment...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product risk assessment. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Documentation": [
    {
      category: "Documentation",
      icon: <FileText className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Business Case",
          desc: "Expert guidance for business case...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business case. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Brief",
          desc: "Expert guidance for executive brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
        {
          title: "Research Report",
          desc: "Expert guidance for research report...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with research report. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Action Plan",
          desc: "Expert guidance for action plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with action plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Strategic Roadmap",
          desc: "Expert guidance for strategic roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with strategic roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Project Charter",
          desc: "Expert guidance for project charter...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with project charter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Requirements Document",
          desc: "Expert guidance for requirements document...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with requirements document. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "One-Pager",
          desc: "Expert guidance for one-pager...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with one-pager. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
      ]
    }
  ],
  "Thinking Tools": [
    {
      category: "Thinking Tools",
      icon: <Lightbulb className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Mental Models Advisor",
          desc: "Expert guidance for mental models advisor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mental models advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Inversion Thinking",
          desc: "Expert guidance for inversion thinking...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with inversion thinking. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Second-Order Thinking",
          desc: "Expert guidance for second-order thinking...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with second-order thinking. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pareto Analysis",
          desc: "Expert guidance for pareto analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pareto analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Decision Tree Generator",
          desc: "Expert guidance for decision tree generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with decision tree generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Bayesian Reasoning Assistant",
          desc: "Expert guidance for bayesian reasoning assistan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with bayesian reasoning assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Systems Mapping",
          desc: "Expert guidance for systems mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with systems mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Critical Thinking Coach",
          desc: "Expert guidance for critical thinking coach...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with critical thinking coach. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Assumption Testing",
          desc: "Expert guidance for assumption testing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with assumption testing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hypothesis Builder",
          desc: "Expert guidance for hypothesis builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hypothesis builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Travel & Event Planning": [
    {
      category: "Travel & Event Planning",
      icon: <Map className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Travel Itinerary",
          desc: "Expert guidance for travel itinerary...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with travel itinerary. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Budget Travel Planner",
          desc: "Expert guidance for budget travel planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with budget travel planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Planning",
          desc: "Expert guidance for event planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conference Planner",
          desc: "Expert guidance for conference planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with conference planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Workshop Planning",
          desc: "Expert guidance for workshop planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with workshop planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Road Trip Planner",
          desc: "Expert guidance for road trip planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with road trip planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Family Vacation Planner",
          desc: "Expert guidance for family vacation planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with family vacation planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Trip Planner",
          desc: "Expert guidance for business trip planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business trip planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Packing Checklist",
          desc: "Expert guidance for packing checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with packing checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Timeline",
          desc: "Expert guidance for event timeline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event timeline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "AI Decision Advisor",
          desc: "Expert guidance for ai decision advisor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai decision advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Compare Multiple Options with a Weighted Decision Matrix",
          desc: "Expert guidance for compare multiple options wi...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with compare multiple options with a weighted decision matrix. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Deep Research Assistant",
          desc: "Expert guidance for deep research assistant...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with deep research assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Proposal Generator",
          desc: "Expert guidance for business proposal generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business proposal generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Startup Validation Framework",
          desc: "Expert guidance for startup validation framewor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with startup validation framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Strategic Planning Consultant",
          desc: "Expert guidance for strategic planning consulta...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with strategic planning consultant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "What-if Scenario Simulator",
          desc: "Expert guidance for what-if scenario simulator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with what-if scenario simulator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Risk Assessment & Mitigation Planner",
          desc: "Expert guidance for risk assessment & mitigatio...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with risk assessment & mitigation planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Prioritization Matrix Generator",
          desc: "Expert guidance for prioritization matrix gener...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with prioritization matrix generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SWOT Analysis Expert",
          desc: "Expert guidance for swot analysis expert...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with swot analysis expert. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Devil's Advocate Review",
          desc: "Expert guidance for devil's advocate review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with devil's advocate review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Root Cause Analysis Assistant",
          desc: "Expert guidance for root cause analysis assista...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with root cause analysis assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Annual Goal & OKR Planner",
          desc: "Expert guidance for annual goal & okr planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with annual goal & okr planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Multi-Perspective Decision Coach",
          desc: "Expert guidance for multi-perspective decision ...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with multi-perspective decision coach. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Project Timeline & Milestone Planner",
          desc: "Expert guidance for project timeline & mileston...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with project timeline & milestone planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Go-to-Market Strategy Builder",
          desc: "Expert guidance for go-to-market strategy build...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with go-to-market strategy builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Financial Planning Advisor",
          desc: "Expert guidance for financial planning advisor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with financial planning advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Business Model Canvas Generator",
          desc: "Expert guidance for business model canvas gener...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with business model canvas generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Executive Decision Memo Writer",
          desc: "Expert guidance for executive decision memo wri...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with executive decision memo writer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
};
