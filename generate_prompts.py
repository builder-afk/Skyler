import json

categories = {
    "Resume & CV": ["Resume Builder", "Build a professional resume from scratch", "ATS-optimized resume", "One-page resume", "Executive resume", "Academic CV", "Technical resume", "Career switch resume", "Internship resume", "Fresher resume", "Startup resume", "Resume Improvement", "Resume review", "Resume scoring", "Rewrite bullet points", "Quantify achievements", "Improve impact statements", "Add measurable metrics", "Reduce to one page", "ATS keyword optimization"],
    "LinkedIn": ["LinkedIn headline generator", "LinkedIn About summary", "Experience section rewrite", "Featured section suggestions", "Skills optimization", "LinkedIn SEO optimization", "LinkedIn profile audit", "Creator profile optimization", "Personal branding strategy", "LinkedIn content ideas"],
    "Cover Letters": ["Cover letter generator", "Personalized cover letter", "Cold application letter", "Internship cover letter", "Career transition cover letter", "Referral-based cover letter", "Executive cover letter", "Scholarship application letter", "Graduate school motivation letter"],
    "Job Search": ["Job search strategy", "Find hidden job opportunities", "Build a target company list", "Weekly job application planner", "Optimize applications", "Networking strategy", "Referral outreach plan", "International job search", "Remote job strategy"],
    "Interview Preparation": ["Technical", "Coding interview", "System design interview", "Product interview", "Data science interview", "ML interview", "DevOps interview", "UI/UX interview", "Finance interview", "HR", "HR interview preparation", "Mock interview", "Tough questions", "Strengths & weaknesses", "Tell me about yourself", "Why should we hire you?", "Salary expectations", "Career goals"],
    "Behavioural Interview": ["STAR answer generator", "Leadership stories", "Conflict resolution answers", "Failure stories", "Success stories", "Teamwork examples", "Communication examples", "Decision-making examples", "Problem-solving stories"],
    "Company Research": ["Research company before interview", "Understand company culture", "Analyze financials", "Product breakdown", "Competitor comparison", "Recent news summary", "Interview insights", "Hiring trends", "Company SWOT"],
    "Salary": ["Salary negotiation", "Counter-offer strategy", "Compensation comparison", "Equity evaluation", "Startup offer analysis", "FAANG offer comparison", "Cost of living adjustment", "Freelance pricing"],
    "Networking": ["Cold LinkedIn message", "Recruiter outreach", "Alumni networking", "Conference networking", "Follow-up messages", "Referral request", "Coffee chat request", "Thank-you message"],
    "Career Growth": ["Career roadmap", "Promotion strategy", "Performance review preparation", "Build influence at work", "Learn new skills", "Become a manager", "Career transition planning", "Long-term career planning"],
    "Career Change": ["Switch careers", "Transferable skills analysis", "Transition roadmap", "Industry comparison", "Build experience quickly", "Portfolio strategy"],
    "Freelancing": ["Freelance profile optimization", "Proposal generator", "Client outreach", "Pricing strategy", "Contract suggestions", "Build portfolio", "Upwork optimization", "Fiverr optimization"],
    "Personal Branding": ["Build personal brand", "Twitter/X strategy", "LinkedIn content calendar", "Portfolio website copy", "Elevator pitch", "Bio generator", "Professional introduction", "Thought leadership plan"],
    "Portfolio": ["Portfolio review", "Project descriptions", "GitHub README improvement", "Case study writing", "UX portfolio review", "Engineering portfolio", "Product portfolio"],
    "Performance Reviews": ["Self-evaluation", "Annual review preparation", "Promotion document", "Achievement tracker", "Goal setting", "SMART goals", "Quarterly review"],
    "Workplace Communication": ["Professional emails", "Slack message drafting", "Difficult conversations", "Meeting agenda", "Meeting recap", "Status updates", "Executive summaries"],
    "Leadership": ["First-time manager guide", "Team feedback", "Delegation strategy", "Conflict management", "Hiring plan", "Coaching employees", "One-on-one meeting agenda"],
    "Productivity": ["Weekly work planner", "Time management", "Prioritization matrix", "Deep work schedule", "Burnout prevention", "Work-life balance planner"],
    "Entrepreneurship": ["Founder resume", "Startup pitch", "Investor introduction", "Founder LinkedIn", "Technical co-founder profile", "Personal brand for founders"],
    "Students": ["Internship preparation", "Campus placement prep", "SOP review", "Scholarship applications", "Higher studies planning", "Research assistant applications"],
    "AI Career Assistant": ["Analyze my resume against a job description", "Match my profile to this role", "Generate interview questions from my resume", "Find skill gaps", "Recommend certifications", "Build a 90-day learning roadmap", "Predict ATS score", "Rewrite resume for a specific company"],
    "Offer Evaluation": ["Compare two job offers", "Startup vs MNC decision", "Remote vs onsite analysis", "Total compensation calculator", "Equity value estimation", "Career growth comparison", "Risk analysis"],
    "Layoffs & Career Recovery": ["Layoff recovery plan", "Resume after layoff", "Explain employment gap", "Return to workforce", "Confidence rebuilding", "Emergency job search plan"],
    "AI-Powered Career Coach": ["Career coaching session", "Weekly accountability coach", "Skill development planner", "Industry trend advisor", "Career decision framework", "Mentorship simulation", "Leadership coaching", "Executive coaching"],
    "Specialized by Profession": ["Software Engineer", "AI Engineer", "Data Scientist", "Product Manager", "Product Designer", "UX Designer", "Graphic Designer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Marketing Manager", "Sales Executive", "Business Analyst", "Financial Analyst", "Investment Banker", "Consultant", "Doctor", "Nurse", "Lawyer", "Teacher", "Research Scientist"],
    "Premium Wow Prompts": ["Resume -> Job Description Optimizer", "AI Interview Simulator", "LinkedIn Profile Makeover", "ATS Resume Checker", "Salary Negotiation Coach", "Career Roadmap Generator", "Company Research Assistant", "Behavioral Interview Coach (STAR)", "Career Switch Planner", "Promotion Strategy Coach", "Personal Branding Strategist", "Mock HR Interview", "Technical Interview Generator", "Offer Comparison Assistant", "Job Search Operating System", "Skill Gap Analyzer", "90-Day Career Growth Plan", "Networking Message Generator", "Executive Resume Writer", "Career Decision Advisor"]
}

icons = {
    "Resume & CV": "FileText",
    "LinkedIn": "LinkedinIcon", # we'll use custom LinkedinIcon for LinkedIn
    "Cover Letters": "Mail",
    "Job Search": "Search",
    "Interview Preparation": "Mic",
    "Behavioural Interview": "MessageCircle",
    "Company Research": "Building",
    "Salary": "DollarSign",
    "Networking": "Users",
    "Career Growth": "TrendingUp",
    "Career Change": "Shuffle",
    "Freelancing": "Laptop",
    "Personal Branding": "Star",
    "Portfolio": "Briefcase",
    "Performance Reviews": "Target",
    "Workplace Communication": "MessageSquare",
    "Leadership": "Shield",
    "Productivity": "CheckSquare",
    "Entrepreneurship": "Rocket",
    "Students": "BookOpen",
    "AI Career Assistant": "Bot",
    "Offer Evaluation": "Scale",
    "Layoffs & Career Recovery": "LifeBuoy",
    "AI-Powered Career Coach": "Compass",
    "Specialized by Profession": "UserCircle",
    "Premium Wow Prompts": "Sparkles"
}

def generate_prompt_template(category, title):
    base = "Act as an expert Career Strategist and Advisor. I need your professional help with: {title}. "
    if category in ["Resume & CV", "Cover Letters", "Portfolio"]:
        base += "My target role is {role} and my current experience level is {experience}. Please review my attached details (if any) and provide a highly optimized, ATS-friendly, and impactful output tailored to my goals."
    elif category in ["Interview Preparation", "Behavioural Interview"]:
        base += "I am interviewing for a {role} position. Provide me with a simulated scenario, tough questions, and the best framework (like STAR) to formulate my answers effectively."
    elif category in ["Salary", "Offer Evaluation"]:
        base += "My target role is {role} in the {industry} industry. Provide a data-driven, strategic framework and negotiation scripts to help me maximize my compensation while maintaining a positive relationship with the employer."
    elif category == "Networking":
        base += "My goal is to connect with {target_person} regarding {goal}. Draft a concise, personalized, and high-conversion outreach message that feels authentic and professional."
    elif category in ["AI Career Assistant", "AI-Powered Career Coach"]:
        base += "Here is my current context: {context}. Act as my personal AI Career Coach. Break down a step-by-step, actionable plan to help me achieve my immediate career objectives."
    else:
        base += "Here is my specific context: {context}. Please provide a structured, actionable, and highly professional response optimized for immediate use."
    return base.replace("{title}", title)

def get_variables(category):
    if category in ["Resume & CV", "Cover Letters", "Portfolio"]:
        return '[{ id: "role", label: "Target Role", placeholder: "e.g., Senior Product Manager" }, { id: "experience", label: "Experience Level", placeholder: "e.g., 5 years" }]'
    elif category in ["Interview Preparation", "Behavioural Interview"]:
        return '[{ id: "role", label: "Target Role", placeholder: "e.g., Software Engineer" }]'
    elif category in ["Salary", "Offer Evaluation"]:
        return '[{ id: "role", label: "Target Role", placeholder: "e.g., Data Scientist" }, { id: "industry", label: "Industry", placeholder: "e.g., Tech / FinTech" }]'
    elif category == "Networking":
        return '[{ id: "target_person", label: "Target Persona", placeholder: "e.g., Hiring Manager" }, { id: "goal", label: "Goal", placeholder: "e.g., Coffee chat / Referral" }]'
    else:
        return '[{ id: "context", label: "Specific Context", placeholder: "e.g., Details about your situation" }]'

out = []
out.append("import React from 'react';")
out.append("import { TemplateSection } from './templates';")
out.append("import { Sparkles, FileText, Mail, Search, Mic, MessageCircle, Building, DollarSign, Users, TrendingUp, Shuffle, Laptop, Star, Briefcase, Target, MessageSquare, Shield, CheckSquare, Rocket, BookOpen, Bot, Scale, LifeBuoy, Compass, UserCircle } from 'lucide-react';\n")
out.append("const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" {...props}><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\" /><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\" /><circle cx=\"4\" cy=\"4\" r=\"2\" /></svg>);\n")

cat_names = list(categories.keys())
out.append(f"export const NEW_CATEGORIES = {json.dumps(cat_names)};\n")

out.append("export const NEW_TEMPLATES_BY_CATEGORY: Record<string, TemplateSection[]> = {")
for cat, items in categories.items():
    icon = icons[cat]
    out.append(f"  \"{cat}\": [")
    out.append("    {")
    out.append(f"      category: \"{cat}\",")
    out.append(f"      icon: <{icon} className=\"w-5 h-5 text-primary\" />,")
    out.append("      items: [")
    for item in items:
        desc = f"{item} expert guidance and templates."
        if len(desc) > 50:
            desc = desc[:47] + "..."
        var_str = get_variables(cat)
        prompt = generate_prompt_template(cat, item)
        out.append("        {")
        out.append(f"          title: {json.dumps(item)},")
        out.append(f"          desc: {json.dumps(desc)},")
        out.append(f"          author: \"Prompter Core\",")
        out.append(f"          variables: {var_str},")
        out.append(f"          promptTemplate: {json.dumps(prompt)},")
        out.append(f"          expectedOutput: \"A highly detailed, professional, and structured response tailored to your inputs.\"")
        out.append("        },")
    out.append("      ]")
    out.append("    }")
    out.append("  ],")
out.append("};")

with open("src/lib/data/new-templates.tsx", "w") as f:
    f.write("\n".join(out))

print("Generated src/lib/data/new-templates.tsx successfully!")
