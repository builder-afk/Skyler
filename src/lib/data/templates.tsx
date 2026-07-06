import React from 'react';
import { Briefcase, Mail, CheckSquare, FileText, AlignLeft, Send, RotateCcw, Target, PhoneCall, Presentation, Shield, LineChart, Share2, Rocket, MailOpen, MessageCircle, Megaphone, MousePointerClick, Calendar, Star, BarChart2, Radio, Users, Compass, FileSignature, Map, PenTool, Code, FileCode, MessageSquare, Server, TrendingUp, Mic, Handshake, HeartHandshake, Lightbulb, DollarSign, Settings, Database, Calculator, Search, Share, BarChart } from 'lucide-react';
import { NEW_CATEGORIES, NEW_TEMPLATES_BY_CATEGORY } from './new-templates';
import { NEW_CATEGORIES_2, NEW_TEMPLATES_BY_CATEGORY_2 } from './new-templates2';
import { NEW_CATEGORIES_3, NEW_TEMPLATES_BY_CATEGORY_3 } from './new-templates3';
import { NEW_CATEGORIES_4, NEW_TEMPLATES_BY_CATEGORY_4 } from './new-templates4';

export type PromptVariable = {
  id: string;
  label: string;
  placeholder: string;
};

export type EnhancedTemplateItem = {
  title: string;
  desc: string;
  author: string;
  variables: PromptVariable[];
  promptTemplate: string;
  expectedOutput: string;
};

export type TemplateSection = {
  category: string;
  icon: React.ReactNode;
  items: EnhancedTemplateItem[];
};

const RAW_CATEGORIES = ["Recommended", "General", "Sales", "Marketing", "Product Management", "Engineering", "Founder", "Operations", "Customer Success", "Data", "Finance", "Legal", "Consultant", "HR", ...NEW_CATEGORIES, ...NEW_CATEGORIES_2, ...NEW_CATEGORIES_3, ...NEW_CATEGORIES_4];
export const CATEGORIES = Array.from(new Set(RAW_CATEGORIES));



const BASE_TEMPLATES_BY_CATEGORY: Record<string, TemplateSection[]> = {
  "General": [
    {
      category: "Career",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Refresh your LinkedIn summary",
          desc: "Position your profile for a career move...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me refresh my linkedin summary. Context: Position my profile for a career move. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare for an interview",
          desc: "Anticipate questions, plan your answers...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare for an interview. Context: Anticipate questions, plan my answers. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Nail behavioural questions",
          desc: "STAR-format answers drawn from your real...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me nail behavioural questions. Context: STAR-format answers drawn from my real. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Research a company pre-interview",
          desc: "Key intel to sound informed and ask shar...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me research a company pre-interview. Context: Key intel to sound informed and ask shar. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Writing & Emails",
      icon: <Mail className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Tackle a difficult email",
          desc: "Navigate sensitive topics with the right...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me tackle a difficult email. Context: Navigate sensitive topics with the right. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Push back professionally",
          desc: "Disagree or decline without burning bridges...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me push back professionally. Context: Disagree or decline without burning bridges. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up on no response",
          desc: "Polite nudges that actually get replies...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up on no response. Context: Polite nudges that actually get replies. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a thank-you email",
          desc: "Thoughtful follow-ups after meetings or...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send a thank-you email. Context: Thoughtful follow-ups after meetings or. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Planning & Decisions",
      icon: <CheckSquare className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Draft a business proposal",
          desc: "Structure a compelling pitch for a project...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a business proposal. Context: Structure a compelling pitch for a project. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build an internal business case",
          desc: "Get stakeholder buy-in with a structured...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build an internal business case. Context: Get stakeholder buy-in with a structured. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Compare options",
          desc: "Side-by-side analysis with a clear...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me compare options. Context: Side-by-side analysis with a clear. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Research any topic",
          desc: "Comprehensive briefing on any subject you...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me research any topic. Context: Comprehensive briefing on any subject you. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Research",
      icon: <FileText className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Research a person",
          desc: "Collect background intel on someone...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me research a person. Context: Collect background intel on someone. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Profile a potential employer",
          desc: "Due diligence on culture, finances, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me profile a potential employer. Context: Due diligence on culture, finances, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Understand an industry fast",
          desc: "Key players, trends, and dynamics in any market...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me understand an industry fast. Context: Key players, trends, and dynamics in any market. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Get a market snapshot",
          desc: "Current state, recent shifts, and what to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me get a market snapshot. Context: Current state, recent shifts, and what to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Summarise",
      icon: <AlignLeft className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Distill meeting notes",
          desc: "Clean up messy notes into a clear summary...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me distill meeting notes. Context: Clean up messy notes into a clear summary. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recap a meeting",
          desc: "Turn your notes into a polished follow-up...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recap a meeting. Context: Turn my notes into a polished follow-up. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Simplify a complex document",
          desc: "Rewrite dense or technical content in...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me simplify a complex document. Context: Rewrite dense or technical content in. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain something technical",
          desc: "Make complex topics accessible for any...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain something technical. Context: Make complex topics accessible for any. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Sales": [
    {
      category: "Cold Outreach",
      icon: <Send className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Craft a cold outreach email",
          desc: "Write a first-touch email people actually respon...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a cold outreach email. Context: Write a first-touch email people actually respon. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a LinkedIn connection request",
          desc: "Connection notes that earn accepts from...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a linkedin connection request. Context: Connection notes that earn accepts from. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Script a cold call opener",
          desc: "Permission-based openers that survive...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me script a cold call opener. Context: Permission-based openers that survive. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a 3-email outreach sequence",
          desc: "Multi-touch cadence where each email earn...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me build a 3-email outreach sequence. Context: Multi-touch cadence where each email earn. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Follow-Up",
      icon: <RotateCcw className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Draft a no-reply follow-up email",
          desc: "Second touch with a fresh angle, not a...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a no-reply follow-up email. Context: Second touch with a fresh angle, not a. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recap a discovery call",
          desc: "Follow-up emails that lock in next steps whil...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recap a discovery call. Context: Follow-up emails that lock in next steps whil. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up on unanswered...",
          desc: "Break proposal silence by addressing the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up on unanswered.... Context: Break proposal silence by addressing the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a breakup email",
          desc: "Permission-to-close emails that...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send a breakup email. Context: Permission-to-close emails that. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Prospect Research & Account Planning",
      icon: <Target className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Research a company pre-call",
          desc: "Intel brief covering tech stack, news, and pain...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me research a company pre-call. Context: Intel brief covering tech stack, news, and pain. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a strategic account plan",
          desc: "Full account plan with stakeholder map and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a strategic account plan. Context: Full account plan with stakeholder map and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Identify buying signals for outreach",
          desc: "Trigger events that tell you exactly when to...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me identify buying signals for outreach. Context: Trigger events that tell me exactly when to. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Score and tier account lists",
          desc: "ICP-scored Tier 1/2/3 classification from raw...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me score and tier account lists. Context: ICP-scored Tier 1/2/3 classification from raw. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Discovery & Sales Calls",
      icon: <PhoneCall className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Script a discovery call",
          desc: "Sequenced qualification questions...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me script a discovery call. Context: Sequenced qualification questions. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Plan a CTO discovery meeting",
          desc: "Timed agenda that earns credibility with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan a cto discovery meeting. Context: Timed agenda that earns credibility with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare industry-specific discovery...",
          desc: "Ten questions layered from situation to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare industry-specific discovery.... Context: Ten questions layered from situation to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a discovery call role-play",
          desc: "Realistic mock call with coaching notes for...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a discovery call role-play. Context: Realistic mock call with coaching notes for. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Proposals & Pitches",
      icon: <Presentation className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Craft a personalized pitch email",
          desc: "Value-led emails grounded in the...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a personalized pitch email. Context: Value-led emails grounded in the. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Outline a sales pitch deck",
          desc: "Narrative-arc slide structure that leads...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline a sales pitch deck. Context: Narrative-arc slide structure that leads. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Sharpen your elevator pitch",
          desc: "Three versions: 30-second, 60-second,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me sharpen my elevator pitch. Context: Three versions: 30-second, 60-second,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a competitive battle card",
          desc: "Honest strengths, weaknesses, and trap...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a competitive battle card. Context: Honest strengths, weaknesses, and trap. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Objection Handling",
      icon: <Shield className="w-5 h-5 text-red-500" />,
      items: [
        {
          title: "Handle your top five objections",
          desc: "Word-for-word response scripts with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me handle my top five objections. Context: Word-for-word response scripts with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Counter the happy-with-vendor objection",
          desc: "Three response paths that surface gaps...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me counter the happy-with-vendor objection. Context: Three response paths that surface gaps. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Navigate the no-budget objection",
          desc: "Diagnostic responses that uncover whether I...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me navigate the no-budget objection. Context: Diagnostic responses that uncover whether I. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Design an objection role-play scenario",
          desc: "Training scenario where the prospect pushes...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design an objection role-play scenario. Context: Training scenario where the prospect pushes. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Post-Call & CRM",
      icon: <LineChart className="w-5 h-5 text-teal-500" />,
      items: [
        {
          title: "Summarize a call into CRM notes",
          desc: "Structured notes with pain points,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize a call into crm notes. Context: Structured notes with pain points,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a post-call follow-up email",
          desc: "Recap email with owned next steps and...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a post-call follow-up email. Context: Recap email with owned next steps and. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Generate a deal review canvas",
          desc: "Qualification snapshot a VP of Sales can...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me generate a deal review canvas. Context: Qualification snapshot a VP of Sales can. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a pipeline forecast update",
          desc: "Committed vs. upside vs. at-risk deals with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a pipeline forecast update. Context: Committed vs. upside vs. at-risk deals with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "LinkedIn & Social Selling",
      icon: <Share2 className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Publish a thought leadership post",
          desc: "LinkedIn posts with a scroll-stopping hook...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me publish a thought leadership post. Context: LinkedIn posts with a scroll-stopping hook. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Map a LinkedIn DM sequence",
          desc: "Three-message flow from connection acce...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me map a linkedin dm sequence. Context: Three-message flow from connection acce. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Optimize your LinkedIn summary",
          desc: "Profile copy that makes prospects accept your...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me optimize my linkedin summary. Context: Profile copy that makes prospects accept your. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a mutual-connection intro note",
          desc: "Connection request that leverages a share...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a mutual-connection intro note. Context: Connection request that leverages a share. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Sales Enablement & Strategy",
      icon: <Rocket className="w-5 h-5 text-pink-500" />,
      items: [
        {
          title: "Draft a sales playbook section",
          desc: "Prospecting-to-closing playbook with scripts...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a sales playbook section. Context: Prospecting-to-closing playbook with scripts. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create a 30-60-90 ramp plan",
          desc: "Phased onboarding milestones for a new...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create a 30-60-90 ramp plan. Context: Phased onboarding milestones for a new. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Marketing": [
    {
      category: "Email Marketing",
      icon: <MailOpen className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Create a launch email campaign",
          desc: "Create emails that get people excited about...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me create a launch email campaign. Context: Create emails that get people excited about. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a 5-part nurture sequence",
          desc: "Drip emails that warm leads into sales...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a 5-part nurture sequence. Context: Drip emails that warm leads into sales. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Revive inactive subscribers",
          desc: "Win-back emails that reactivate without...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me revive inactive subscribers. Context: Win-back emails that reactivate without. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recover abandoned carts",
          desc: "Three-email sequence that brings shoppers...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recover abandoned carts. Context: Three-email sequence that brings shoppers. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Social Media Content",
      icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Plan a week of LinkedIn posts",
          desc: "Five B2B posts from thought leadership to...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me plan a week of linkedin posts. Context: Five B2B posts from thought leadership to. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Caption a product photo",
          desc: "Instagram captions in three angles with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me caption a product photo. Context: Instagram captions in three angles with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Outline a viral X thread",
          desc: "Ten-tweet thread that delivers concentrated...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline a viral x thread. Context: Ten-tweet thread that delivers concentrated. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Map a 30-day content calendar",
          desc: "Day-by-day social plan with themes and post...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me map a 30-day content calendar. Context: Day-by-day social plan with themes and post. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "SEO & Blog Content",
      icon: <Search className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Outline an SEO blog post",
          desc: "Keyword-targeted outline with H2s,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline an seo blog post. Context: Keyword-targeted outline with H2s,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a long-form blog article",
          desc: "1,500-word post with authority, structure, an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a long-form blog article. Context: 1,500-word post with authority, structure, an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Generate ten blog title ideas",
          desc: "SEO-grounded titles across five different...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me generate ten blog title ideas. Context: SEO-grounded titles across five different. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Optimize meta titles and descriptions",
          desc: "Three click-earning meta sets for search...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me optimize meta titles and descriptions. Context: Three click-earning meta sets for search. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Ad Copy",
      icon: <Megaphone className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Craft Google Search ad copy",
          desc: "15 RSA headlines and 4 descriptions with angl...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft google search ad copy. Context: 15 RSA headlines and 4 descriptions with angl. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build lead gen ad copy",
          desc: "Three Facebook ad angles that convert...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build lead gen ad copy. Context: Three Facebook ad angles that convert. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Script a YouTube pre-roll ad",
          desc: "15-30 second script designed to survive th...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me script a youtube pre-roll ad. Context: 15-30 second script designed to survive th. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft retargeting display ads",
          desc: "Multi-size ad copy that brings warm visitors...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft retargeting display ads. Context: Multi-size ad copy that brings warm visitors. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Landing Pages & Conversion",
      icon: <MousePointerClick className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Structure a product landing page",
          desc: "Hero-to-CTA copy that converts visitors into...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me structure a product landing page. Context: Hero-to-CTA copy that converts visitors into. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Sell a webinar registration",
          desc: "Landing page copy that earns the time...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me sell a webinar registration. Context: Landing page copy that earns the time. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Design a lead magnet page",
          desc: "Download page copy that makes the email...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design a lead magnet page. Context: Download page copy that makes the email. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Generate headline A/B variants",
          desc: "Five challenger headlines testing...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me generate headline a/b variants. Context: Five challenger headlines testing. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Content Strategy & Planning",
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Build a SaaS content strategy",
          desc: "Pillar-based plan connecting content to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a saas content strategy. Context: Pillar-based plan connecting content to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Plan a 3-month editorial calendar",
          desc: "Week-by-week publishing roadmap...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan a 3-month editorial calendar. Context: Week-by-week publishing roadmap. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Define brand messaging guidelines",
          desc: "Positioning, tone, and persona-specific...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me define brand messaging guidelines. Context: Positioning, tone, and persona-specific. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Develop a buyer persona",
          desc: "Actionable profile with motivations, triggers,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me develop a buyer persona. Context: Actionable profile with motivations, triggers,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Case Studies & Testimonials",
      icon: <Star className="w-5 h-5 text-rose-500" />,
      items: [
        {
          title: "Transform notes into a case study",
          desc: "Customer story structured as a sales-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me transform notes into a case study. Context: Customer story structured as a sales-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Polish a raw testimonial",
          desc: "Three formats from pullquote to full story...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me polish a raw testimonial. Context: Three formats from pullquote to full story. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Assemble a social proof section",
          desc: "Trust-building block with stats, logos, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me assemble a social proof section. Context: Trust-building block with stats, logos, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Competitor & Market Research",
      icon: <BarChart2 className="w-5 h-5 text-cyan-500" />,
      items: [
        {
          title: "Compare against two competitors",
          desc: "Honest analysis with positioning plays and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me compare against two competitors. Context: Honest analysis with positioning plays and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Distill market research findings",
          desc: "Executive-ready brief with insights and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me distill market research findings. Context: Executive-ready brief with insights and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize an analyst report",
          desc: "Readable trend brief from dense Gartner or...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize an analyst report. Context: Readable trend brief from dense Gartner or. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Campaign & Event Promotion",
      icon: <Radio className="w-5 h-5 text-fuchsia-500" />,
      items: [
        {
          title: "Promote a webinar launch",
          desc: "Three emails and three social posts on a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me promote a webinar launch. Context: Three emails and three social posts on a. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Brief a product launch campaign",
          desc: "Multi-channel campaign plan from...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me brief a product launch campaign. Context: Multi-channel campaign plan from. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Pitch an influencer partnership",
          desc: "Personalized outreach that leads with respec...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch an influencer partnership. Context: Personalized outreach that leads with respec. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Launch a referral program",
          desc: "Landing page and invite email that frame...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me launch a referral program. Context: Landing page and invite email that frame. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Internal Marketing",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      items: [
        {
          title: "Present quarterly marketing OKRs",
          desc: "QBR scorecard connecting activity to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me present quarterly marketing okrs. Context: QBR scorecard connecting activity to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Brief a creative agency",
          desc: "Campaign brief that aligns teams and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me brief a creative agency. Context: Campaign brief that aligns teams and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Report post-campaign...",
          desc: "Results analysis with findings, learnings, an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me report post-campaign.... Context: Results analysis with findings, learnings, an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Product Management": [
    {
      category: "Discovery & Research",
      icon: <Compass className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Create a discovery interview guide",
          desc: "Uncover real user behavior with open-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create a discovery interview guide. Context: Uncover real user behavior with open-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Synthesize research into insights",
          desc: "Turn raw interview notes into named...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me synthesize research into insights. Context: Turn raw interview notes into named. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Run a competitive analysis",
          desc: "Compare positioning, workflows, and gaps...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me run a competitive analysis. Context: Compare positioning, workflows, and gaps. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Design a feature feedback survey",
          desc: "Build decision-quality questions that map...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design a feature feedback survey. Context: Build decision-quality questions that map. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Requirements & Specs",
      icon: <FileSignature className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Build a PRD",
          desc: "Lay out what you're building, why, and how...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a prd. Context: Lay out what you're building, why, and how. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Decompose a PRD into stories",
          desc: "Break a feature brief into sprint-ready storie...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me decompose a prd into stories. Context: Break a feature brief into sprint-ready storie. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Tighten acceptance criteria",
          desc: "Add Given-When-Then scenarios covering...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me tighten acceptance criteria. Context: Add Given-When-Then scenarios covering. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft an engineering handoff spec",
          desc: "Bridge the PRD-to-implementation gap...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft an engineering handoff spec. Context: Bridge the PRD-to-implementation gap. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Roadmap & Planning",
      icon: <Map className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Narrate a product roadmap",
          desc: "Frame strategic bets as a story for all-hands or...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me narrate a product roadmap. Context: Frame strategic bets as a story for all-hands or. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a quarterly strategy memo",
          desc: "Give leadership a clear picture of direction,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a quarterly strategy memo. Context: Give leadership a clear picture of direction,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Compose customer release notes",
          desc: "Turn a changelog into benefit-led copy...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me compose customer release notes. Context: Turn a changelog into benefit-led copy. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a sprint planning brief",
          desc: "Align the team on one sprint goal with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a sprint planning brief. Context: Align the team on one sprint goal with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Stakeholder Communication",
      icon: <Megaphone className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Pitch a feature for buy-in",
          desc: "Earn engineering and design support with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch a feature for buy-in. Context: Earn engineering and design support with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Communicate a feature delay",
          desc: "Deliver timeline bad news with honesty,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me communicate a feature delay. Context: Deliver timeline bad news with honesty,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Craft a product update notice",
          desc: "Announce a feature so customers feel it was...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a product update notice. Context: Announce a feature so customers feel it was. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a kickoff brief",
          desc: "Get every team to the same starting point...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a kickoff brief. Context: Get every team to the same starting point. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Metrics & Analytics",
      icon: <LineChart className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Define feature success metrics",
          desc: "Set L1/L2 KPIs with baselines, targets, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me define feature success metrics. Context: Set L1/L2 KPIs with baselines, targets, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Design a product experiment",
          desc: "Structure an A/B test with a falsifiable...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design a product experiment. Context: Structure an A/B test with a falsifiable. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize a weekly analytics digest",
          desc: "Turn raw numbers into a headline insight with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize a weekly analytics digest. Context: Turn raw numbers into a headline insight with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Run a post-launch retrospective",
          desc: "Capture quantified wins, honest misses,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me run a post-launch retrospective. Context: Capture quantified wins, honest misses,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "User Experience",
      icon: <PenTool className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Write onboarding UX copy",
          desc: "Craft empty states, tooltips, and error...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me write onboarding ux copy. Context: Craft empty states, tooltips, and error. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft UI microcopy",
          desc: "Nail modal titles, button labels, and validation...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft ui microcopy. Context: Nail modal titles, button labels, and validation. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Script a usability test session",
          desc: "Guide a moderated prototype review that...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me script a usability test session. Context: Guide a moderated prototype review that. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Go-to-Market",
      icon: <Rocket className="w-5 h-5 text-pink-500" />,
      items: [
        {
          title: "Announce a product launch",
          desc: "Produce a blog post and LinkedIn hook that...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a product launch. Context: Produce a blog post and LinkedIn hook that. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build an internal launch FAQ",
          desc: "Arm sales, support, and success with answers...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build an internal launch faq. Context: Arm sales, support, and success with answers. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create a sales one-pager",
          desc: "Give AEs a scannable doc with problem,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create a sales one-pager. Context: Give AEs a scannable doc with problem,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Invite users to a beta program",
          desc: "Make selected users feel like co-owners, no...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me invite users to a beta program. Context: Make selected users feel like co-owners, no. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Engineering": [
    {
      category: "Coding & Debugging",
      icon: <Code className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Build a production function",
          desc: "Clean, tested code with edge case handling...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a production function. Context: Clean, tested code with edge case handling. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Debug broken code",
          desc: "Root cause analysis with traced execution...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me debug broken code. Context: Root cause analysis with traced execution. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Refactor existing code",
          desc: "Improved structure without behaviour...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me refactor existing code. Context: Improved structure without behaviour. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create unit test suite",
          desc: "Contract-based tests covering happy path,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create unit test suite. Context: Contract-based tests covering happy path,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Technical Writing & Documentation",
      icon: <FileCode className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Draft a project README",
          desc: "Zero-to-running guide with setup, usage, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a project readme. Context: Zero-to-running guide with setup, usage, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Document an API endpoint",
          desc: "Complete endpoint contract with schema...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me document an api endpoint. Context: Complete endpoint contract with schema. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Outline a technical design doc",
          desc: "Problem, proposed solution, tradeoffs, an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline a technical design doc. Context: Problem, proposed solution, tradeoffs, an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Annotate code with docstrings",
          desc: "Intent-focused comments and IDE-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me annotate code with docstrings. Context: Intent-focused comments and IDE-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Engineering Communication",
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Describe a pull request",
          desc: "Reviewer-ready summary with context,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me describe a pull request. Context: Reviewer-ready summary with context,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a technical RFC",
          desc: "Alignment-focused proposal with honest...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a technical rfc. Context: Alignment-focused proposal with honest. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Announce a platform migration",
          desc: "Direct team update with timeline, impact, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a platform migration. Context: Direct team update with timeline, impact, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain a technical decision",
          desc: "Business-framed email connecting your...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain a technical decision. Context: Business-framed email connecting your. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: <Server className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Build a deployment checklist",
          desc: "Sequenced pre-flight, execution, and rollbac...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a deployment checklist. Context: Sequenced pre-flight, execution, and rollbac. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft an on-call runbook",
          desc: "Alert-specific triage with diagnostic...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft an on-call runbook. Context: Alert-specific triage with diagnostic. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a cloud migration request",
          desc: "Risk-assessed change request with rollback...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a cloud migration request. Context: Risk-assessed change request with rollback. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Hiring & Team",
      icon: <Users className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Craft an engineering job post",
          desc: "Honest role description that attracts strong...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft an engineering job post. Context: Honest role description that attracts strong. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Design technical interview questions",
          desc: "Signal-rich questions with rubrics and follow...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design technical interview questions. Context: Signal-rich questions with rubrics and follow. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Plan engineer onboarding",
          desc: "Day-one to month-one guide with setup,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan engineer onboarding. Context: Day-one to month-one guide with setup,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Founder": [
    {
      category: "Investor Relations",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Craft a VC cold email",
          desc: "Get replies from investors who usually...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a vc cold email. Context: Get replies from investors who usually. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up after a pitch meeting",
          desc: "Turn a first meeting into a second one with the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up after a pitch meeting. Context: Turn a first meeting into a second one with the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a standout investor update",
          desc: "Build investor confidence with hones...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a standout investor update. Context: Build investor confidence with hones. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Nail your pitch deck summary",
          desc: "Tell your full company story in under 180...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me nail my pitch deck summary. Context: Tell my full company story in under 180. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Strategic Communications",
      icon: <Mic className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Announce major news at all-hands",
          desc: "Deliver company-wide news that builds trust...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce major news at all-hands. Context: Deliver company-wide news that builds trust. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a board meeting update",
          desc: "Give board members a decision-ready...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a board meeting update. Context: Give board members a decision-ready. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose a strategic partnership",
          desc: "Open the door with a partner by leading wit...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose a strategic partnership. Context: Open the door with a partner by leading wit. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a press release",
          desc: "Get media coverage with a journalist-ready...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a press release. Context: Get media coverage with a journalist-ready. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Business Development",
      icon: <Handshake className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Open enterprise doors cold",
          desc: "Land meetings with executives through...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me open enterprise doors cold. Context: Land meetings with executives through. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up after a key meeting",
          desc: "Advance the deal by proving you were...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up after a key meeting. Context: Advance the deal by proving me were. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Pitch a B2B partnership",
          desc: "Structure a partnership proposal that is easy t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch a b2b partnership. Context: Structure a partnership proposal that is easy t. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Brief your team pre-meeting",
          desc: "Walk into any executive meeting with full...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me brief my team pre-meeting. Context: Walk into any executive meeting with full. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Team & Culture Communications",
      icon: <HeartHandshake className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Draft a performance improvement plan",
          desc: "Set clear, measurable expectations that give...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a performance improvement plan. Context: Set clear, measurable expectations that give. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Announce a C-suite hire",
          desc: "Signal strategic direction through a ne...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a c-suite hire. Context: Signal strategic direction through a ne. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recognize a team accomplishment",
          desc: "Make people feel genuinely seen with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recognize a team accomplishment. Context: Make people feel genuinely seen with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Communicate a difficult decision",
          desc: "Deliver hard news with the honesty and clarit...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me communicate a difficult decision. Context: Deliver hard news with the honesty and clarit. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Thought Leadership",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Share a bold LinkedIn take",
          desc: "Build authority with a specific position most...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me share a bold linkedin take. Context: Build authority with a specific position most. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Tell your founder origin story",
          desc: "Make your About page explain why you...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me tell my founder origin story. Context: Make my About page explain why you. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Publish a founder newsletter issue",
          desc: "Turn a hard-won business lesson into...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me publish a founder newsletter issue. Context: Turn a hard-won business lesson into. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Pitch an op-ed to media",
          desc: "Get an editor to say yes with a sharp, timely...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch an op-ed to media. Context: Get an editor to say yes with a sharp, timely. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Go-to-Market & Strategy",
      icon: <Target className="w-5 h-5 text-cyan-500" />,
      items: [
        {
          title: "Plan your go-to-market launch",
          desc: "Prioritize the highest-leverage moves given...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan my go-to-market launch. Context: Prioritize the highest-leverage moves given. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Map your competitive landscape",
          desc: "Show the board where you win, where you...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me map my competitive landscape. Context: Show the board where me win, where you. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build an actionable SWOT analysis",
          desc: "Turn strengths, weaknesses, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build an actionable swot analysis. Context: Turn strengths, weaknesses, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Review quarterly OKRs honestly",
          desc: "Grade the quarter with real numbers and root...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me review quarterly okrs honestly. Context: Grade the quarter with real numbers and root. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Customer & Revenue",
      icon: <DollarSign className="w-5 h-5 text-rose-500" />,
      items: [
        {
          title: "Save an at-risk customer",
          desc: "Re-engage a churning account with a specifi...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me save an at-risk customer. Context: Re-engage a churning account with a specifi. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose an upsell naturally",
          desc: "Frame an upgrade around the customer's...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose an upsell naturally. Context: Frame an upgrade around the customer's. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request a customer reference",
          desc: "Ask for a reference in a way that deepens the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request a customer reference. Context: Ask for a reference in a way that deepens the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Collect a testimonial or case study",
          desc: "Make it effortless for a happy customer to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me collect a testimonial or case study. Context: Make it effortless for a happy customer to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Operations & Vendor Management",
      icon: <Settings className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Negotiate vendor contract terms",
          desc: "Set the right power dynamic from the first...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me negotiate vendor contract terms. Context: Set the right power dynamic from the first. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Outline an agency scope of work",
          desc: "Prevent scope creep with a document that...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline an agency scope of work. Context: Prevent scope creep with a document that. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Decline a vendor gracefully",
          desc: "Say no without burning a bridge you might...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me decline a vendor gracefully. Context: Say no without burning a bridge me might. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Brief the team on a process change",
          desc: "Get adoption by explaining the why, the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me brief the team on a process change. Context: Get adoption by explaining the why, the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Operations": [
    {
      category: "Process Documentation",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Build a training-ready SOP",
          desc: "Step-by-step procedure a new hire...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a training-ready sop. Context: Step-by-step procedure a new hire. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Map a vendor onboarding process",
          desc: "Numbered workflow from signed contract t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me map a vendor onboarding process. Context: Numbered workflow from signed contract t. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Document a team workflow",
          desc: "Turn tribal knowledge into a numbered...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me document a team workflow. Context: Turn tribal knowledge into a numbered. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create a tool rollout FAQ",
          desc: "Pre-empt adoption friction with answers t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create a tool rollout faq. Context: Pre-empt adoption friction with answers t. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Project Communication",
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Compose a project kickoff email",
          desc: "Align stakeholders on scope, roles, timeline,...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me compose a project kickoff email. Context: Align stakeholders on scope, roles, timeline,. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a project status update",
          desc: "Bottom-line-up-front email covering...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a project status update. Context: Bottom-line-up-front email covering. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize a project close-out",
          desc: "Completion record capturing deliverables,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize a project close-out. Context: Completion record capturing deliverables,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Escalate a project risk",
          desc: "Precision email giving leadership the situatio...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me escalate a project risk. Context: Precision email giving leadership the situatio. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Vendor & Supplier Management",
      icon: <Briefcase className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Draft a vendor RFI/RFP",
          desc: "Evaluation request that forces specific,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a vendor rfi/rfp. Context: Evaluation request that forces specific,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a vendor onboarding email",
          desc: "Checklist-style email with every requiremen...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send a vendor onboarding email. Context: Checklist-style email with every requiremen. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Review vendor performance",
          desc: "Evidence-based assessment balancing...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me review vendor performance. Context: Evidence-based assessment balancing. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Negotiate a contract renewal",
          desc: "Collaborative renewal email that opens term...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me negotiate a contract renewal. Context: Collaborative renewal email that opens term. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Internal Communications",
      icon: <Users className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Announce a policy update",
          desc: "Company-wide notice that states what...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a policy update. Context: Company-wide notice that states what. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Launch an internal tool rollout",
          desc: "Rollout email with the fastest path from first...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me launch an internal tool rollout. Context: Rollout email with the fastest path from first. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Justify an operational investment",
          desc: "Budget memo with ROI math that executives...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me justify an operational investment. Context: Budget memo with ROI math that executives. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request headcount approval",
          desc: "Business-case email connecting the hire to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request headcount approval. Context: Business-case email connecting the hire to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Reporting & Analysis",
      icon: <BarChart2 className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Summarize quarterly ops performance",
          desc: "Leadership review with metrics, wins, learning...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize quarterly ops performance. Context: Leadership review with metrics, wins, learning. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Narrate a KPI report",
          desc: "Interpretation layer that explains what the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me narrate a kpi report. Context: Interpretation layer that explains what the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize an operational audit",
          desc: "Three-minute executive summary with risk-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize an operational audit. Context: Three-minute executive summary with risk-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a process improvement case",
          desc: "Financial argument with ROI, payback period,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a process improvement case. Context: Financial argument with ROI, payback period,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Meeting & Calendar Management",
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Structure a meeting agenda",
          desc: "Time-boxed agenda with owners, decision...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me structure a meeting agenda. Context: Time-boxed agenda with owners, decision. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Frame a workshop invite",
          desc: "Calendar invite that sets purpose, expecte...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me frame a workshop invite. Context: Calendar invite that sets purpose, expecte. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a meeting follow-up",
          desc: "Decisions-and-actions email recipients can...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a meeting follow-up. Context: Decisions-and-actions email recipients can. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Logistics & Coordination",
      icon: <Map className="w-5 h-5 text-pink-500" />,
      items: [
        {
          title: "Plan an event brief",
          desc: "Comprehensive planning doc with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan an event brief. Context: Comprehensive planning doc with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request travel approval",
          desc: "Cost-justified request with business outcom...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request travel approval. Context: Cost-justified request with business outcom. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Communicate an operational change",
          desc: "Team-wide message that reduces anxiety b...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me communicate an operational change. Context: Team-wide message that reduces anxiety b. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Customer Success": [
    {
      category: "Onboarding",
      icon: <Compass className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Craft a welcome email",
          desc: "Set the tone for a new customer relationship...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a welcome email. Context: Set the tone for a new customer relationship. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build an onboarding sequence",
          desc: "Guide new users from signup to first value in...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build an onboarding sequence. Context: Guide new users from signup to first value in. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create a getting-started guide",
          desc: "Reduce support tickets with a step-by-step...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create a getting-started guide. Context: Reduce support tickets with a step-by-step. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a kickoff call invite",
          desc: "Make customers anticipate their...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a kickoff call invite. Context: Make customers anticipate their. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Escalation & Issue Resolution",
      icon: <Shield className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Respond to a customer complaint",
          desc: "De-escalate a frustrated customer...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to a customer complaint. Context: De-escalate a frustrated customer. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a service outage apology",
          desc: "Rebuild trust after an incident with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a service outage apology. Context: Rebuild trust after an incident with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Communicate a bug fix timeline",
          desc: "Keep customers informed with a clear...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me communicate a bug fix timeline. Context: Keep customers informed with a clear. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Handle a cancellation request",
          desc: "Respond gracefully to a refund or cancellation...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me handle a cancellation request. Context: Respond gracefully to a refund or cancellation. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Renewals & Retention",
      icon: <RotateCcw className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Send a renewal reminder email",
          desc: "Lead with value delivered to make...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send a renewal reminder email. Context: Lead with value delivered to make. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a win-back email",
          desc: "Re-engage a churned customer by showing...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a win-back email. Context: Re-engage a churned customer by showing. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Reach out to an at-risk account",
          desc: "Re-engage a low-activity customer...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me reach out to an at-risk account. Context: Re-engage a low-activity customer. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Invite a customer to a QBR",
          desc: "Frame a quarterly review as a strategic...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me invite a customer to a qbr. Context: Frame a quarterly review as a strategic. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Relationship Building",
      icon: <HeartHandshake className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Send a 30-day check-in",
          desc: "Gather early feedback while the customer is...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a 30-day check-in. Context: Gather early feedback while the customer is. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Celebrate a customer milestone",
          desc: "Recognize a specific achievement like an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me celebrate a customer milestone. Context: Recognize a specific achievement like an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request a case study participation",
          desc: "Invite a successful customer to share thei...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request a case study participation. Context: Invite a successful customer to share thei. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Ask for a customer referral",
          desc: "Turn a satisfied customer into a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me ask for a customer referral. Context: Turn a satisfied customer into a. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Support Responses",
      icon: <MessageCircle className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Answer a how-to question",
          desc: "Solve a product question completely o...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me answer a how-to question. Context: Solve a product question completely o. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Respond to a feature request",
          desc: "Deliver a roadmap decision honestly...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to a feature request. Context: Deliver a roadmap decision honestly. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a knowledge base article",
          desc: "Turn a common support ticket into a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a knowledge base article. Context: Turn a common support ticket into a. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Create canned response templates",
          desc: "Build five ready-to-send replies for your most...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me create canned response templates. Context: Build five ready-to-send replies for my most. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Internal Communication",
      icon: <Users className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Prepare a customer health summary",
          desc: "Brief leadership on an account with a clear...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a customer health summary. Context: Brief leadership on an account with a clear. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a CSM handoff email",
          desc: "Transfer a customer relationship without...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a csm handoff email. Context: Transfer a customer relationship without. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Escalate an account to leadership",
          desc: "Give executives the situation, risk, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me escalate an account to leadership. Context: Give executives the situation, risk, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare QBR internal notes",
          desc: "Anticipate customer concerns and prepare...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare qbr internal notes. Context: Anticipate customer concerns and prepare. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Voice of Customer",
      icon: <Mic className="w-5 h-5 text-pink-500" />,
      items: [
        {
          title: "Design an NPS survey",
          desc: "Collect actionable feedback in five...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design an nps survey. Context: Collect actionable feedback in five. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request a platform review",
          desc: "Ask a customer for a G2 or Trustpilot review...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request a platform review. Context: Ask a customer for a G2 or Trustpilot review. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up on survey feedback",
          desc: "Close the loop on a customer survey...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up on survey feedback. Context: Close the loop on a customer survey. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Synthesize customer interview themes",
          desc: "Turn raw interview notes into structured...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me synthesize customer interview themes. Context: Turn raw interview notes into structured. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Data": [
    {
      category: "Analysis & Reporting",
      icon: <BarChart2 className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Analyze data",
          desc: "Make sense of your numbers and spot wh...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me analyze data. Context: Make sense of my numbers and spot wh. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft weekly data digest",
          desc: "Summarize the week's key metrics with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft weekly data digest. Context: Summarize the week's key metrics with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize A/B test results",
          desc: "Distill experiment outcomes into a ship-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize a/b test results. Context: Distill experiment outcomes into a ship-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Narrate a dashboard story",
          desc: "Guide your audience through the data with ...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me narrate a dashboard story. Context: Guide my audience through the data with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "SQL & Code Documentation",
      icon: <Database className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Annotate a SQL query",
          desc: "Add comments that explain the why behin...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me annotate a sql query. Context: Add comments that explain the why behin. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Document a data pipeline",
          desc: "Generate docstrings, usage examples, and a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me document a data pipeline. Context: Generate docstrings, usage examples, and a. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a data dictionary",
          desc: "Define every field with business meaning,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a data dictionary. Context: Define every field with business meaning,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a dashboard changelog",
          desc: "Communicate what changed, who is...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a dashboard changelog. Context: Communicate what changed, who is. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Stakeholder Communication",
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Translate findings for execs",
          desc: "Reframe a technical analysis as a business...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me translate findings for execs. Context: Reframe a technical analysis as a business. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Clarify a data request",
          desc: "Uncover the real business question...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me clarify a data request. Context: Uncover the real business question. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a findings memo",
          desc: "Structure research results so executives...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a findings memo. Context: Structure research results so executives. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose a new metric",
          desc: "Make the business case for tracking a KPI that...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose a new metric. Context: Make the business case for tracking a KPI that. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Research & Insights",
      icon: <Search className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Summarize market research",
          desc: "Synthesize survey data and findings into...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize market research. Context: Synthesize survey data and findings into. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Interpret user behavior data",
          desc: "Reveal what engagement patterns...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me interpret user behavior data. Context: Reveal what engagement patterns. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Diagnose churn drivers",
          desc: "Pinpoint why customers leave and which...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me diagnose churn drivers. Context: Pinpoint why customers leave and which. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Report on cohort retention",
          desc: "Show how retention curves differ across...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me report on cohort retention. Context: Show how retention curves differ across. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Data Strategy",
      icon: <TrendingUp className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Outline a governance policy",
          desc: "Establish data ownership, access...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline a governance policy. Context: Establish data ownership, access. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Present an analytics roadmap",
          desc: "Build a phased plan that earns...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me present an analytics roadmap. Context: Build a phased plan that earns. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a data tool business case",
          desc: "Quantify costs, ROI, and alternatives so a CFO...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a data tool business case. Context: Quantify costs, ROI, and alternatives so a CFO. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Report data quality issues",
          desc: "Classify issues by severity and business...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me report data quality issues. Context: Classify issues by severity and business. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Survey & Research Design",
      icon: <FileText className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Design a survey instrument",
          desc: "Create bias-minimized questions with proper...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design a survey instrument. Context: Create bias-minimized questions with proper. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Define research methodology",
          desc: "Pre-specify hypotheses, success...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me define research methodology. Context: Pre-specify hypotheses, success. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Screen research participants",
          desc: "Filter for qualified participants without...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me screen research participants. Context: Filter for qualified participants without. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Presentations",
      icon: <Presentation className="w-5 h-5 text-pink-500" />,
      items: [
        {
          title: "Structure a data presentation",
          desc: "Turn findings into assertion-driven slides...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me structure a data presentation. Context: Turn findings into assertion-driven slides. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Annotate a chart for clarity",
          desc: "Add titles, labels, and annotations that make...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me annotate a chart for clarity. Context: Add titles, labels, and annotations that make. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a recommendation...",
          desc: "Close an analysis project with a clear...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a recommendation.... Context: Close an analysis project with a clear. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Finance": [
    {
      category: "Financial Analysis & Reporting",
      icon: <LineChart className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Summarize monthly financial results",
          desc: "Executive summary that leads with the headlin...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize monthly financial results. Context: Executive summary that leads with the headlin. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain budget-to-actual variances",
          desc: "Plain-language variance explanations with root...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain budget-to-actual variances. Context: Plain-language variance explanations with root. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Narrate board-level financial commentary",
          desc: "Performance narrative that connects results t...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me narrate board-level financial commentary. Context: Performance narrative that connects results t. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize M&A due diligence",
          desc: "Decision-ready summary highlighting...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize m&a due diligence. Context: Decision-ready summary highlighting. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Client & Stakeholder Communications",
      icon: <Users className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Summarize quarterly portfolio performance",
          desc: "Client email connecting portfolio results to thei...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize quarterly portfolio performance. Context: Client email connecting portfolio results to thei. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Reach out about retirement planning",
          desc: "Low-pressure prospect email that opens a...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me reach out about retirement planning. Context: Low-pressure prospect email that opens a. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose a planning engagement",
          desc: "Prospect email with clear scope, fees, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose a planning engagement. Context: Prospect email with clear scope, fees, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up after a discovery call",
          desc: "Personalized follow-up that references...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up after a discovery call. Context: Personalized follow-up that references. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Budgeting & Planning",
      icon: <Calculator className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Justify a CapEx request",
          desc: "Business-case email with quantified ROI, ris...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me justify a capex request. Context: Business-case email with quantified ROI, ris. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a budget allocation case",
          desc: "Structured business case with financial...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a budget allocation case. Context: Structured business case with financial. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize the annual budget review",
          desc: "Leadership summary connecting allocation...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize the annual budget review. Context: Leadership summary connecting allocation. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose cost reduction...",
          desc: "Prioritized savings opportunities ranked b...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose cost reduction.... Context: Prioritized savings opportunities ranked b. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Accounting & Compliance",
      icon: <Shield className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Explain a reconciliation issue",
          desc: "Direct email naming the issue, root cause, dolla...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain a reconciliation issue. Context: Direct email naming the issue, root cause, dolla. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Collect on an overdue invoice",
          desc: "Firm but relationship-preserving collections...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me collect on an overdue invoice. Context: Firm but relationship-preserving collections. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose payment terms",
          desc: "Clear terms proposal with business rationale...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose payment terms. Context: Clear terms proposal with business rationale. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare departments for audit",
          desc: "Checklist memo with specific items, owners,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare departments for audit. Context: Checklist memo with specific items, owners,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Fundraising & Investment",
      icon: <DollarSign className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Draft an investor update letter",
          desc: "Honest update covering key metrics, milestone...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft an investor update letter. Context: Honest update covering key metrics, milestone. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Pitch to a potential lender",
          desc: "Creditworthiness-focused email with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch to a potential lender. Context: Creditworthiness-focused email with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Outline a fundraising round",
          desc: "Investor-ready executive summary...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline a fundraising round. Context: Investor-ready executive summary. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Respond to investor due diligence",
          desc: "Precise answers to DD questions with gaps...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to investor due diligence. Context: Precise answers to DD questions with gaps. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Tax & Planning",
      icon: <FileSignature className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Explain a tax regulation change",
          desc: "Client-facing FAQ with plain-language...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain a tax regulation change. Context: Client-facing FAQ with plain-language. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send year-end tax planning checklist",
          desc: "Client email with time-sensitive actions,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send year-end tax planning checklist. Context: Client email with time-sensitive actions,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Write a client newsletter article",
          desc: "Actionable financial planning piece tied to...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me write a client newsletter article. Context: Actionable financial planning piece tied to. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Request a client referral",
          desc: "Warm referral ask that feels natural, names...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me request a client referral. Context: Warm referral ask that feels natural, names. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Legal": [
    {
      category: "Contract Drafting & Review",
      icon: <FileSignature className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Draft an NDA template",
          desc: "Jurisdiction-specific confidentiality terms...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft an nda template. Context: Jurisdiction-specific confidentiality terms. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a contractor agreement",
          desc: "Clear IP ownership, payment terms, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a contractor agreement. Context: Clear IP ownership, payment terms, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize vendor contract risks",
          desc: "Risk-ranked review with business-impact...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize vendor contract risks. Context: Risk-ranked review with business-impact. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain contract redline changes",
          desc: "Plain-language summary of each...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain contract redline changes. Context: Plain-language summary of each. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Client Communication",
      icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Outline client engagement terms",
          desc: "Scope, fees, and obligations with no...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline client engagement terms. Context: Scope, fees, and obligations with no. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Send a matter status update",
          desc: "Transparent progress email with timeline an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me send a matter status update. Context: Transparent progress email with timeline an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain a compliance requirement",
          desc: "Plain-language obligations, deadlines,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain a compliance requirement. Context: Plain-language obligations, deadlines,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Decline a client engagement",
          desc: "Professional non-representation letter...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me decline a client engagement. Context: Professional non-representation letter. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Legal Research & Analysis",
      icon: <Search className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Research a case law topic",
          desc: "Structured memo with holdings, analysis, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me research a case law topic. Context: Structured memo with holdings, analysis, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize a court decision",
          desc: "Plain-language holding with practical...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize a court decision. Context: Plain-language holding with practical. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a compliance checklist",
          desc: "Obligation-by-obligation tracker with...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a compliance checklist. Context: Obligation-by-obligation tracker with. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Explain a new ruling plainly",
          desc: "Accessible blog post on what changed and wh...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me explain a new ruling plainly. Context: Accessible blog post on what changed and wh. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Internal Legal Operations",
      icon: <Shield className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Issue a cease and desist",
          desc: "Firm IP enforcement letter with specific...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me issue a cease and desist. Context: Firm IP enforcement letter with specific. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Respond to a demand letter",
          desc: "Point-by-point rebuttal preserving all defenses",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to a demand letter. Context: Point-by-point rebuttal preserving all defenses. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Issue a legal hold notice",
          desc: "Unambiguous preservation directive...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me issue a legal hold notice. Context: Unambiguous preservation directive. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a privacy policy",
          desc: "Regulation-specific data handling and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a privacy policy. Context: Regulation-specific data handling and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Business & Transactional",
      icon: <Briefcase className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Structure a letter of intent",
          desc: "Binding and non-binding terms for deal...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me structure a letter of intent. Context: Binding and non-binding terms for deal. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Terminate a commercial lease",
          desc: "Compliant notice preserving all rights an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me terminate a commercial lease. Context: Compliant notice preserving all rights an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize licensing agreement terms",
          desc: "Rights, restrictions, and obligations in plain...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize licensing agreement terms. Context: Rights, restrictions, and obligations in plain. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize shareholder...",
          desc: "Governance, economics, and exit...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize shareholder.... Context: Governance, economics, and exit. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Marketing & Thought Leadership",
      icon: <Megaphone className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Craft an attorney bio",
          desc: "Credible practice narrative with concret...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft an attorney bio. Context: Credible practice narrative with concret. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Analyze an emerging legal topic",
          desc: "Substantive article with practitioner implications",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me analyze an emerging legal topic. Context: Substantive article with practitioner implications. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Alert clients to regulatory change",
          desc: "Scannable update with impact assessment an...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me alert clients to regulatory change. Context: Scannable update with impact assessment an. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Pitch a conference session",
          desc: "Compelling abstract with concrete audienc...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me pitch a conference session. Context: Compelling abstract with concrete audienc. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "Consultant": [
    {
      category: "Business Development & Prospecting",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Craft a cold outreach email",
          desc: "Peer-to-peer email that earns a reply from a...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a cold outreach email. Context: Peer-to-peer email that earns a reply from a. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a warm LinkedIn message",
          desc: "Conversation opener that builds on a share...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a warm linkedin message. Context: Conversation opener that builds on a share. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up after a conference intro",
          desc: "Post-event email that continues the in-perso...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up after a conference intro. Context: Post-event email that continues the in-perso. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Respond to an inbound inquiry",
          desc: "First-reply email that positions you as the...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to an inbound inquiry. Context: First-reply email that positions me as the. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Proposals & Scope of Work",
      icon: <FileText className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Write a consulting proposal",
          desc: "Put together a proposal that wins the project...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me write a consulting proposal. Context: Put together a proposal that wins the project. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a statement of work",
          desc: "Fixed-scope SOW with deliverables, exclusion...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a statement of work. Context: Fixed-scope SOW with deliverables, exclusion. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Clarify project scope with a client",
          desc: "Questions email that surfaces the real...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me clarify project scope with a client. Context: Questions email that surfaces the real. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Propose a retainer engagement",
          desc: "Monthly retainer proposal with clear...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me propose a retainer engagement. Context: Monthly retainer proposal with clear. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Client Management",
      icon: <Users className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Send a client onboarding email",
          desc: "Kickoff email with next steps, deadlines, and...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send a client onboarding email. Context: Kickoff email with next steps, deadlines, and. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a weekly status update",
          desc: "Structured email covering progress, risk...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a weekly status update. Context: Structured email covering progress, risk. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recap a client meeting",
          desc: "Decisions, action items, and owners...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recap a client meeting. Context: Decisions, action items, and owners. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Handle an out-of-scope request",
          desc: "Warm but firm email that redirects scope...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me handle an out-of-scope request. Context: Warm but firm email that redirects scope. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Deliverables & Presentations",
      icon: <Presentation className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Outline an executive presentation",
          desc: "Answer-first slide deck where headlines tell th...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me outline an executive presentation. Context: Answer-first slide deck where headlines tell th. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a report executive summary",
          desc: "Standalone summary with recommendation...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a report executive summary. Context: Standalone summary with recommendation. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare presentation speaker notes",
          desc: "Talking points, transitions, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare presentation speaker notes. Context: Talking points, transitions, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Narrate your data findings",
          desc: "Plain-language story that turns numbers int...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me narrate my data findings. Context: Plain-language story that turns numbers int. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Thought Leadership & Personal Brand",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      items: [
        {
          title: "Share a client lesson on LinkedIn",
          desc: "Story-driven post built around one hard-won...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me share a client lesson on linkedin. Context: Story-driven post built around one hard-won. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a practitioner newsletter",
          desc: "Opinionated take on an industry trend your...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a practitioner newsletter. Context: Opinionated take on an industry trend your. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a client case study",
          desc: "Problem-to-result narrative that makes...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a client case study. Context: Problem-to-result narrative that makes. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Craft a conference speaker bio",
          desc: "Credibility-first bio that makes the audience...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a conference speaker bio. Context: Credibility-first bio that makes the audience. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Operations & Admin",
      icon: <Settings className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Send an invoice cover email",
          desc: "Clear email with amount, due date, and...",
          author: "Prompter Core",
          variables: [{ id: "recipient", label: "Recipient Name", placeholder: "e.g., John Doe" }, { id: "company", label: "Target Company", placeholder: "e.g., Acme Corp" }],
          promptTemplate: "Act as an expert in this domain. Help me send an invoice cover email. Context: Clear email with amount, due date, and. Please provide a structured, actionable, and professional response optimized for immediate use. Address it to {recipient} at {company}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Follow up on a late payment",
          desc: "Firm but professional overdue-invoice email...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me follow up on a late payment. Context: Firm but professional overdue-invoice email. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Run a project retrospective",
          desc: "Honest internal review with root causes and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me run a project retrospective. Context: Honest internal review with root causes and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a subcontractor agreement",
          desc: "Plain-language contract covering IP,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a subcontractor agreement. Context: Plain-language contract covering IP,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ],
  "HR": [
    {
      category: "Recruiting & Job Postings",
      icon: <Search className="w-5 h-5 text-blue-500" />,
      items: [
        {
          title: "Craft a job description",
          desc: "Attract qualified applicants with honest...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me craft a job description. Context: Attract qualified applicants with honest. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Promote a role on LinkedIn",
          desc: "Turn a job opening into a first-person post tha...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me promote a role on linkedin. Context: Turn a job opening into a first-person post tha. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Optimize a job board listing",
          desc: "Get higher search rankings and apply...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me optimize a job board listing. Context: Get higher search rankings and apply. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Source a passive candidate",
          desc: "Send a brief, personalized LinkedIn...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me source a passive candidate. Context: Send a brief, personalized LinkedIn. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Candidate Communication",
      icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
      items: [
        {
          title: "Schedule a first-round interview",
          desc: "Send a warm invitation that tells the candidat...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me schedule a first-round interview. Context: Send a warm invitation that tells the candidat. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Decline a candidate respectfully",
          desc: "Deliver a direct, warm rejection that preserve...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me decline a candidate respectfully. Context: Deliver a direct, warm rejection that preserve. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Confirm an offer acceptance",
          desc: "Reduce new-hire anxiety with clear pre-...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me confirm an offer acceptance. Context: Reduce new-hire anxiety with clear pre-. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Re-engage a silent candidate",
          desc: "Send a non-pushy follow-up that reopens...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me re-engage a silent candidate. Context: Send a non-pushy follow-up that reopens. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Onboarding",
      icon: <Compass className="w-5 h-5 text-green-500" />,
      items: [
        {
          title: "Welcome a new hire pre-Day 1",
          desc: "Build excitement and reduce first-day anxiet...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me welcome a new hire pre-day 1. Context: Build excitement and reduce first-day anxiet. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Plan a first-week schedule",
          desc: "Structure five days that build clarity,...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me plan a first-week schedule. Context: Structure five days that build clarity,. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Build a 30-60-90 day plan",
          desc: "Move a new hire from learning to contributin...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me build a 30-60-90 day plan. Context: Move a new hire from learning to contributin. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Announce a new hire",
          desc: "Introduce someone so the team already know...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a new hire. Context: Introduce someone so the team already know. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Performance Management",
      icon: <Target className="w-5 h-5 text-orange-500" />,
      items: [
        {
          title: "Draft a performance review",
          desc: "Produce specific, balanced feedback wit...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a performance review. Context: Produce specific, balanced feedback wit. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Structure a performance...",
          desc: "Document specific gaps, measurable...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me structure a performance.... Context: Document specific gaps, measurable. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Prepare a goal-setting conversation",
          desc: "Guide a manager through setting SMAR...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me prepare a goal-setting conversation. Context: Guide a manager through setting SMAR. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Announce a promotion",
          desc: "Celebrate what someone earned and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce a promotion. Context: Celebrate what someone earned and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Employee Engagement & Culture",
      icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
      items: [
        {
          title: "Design an engagement survey",
          desc: "Ask validated, single-concept questions tha...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me design an engagement survey. Context: Ask validated, single-concept questions tha. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Compose an internal newsletter",
          desc: "Mix company news, recognition, and cultur...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me compose an internal newsletter. Context: Mix company news, recognition, and cultur. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Recognize a team achievement",
          desc: "Name the specific accomplishment and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me recognize a team achievement. Context: Name the specific accomplishment and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Run a targeted pulse survey",
          desc: "Capture fast sentiment on one initiative with 5...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me run a targeted pulse survey. Context: Capture fast sentiment on one initiative with 5. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    },
    {
      category: "Policies & Compliance",
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      items: [
        {
          title: "Announce an HR policy change",
          desc: "Communicate what changed, why, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me announce an hr policy change. Context: Communicate what changed, why, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Respond to an employee complaint",
          desc: "Acknowledge the concern, outline next...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me respond to an employee complaint. Context: Acknowledge the concern, outline next. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Summarize an HR investigation",
          desc: "Document findings, conclusions, and...",
          author: "Prompter Core",
          variables: [{ id: "context", label: "Specific Context", placeholder: "e.g., Target audience or specific goal" }],
          promptTemplate: "Act as an expert in this domain. Help me summarize an hr investigation. Context: Document findings, conclusions, and. Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A professional, ready-to-use response."
        },
        {
          title: "Draft a DEIB careers statement",
          desc: "Lead with specific practices and...",
          author: "Prompter Core",
          variables: [{ id: "currentRole", label: "Current Role", placeholder: "e.g., Product Manager" }],
          promptTemplate: "Act as an expert in this domain. Help me draft a deib careers statement. Context: Lead with specific practices and. Please provide a structured, actionable, and professional response optimized for immediate use. I am currently a {currentRole}.",
          expectedOutput: "A professional, ready-to-use response."
        }
      ]
    }
  ]
}

export const TEMPLATES_BY_CATEGORY: Record<string, TemplateSection[]> = { ...BASE_TEMPLATES_BY_CATEGORY };

const extraTemplatesList = [NEW_TEMPLATES_BY_CATEGORY, NEW_TEMPLATES_BY_CATEGORY_2, NEW_TEMPLATES_BY_CATEGORY_3, NEW_TEMPLATES_BY_CATEGORY_4];
for (const extra of extraTemplatesList) {
  for (const [category, sections] of Object.entries(extra)) {
    if (TEMPLATES_BY_CATEGORY[category]) {
      TEMPLATES_BY_CATEGORY[category] = [...TEMPLATES_BY_CATEGORY[category], ...sections];
    } else {
      TEMPLATES_BY_CATEGORY[category] = sections;
    }
  }
}
