import React from 'react';
import { TemplateSection } from './templates';
import { Mail, Share2, FileText, Search, DollarSign, PenTool, Star, Package, TrendingUp, Users, Target, ShoppingCart, Video, Calendar, Bot, LineChart, BarChart, MapPin, Brain, Magnet, Sparkles } from 'lucide-react';

export const NEW_CATEGORIES_3 = ["Email Marketing", "Social Media Marketing", "Content Marketing", "SEO", "Paid Advertising", "Copywriting", "Brand Marketing", "Product Marketing", "Growth Marketing", "Influencer Marketing", "Market Research", "Sales Enablement", "Ecommerce Marketing", "Video Marketing", "Event Marketing", "AI Marketing", "Marketing Planning", "Analytics & Optimization", "Local Marketing", "Psychology & Persuasion", "Lead Generation", "Premium Wow Prompts"];

export const NEW_TEMPLATES_BY_CATEGORY_3: Record<string, TemplateSection[]> = {
  "Email Marketing": [
    {
      category: "Email Marketing",
      icon: <Mail className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Create a Product Launch Email Campaign",
          desc: "Expert guidance for create a product launch ema...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with create a product launch email campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Welcome Email Series",
          desc: "Expert guidance for welcome email series...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with welcome email series. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Newsletter Generator",
          desc: "Expert guidance for newsletter generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with newsletter generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Promotional Email",
          desc: "Expert guidance for promotional email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with promotional email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Holiday Campaign",
          desc: "Expert guidance for holiday campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with holiday campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Invitation",
          desc: "Expert guidance for event invitation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event invitation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Webinar Invitation",
          desc: "Expert guidance for webinar invitation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with webinar invitation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Affiliate Email Campaign",
          desc: "Expert guidance for affiliate email campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with affiliate email campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Appreciation Email",
          desc: "Expert guidance for customer appreciation email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer appreciation email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Update Email",
          desc: "Expert guidance for product update email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product update email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "5-Day Nurture Sequence",
          desc: "Expert guidance for 5-day nurture sequence...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with 5-day nurture sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Abandoned Cart Recovery",
          desc: "Expert guidance for abandoned cart recovery...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with abandoned cart recovery. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Re-engagement Campaign",
          desc: "Expert guidance for re-engagement campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with re-engagement campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Onboarding Sequence",
          desc: "Expert guidance for onboarding sequence...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with onboarding sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trial Conversion Emails",
          desc: "Expert guidance for trial conversion emails...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trial conversion emails. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Upsell Sequence",
          desc: "Expert guidance for upsell sequence...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with upsell sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cross-sell Campaign",
          desc: "Expert guidance for cross-sell campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cross-sell campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral Program Emails",
          desc: "Expert guidance for referral program emails...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with referral program emails. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Win-back Campaign",
          desc: "Expert guidance for win-back campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with win-back campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Retention Sequence",
          desc: "Expert guidance for customer retention sequence...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer retention sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Email Subject Line Generator",
          desc: "Expert guidance for email subject line generato...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with email subject line generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Email Preview Text Generator",
          desc: "Expert guidance for email preview text generato...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with email preview text generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "A/B Test Email Variations",
          desc: "Expert guidance for a/b test email variations...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with a/b test email variations. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Improve Open Rates",
          desc: "Expert guidance for improve open rates...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with improve open rates. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Improve Click Rates",
          desc: "Expert guidance for improve click rates...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with improve click rates. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Spam Score Optimizer",
          desc: "Expert guidance for spam score optimizer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with spam score optimizer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Email Personalization",
          desc: "Expert guidance for email personalization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with email personalization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "CTA Optimization",
          desc: "Expert guidance for cta optimization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cta optimization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Social Media Marketing": [
    {
      category: "Social Media Marketing",
      icon: <Share2 className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "30-Day Content Calendar",
          desc: "Expert guidance for 30-day content calendar...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with 30-day content calendar. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Weekly Social Media Planner",
          desc: "Expert guidance for weekly social media planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with weekly social media planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Monthly Campaign Planner",
          desc: "Expert guidance for monthly campaign planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with monthly campaign planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Seasonal Content Ideas",
          desc: "Expert guidance for seasonal content ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with seasonal content ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Holiday Content Calendar",
          desc: "Expert guidance for holiday content calendar...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with holiday content calendar. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "LinkedIn Thought Leadership Posts",
          desc: "Expert guidance for linkedin thought leadership...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with linkedin thought leadership posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Founder Posts",
          desc: "Expert guidance for founder posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with founder posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Company Updates",
          desc: "Expert guidance for company updates...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with company updates. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hiring Posts",
          desc: "Expert guidance for hiring posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hiring posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Case Study Posts",
          desc: "Expert guidance for case study posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with case study posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Personal Branding Posts",
          desc: "Expert guidance for personal branding posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with personal branding posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Viral Thread Generator",
          desc: "Expert guidance for viral thread generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral thread generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Daily Tweet Ideas",
          desc: "Expert guidance for daily tweet ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with daily tweet ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Engagement Hooks",
          desc: "Expert guidance for engagement hooks...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with engagement hooks. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Opinion Posts",
          desc: "Expert guidance for opinion posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with opinion posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Story Threads",
          desc: "Expert guidance for story threads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with story threads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Caption Generator",
          desc: "Expert guidance for caption generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with caption generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Carousel Content",
          desc: "Expert guidance for carousel content...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with carousel content. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Reel Script",
          desc: "Expert guidance for reel script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with reel script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Story Ideas",
          desc: "Expert guidance for story ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with story ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Bio Optimizer",
          desc: "Expert guidance for bio optimizer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with bio optimizer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Community Posts",
          desc: "Expert guidance for community posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with community posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Local Business Promotions",
          desc: "Expert guidance for local business promotions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with local business promotions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Promotions",
          desc: "Expert guidance for event promotions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event promotions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Viral Video Ideas",
          desc: "Expert guidance for viral video ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral video ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hook Generator",
          desc: "Expert guidance for hook generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hook generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Short Video Scripts",
          desc: "Expert guidance for short video scripts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with short video scripts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Challenge Ideas",
          desc: "Expert guidance for challenge ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with challenge ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Video Titles",
          desc: "Expert guidance for video titles...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with video titles. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Video Descriptions",
          desc: "Expert guidance for video descriptions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with video descriptions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Thumbnail Text",
          desc: "Expert guidance for thumbnail text...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with thumbnail text. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Community Posts",
          desc: "Expert guidance for community posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with community posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Shorts Ideas",
          desc: "Expert guidance for shorts ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with shorts ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Content Marketing": [
    {
      category: "Content Marketing",
      icon: <FileText className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "SEO Blog Outline",
          desc: "Expert guidance for seo blog outline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with seo blog outline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Long-form Blog",
          desc: "Expert guidance for long-form blog...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with long-form blog. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pillar Content",
          desc: "Expert guidance for pillar content...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pillar content. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Listicle Generator",
          desc: "Expert guidance for listicle generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with listicle generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "How-to Guide",
          desc: "Expert guidance for how-to guide...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with how-to guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Case Study",
          desc: "Expert guidance for case study...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with case study. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Comparison Article",
          desc: "Expert guidance for comparison article...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with comparison article. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Beginner Guide",
          desc: "Expert guidance for beginner guide...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with beginner guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Expert Guide",
          desc: "Expert guidance for expert guide...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with expert guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Industry Report",
          desc: "Expert guidance for industry report...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with industry report. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Blog to LinkedIn",
          desc: "Expert guidance for blog to linkedin...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with blog to linkedin. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Blog to Twitter Thread",
          desc: "Expert guidance for blog to twitter thread...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with blog to twitter thread. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Podcast to Blog",
          desc: "Expert guidance for podcast to blog...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with podcast to blog. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Video to Article",
          desc: "Expert guidance for video to article...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with video to article. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Newsletter to Social Posts",
          desc: "Expert guidance for newsletter to social posts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with newsletter to social posts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Webinar to Content Series",
          desc: "Expert guidance for webinar to content series...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with webinar to content series. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "SEO": [
    {
      category: "SEO",
      icon: <Search className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Keyword Ideas",
          desc: "Expert guidance for keyword ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with keyword ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Long-tail Keywords",
          desc: "Expert guidance for long-tail keywords...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with long-tail keywords. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Content Cluster Planner",
          desc: "Expert guidance for content cluster planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with content cluster planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Search Intent Analysis",
          desc: "Expert guidance for search intent analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with search intent analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor Keyword Analysis",
          desc: "Expert guidance for competitor keyword analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor keyword analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SEO Blog Optimization",
          desc: "Expert guidance for seo blog optimization...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with seo blog optimization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Meta Title Generator",
          desc: "Expert guidance for meta title generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with meta title generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Meta Description Generator",
          desc: "Expert guidance for meta description generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with meta description generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Internal Linking Suggestions",
          desc: "Expert guidance for internal linking suggestion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with internal linking suggestions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Schema Ideas",
          desc: "Expert guidance for schema ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with schema ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SEO Audit",
          desc: "Expert guidance for seo audit...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with seo audit. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Content Gap Analysis",
          desc: "Expert guidance for content gap analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with content gap analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Site Structure Planning",
          desc: "Expert guidance for site structure planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with site structure planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Paid Advertising": [
    {
      category: "Paid Advertising",
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Search Ads",
          desc: "Expert guidance for search ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with search ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Display Ads",
          desc: "Expert guidance for display ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with display ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Performance Max Copy",
          desc: "Expert guidance for performance max copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with performance max copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Responsive Search Ads",
          desc: "Expert guidance for responsive search ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with responsive search ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Primary Text",
          desc: "Expert guidance for primary text...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with primary text. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Headlines",
          desc: "Expert guidance for headlines...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with headlines. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Descriptions",
          desc: "Expert guidance for descriptions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with descriptions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Retargeting Ads",
          desc: "Expert guidance for retargeting ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with retargeting ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Story Ads",
          desc: "Expert guidance for story ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with story ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feed Ads",
          desc: "Expert guidance for feed ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feed ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Reel Ads",
          desc: "Expert guidance for reel ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with reel ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "B2B Lead Generation Ads",
          desc: "Expert guidance for b2b lead generation ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with b2b lead generation ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sponsored Content",
          desc: "Expert guidance for sponsored content...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sponsored content. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Message Ads",
          desc: "Expert guidance for message ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with message ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UGC Ad Script",
          desc: "Expert guidance for ugc ad script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ugc ad script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
        {
          title: "Viral Ad Concepts",
          desc: "Expert guidance for viral ad concepts...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral ad concepts. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Copywriting": [
    {
      category: "Copywriting",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Landing Page Copy",
          desc: "Expert guidance for landing page copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with landing page copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Hero Section",
          desc: "Expert guidance for hero section...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with hero section. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Value Proposition",
          desc: "Expert guidance for value proposition...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with value proposition. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "CTA Generator",
          desc: "Expert guidance for cta generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cta generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "FAQ Copy",
          desc: "Expert guidance for faq copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with faq copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Homepage",
          desc: "Expert guidance for homepage...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with homepage. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "About Page",
          desc: "Expert guidance for about page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with about page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing Page",
          desc: "Expert guidance for pricing page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pricing page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Services Page",
          desc: "Expert guidance for services page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with services page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Contact Page",
          desc: "Expert guidance for contact page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with contact page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Letter",
          desc: "Expert guidance for sales letter...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sales letter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Description",
          desc: "Expert guidance for product description...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product description. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Offer Stack",
          desc: "Expert guidance for offer stack...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with offer stack. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Guarantee Copy",
          desc: "Expert guidance for guarantee copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with guarantee copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scarcity Copy",
          desc: "Expert guidance for scarcity copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scarcity copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Brand Marketing": [
    {
      category: "Brand Marketing",
      icon: <Star className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Brand Positioning",
          desc: "Expert guidance for brand positioning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand positioning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Messaging",
          desc: "Expert guidance for brand messaging...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand messaging. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Mission Statement",
          desc: "Expert guidance for mission statement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with mission statement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Vision Statement",
          desc: "Expert guidance for vision statement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with vision statement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Story",
          desc: "Expert guidance for brand story...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand story. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Voice Guide",
          desc: "Expert guidance for brand voice guide...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand voice guide. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Tone of Voice",
          desc: "Expert guidance for tone of voice...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with tone of voice. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Personality",
          desc: "Expert guidance for brand personality...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand personality. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Values",
          desc: "Expert guidance for brand values...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand values. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Manifesto",
          desc: "Expert guidance for brand manifesto...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand manifesto. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Product Marketing": [
    {
      category: "Product Marketing",
      icon: <Package className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product Launch Plan",
          desc: "Expert guidance for product launch plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Product Messaging",
          desc: "Expert guidance for product messaging...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product messaging. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Positioning Statement",
          desc: "Expert guidance for positioning statement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with positioning statement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Feature Announcement",
          desc: "Expert guidance for feature announcement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with feature announcement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Comparison",
          desc: "Expert guidance for product comparison...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product comparison. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Personas",
          desc: "Expert guidance for customer personas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer personas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product FAQ",
          desc: "Expert guidance for product faq...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product faq. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Launch Checklist",
          desc: "Expert guidance for launch checklist...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with launch checklist. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Growth Marketing": [
    {
      category: "Growth Marketing",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Growth Strategy",
          desc: "Expert guidance for growth strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with growth strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Growth Experiments",
          desc: "Expert guidance for growth experiments...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with growth experiments. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Viral Loop Ideas",
          desc: "Expert guidance for viral loop ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral loop ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Referral Program",
          desc: "Expert guidance for referral program...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with referral program. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Acquisition Plan",
          desc: "Expert guidance for customer acquisition plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer acquisition plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Activation Strategy",
          desc: "Expert guidance for activation strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with activation strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conversion Funnel Analysis",
          desc: "Expert guidance for conversion funnel analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with conversion funnel analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product-Led Growth Ideas",
          desc: "Expert guidance for product-led growth ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product-led growth ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Community Growth",
          desc: "Expert guidance for community growth...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with community growth. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Influencer Marketing": [
    {
      category: "Influencer Marketing",
      icon: <Users className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Influencer Outreach",
          desc: "Expert guidance for influencer outreach...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with influencer outreach. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Creator Brief",
          desc: "Expert guidance for creator brief...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with creator brief. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Collaboration Proposal",
          desc: "Expert guidance for collaboration proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with collaboration proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Campaign Planning",
          desc: "Expert guidance for campaign planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with campaign planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Influencer Evaluation",
          desc: "Expert guidance for influencer evaluation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with influencer evaluation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "UGC Campaign",
          desc: "Expert guidance for ugc campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ugc campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Affiliate Program",
          desc: "Expert guidance for affiliate program...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with affiliate program. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Ambassador Program",
          desc: "Expert guidance for ambassador program...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ambassador program. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Market Research": [
    {
      category: "Market Research",
      icon: <Search className="w-5 h-5 text-primary" />,
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
          title: "Industry Research",
          desc: "Expert guidance for industry research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with industry research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Research",
          desc: "Expert guidance for customer research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Market Trends",
          desc: "Expert guidance for market trends...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with market trends. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "TAM SAM SOM",
          desc: "Expert guidance for tam sam som...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with tam sam som. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Pricing Research",
          desc: "Expert guidance for pricing research...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with pricing research. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Consumer Insights",
          desc: "Expert guidance for consumer insights...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with consumer insights. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Gap Analysis",
          desc: "Expert guidance for gap analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with gap analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Sales Enablement": [
    {
      category: "Sales Enablement",
      icon: <Target className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Cold Email",
          desc: "Expert guidance for cold email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cold email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cold DM",
          desc: "Expert guidance for cold dm...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cold dm. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Pitch",
          desc: "Expert guidance for sales pitch...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sales pitch. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Discovery Questions",
          desc: "Expert guidance for discovery questions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with discovery questions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Objection Handling",
          desc: "Expert guidance for objection handling...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with objection handling. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Follow-up Email",
          desc: "Expert guidance for follow-up email...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with follow-up email. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Presentation",
          desc: "Expert guidance for sales presentation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sales presentation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Sales Proposal",
          desc: "Expert guidance for sales proposal...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with sales proposal. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Demo Script",
          desc: "Expert guidance for demo script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with demo script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Closing Strategy",
          desc: "Expert guidance for closing strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with closing strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Ecommerce Marketing": [
    {
      category: "Ecommerce Marketing",
      icon: <ShoppingCart className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Product Launch Campaign",
          desc: "Expert guidance for product launch campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Description",
          desc: "Expert guidance for product description...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product description. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Amazon Listing",
          desc: "Expert guidance for amazon listing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with amazon listing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Shopify SEO",
          desc: "Expert guidance for shopify seo...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with shopify seo. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Holiday Promotions",
          desc: "Expert guidance for holiday promotions...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with holiday promotions. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Upsell Campaign",
          desc: "Expert guidance for upsell campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with upsell campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Bundle Strategy",
          desc: "Expert guidance for bundle strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with bundle strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Discount Campaign",
          desc: "Expert guidance for discount campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with discount campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Cart Recovery",
          desc: "Expert guidance for cart recovery...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cart recovery. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Loyalty Program",
          desc: "Expert guidance for loyalty program...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with loyalty program. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Video Marketing": [
    {
      category: "Video Marketing",
      icon: <Video className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "YouTube Script",
          desc: "Expert guidance for youtube script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with youtube script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Reel Script",
          desc: "Expert guidance for reel script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with reel script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "TikTok Script",
          desc: "Expert guidance for tiktok script...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with tiktok script. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Explainer Video",
          desc: "Expert guidance for explainer video...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with explainer video. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Webinar Outline",
          desc: "Expert guidance for webinar outline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with webinar outline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Demo",
          desc: "Expert guidance for product demo...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product demo. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Testimonial Video",
          desc: "Expert guidance for testimonial video...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with testimonial video. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "VSL Video Sales Letter",
          desc: "Expert guidance for vsl video sales letter...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with vsl video sales letter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Podcast Promotion",
          desc: "Expert guidance for podcast promotion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with podcast promotion. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Event Marketing": [
    {
      category: "Event Marketing",
      icon: <Calendar className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Webinar Promotion",
          desc: "Expert guidance for webinar promotion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with webinar promotion. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conference Campaign",
          desc: "Expert guidance for conference campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with conference campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Workshop Marketing",
          desc: "Expert guidance for workshop marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with workshop marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Landing Page",
          desc: "Expert guidance for event landing page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event landing page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Event Emails",
          desc: "Expert guidance for event emails...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with event emails. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Speaker Announcement",
          desc: "Expert guidance for speaker announcement...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with speaker announcement. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Countdown Campaign",
          desc: "Expert guidance for countdown campaign...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with countdown campaign. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Post-event Follow-up",
          desc: "Expert guidance for post-event follow-up...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with post-event follow-up. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "AI Marketing": [
    {
      category: "AI Marketing",
      icon: <Bot className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "AI Marketing Strategy",
          desc: "Expert guidance for ai marketing strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai marketing strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Prompt for Ads",
          desc: "Expert guidance for ai prompt for ads...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai prompt for ads. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Content Calendar",
          desc: "Expert guidance for ai content calendar...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai content calendar. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI SEO Assistant",
          desc: "Expert guidance for ai seo assistant...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai seo assistant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Growth Advisor",
          desc: "Expert guidance for ai growth advisor...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai growth advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Campaign Planner",
          desc: "Expert guidance for ai campaign planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai campaign planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Audience Analysis",
          desc: "Expert guidance for ai audience analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai audience analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI Competitor Review",
          desc: "Expert guidance for ai competitor review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai competitor review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Marketing Planning": [
    {
      category: "Marketing Planning",
      icon: <LineChart className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Marketing Strategy",
          desc: "Expert guidance for marketing strategy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing strategy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quarterly Marketing Plan",
          desc: "Expert guidance for quarterly marketing plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with quarterly marketing plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Annual Marketing Plan",
          desc: "Expert guidance for annual marketing plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with annual marketing plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Campaign Roadmap",
          desc: "Expert guidance for campaign roadmap...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with campaign roadmap. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Budget Allocation",
          desc: "Expert guidance for budget allocation...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with budget allocation. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Calendar",
          desc: "Expert guidance for marketing calendar...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing calendar. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "KPI Dashboard",
          desc: "Expert guidance for kpi dashboard...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with kpi dashboard. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing OKRs",
          desc: "Expert guidance for marketing okrs...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing okrs. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Channel Selection",
          desc: "Expert guidance for channel selection...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with channel selection. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Resource Planning",
          desc: "Expert guidance for resource planning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with resource planning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Analytics & Optimization": [
    {
      category: "Analytics & Optimization",
      icon: <BarChart className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Campaign Performance Review",
          desc: "Expert guidance for campaign performance review...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with campaign performance review. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conversion Rate Analysis",
          desc: "Expert guidance for conversion rate analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with conversion rate analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "Customer Journey Mapping",
          desc: "Expert guidance for customer journey mapping...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer journey mapping. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Attribution Analysis",
          desc: "Expert guidance for attribution analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with attribution analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "A/B Test Planner",
          desc: "Expert guidance for a/b test planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with a/b test planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "KPI Recommendations",
          desc: "Expert guidance for kpi recommendations...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with kpi recommendations. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Dashboard Design",
          desc: "Expert guidance for marketing dashboard design...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing dashboard design. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "ROI Analysis",
          desc: "Expert guidance for roi analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with roi analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "CAC vs LTV Analysis",
          desc: "Expert guidance for cac vs ltv analysis...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with cac vs ltv analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Local Marketing": [
    {
      category: "Local Marketing",
      icon: <MapPin className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Google Business Profile Optimization",
          desc: "Expert guidance for google business profile opt...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with google business profile optimization. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Local SEO Plan",
          desc: "Expert guidance for local seo plan...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with local seo plan. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Local Event Promotion",
          desc: "Expert guidance for local event promotion...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with local event promotion. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Restaurant Marketing",
          desc: "Expert guidance for restaurant marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with restaurant marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Real Estate Marketing",
          desc: "Expert guidance for real estate marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with real estate marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Clinic Marketing",
          desc: "Expert guidance for clinic marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with clinic marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Salon Marketing",
          desc: "Expert guidance for salon marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with salon marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Gym Marketing",
          desc: "Expert guidance for gym marketing...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with gym marketing. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Psychology & Persuasion": [
    {
      category: "Psychology & Persuasion",
      icon: <Brain className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Emotional Copywriting",
          desc: "Expert guidance for emotional copywriting...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with emotional copywriting. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Storytelling Framework",
          desc: "Expert guidance for storytelling framework...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with storytelling framework. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Buyer Psychology",
          desc: "Expert guidance for buyer psychology...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with buyer psychology. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Scarcity Messaging",
          desc: "Expert guidance for scarcity messaging...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with scarcity messaging. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Social Proof Copy",
          desc: "Expert guidance for social proof copy...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with social proof copy. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Authority Positioning",
          desc: "Expert guidance for authority positioning...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with authority positioning. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Trust Building",
          desc: "Expert guidance for trust building...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with trust building. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Persuasive CTA Generator",
          desc: "Expert guidance for persuasive cta generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with persuasive cta generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
  "Lead Generation": [
    {
      category: "Lead Generation",
      icon: <Magnet className="w-5 h-5 text-primary" />,
      items: [
        {
          title: "Lead Magnet Ideas",
          desc: "Expert guidance for lead magnet ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with lead magnet ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Ebook Outline",
          desc: "Expert guidance for ebook outline...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ebook outline. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Checklist Generator",
          desc: "Expert guidance for checklist generator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with checklist generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Webinar Funnel",
          desc: "Expert guidance for webinar funnel...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with webinar funnel. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Quiz Funnel",
          desc: "Expert guidance for quiz funnel...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with quiz funnel. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Newsletter Funnel",
          desc: "Expert guidance for newsletter funnel...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with newsletter funnel. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Free Tool Ideas",
          desc: "Expert guidance for free tool ideas...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with free tool ideas. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Lead Capture Landing Page",
          desc: "Expert guidance for lead capture landing page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with lead capture landing page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Thank-you Page",
          desc: "Expert guidance for thank-you page...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with thank-you page. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Follow-up Sequence",
          desc: "Expert guidance for follow-up sequence...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with follow-up sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
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
          title: "AI Marketing Strategy Consultant",
          desc: "Expert guidance for ai marketing strategy consu...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai marketing strategy consultant. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Complete Go-to-Market Plan Generator",
          desc: "Expert guidance for complete go-to-market plan ...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with complete go-to-market plan generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "30-Day Social Media Content Calendar",
          desc: "Expert guidance for 30-day social media content...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with 30-day social media content calendar. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Viral LinkedIn Post Creator",
          desc: "Expert guidance for viral linkedin post creator...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with viral linkedin post creator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "SEO Blog Writer",
          desc: "Expert guidance for seo blog writer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with seo blog writer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Landing Page Copywriter",
          desc: "Expert guidance for landing page copywriter...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with landing page copywriter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "High-Converting Facebook Ads Generator",
          desc: "Expert guidance for high-converting facebook ad...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with high-converting facebook ads generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Google Ads Campaign Builder",
          desc: "Expert guidance for google ads campaign builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with google ads campaign builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Email Marketing Automation Sequence",
          desc: "Expert guidance for email marketing automation ...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with email marketing automation sequence. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Product Launch Campaign Planner",
          desc: "Expert guidance for product launch campaign pla...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with product launch campaign planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Competitor Marketing Analysis",
          desc: "Expert guidance for competitor marketing analys...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with competitor marketing analysis. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Brand Messaging & Positioning Expert",
          desc: "Expert guidance for brand messaging & positioni...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with brand messaging & positioning expert. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Customer Persona Builder",
          desc: "Expert guidance for customer persona builder...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with customer persona builder. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Funnel Optimizer",
          desc: "Expert guidance for marketing funnel optimizer...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing funnel optimizer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Content Repurposing Engine",
          desc: "Expert guidance for content repurposing engine...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with content repurposing engine. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Growth Hacking Idea Generator",
          desc: "Expert guidance for growth hacking idea generat...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with growth hacking idea generator. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Conversion Rate Optimization Advisor",
          desc: "Expert guidance for conversion rate optimizatio...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with conversion rate optimization advisor. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Influencer Campaign Planner",
          desc: "Expert guidance for influencer campaign planner...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with influencer campaign planner. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "Marketing Analytics Interpreter",
          desc: "Expert guidance for marketing analytics interpr...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with marketing analytics interpreter. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
        {
          title: "AI CMO Chief Marketing Officer",
          desc: "Expert guidance for ai cmo chief marketing offi...",
          author: "Prompter Core",
          variables: [{"id": "context", "label": "Specific Context", "placeholder": "e.g., Target audience or specific goal"}],
          promptTemplate: "Act as an expert in this domain. Help me with ai cmo chief marketing officer. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {context}.",
          expectedOutput: "A highly detailed, professional, and structured response tailored to your inputs."
        },
      ]
    }
  ],
};
