import json
import re

ICON_MAP = {
    "Email Marketing": "Mail",
    "Social Media Marketing": "Share2",
    "Content Marketing": "FileText",
    "SEO": "Search",
    "Paid Advertising": "DollarSign",
    "Copywriting": "PenTool",
    "Brand Marketing": "Star",
    "Product Marketing": "Package",
    "Growth Marketing": "TrendingUp",
    "Influencer Marketing": "Users",
    "Market Research": "Search",
    "Sales Enablement": "Target",
    "Ecommerce Marketing": "ShoppingCart",
    "Video Marketing": "Video",
    "Event Marketing": "Calendar",
    "AI Marketing": "Bot",
    "Marketing Planning": "LineChart",
    "Analytics & Optimization": "BarChart",
    "Local Marketing": "MapPin",
    "Psychology & Persuasion": "Brain",
    "Lead Generation": "Magnet",
    "Premium Wow Prompts": "Sparkles"
}

def clean_title(title):
    return title.strip().replace('📊 ', '').replace('🧠 ', '').replace('📅 ', '').replace('🚀 ', '').replace('💰 ', '').replace('🎯 ', '').replace('📚 ', '').replace('📈 ', '').replace('⚖️ ', '').replace('🧩 ', '').replace('👥 ', '').replace('🏠 ', '').replace('🤖 ', '').replace('📦 ', '').replace('📑 ', '').replace('🌍 ', '').replace('⭐ ', '').replace('🔍 ', '').replace('🤝 ', '').replace('🛒 ', '').replace('📺 ', '').replace('🎉 ', '').replace('🏷️ ', '').replace('✍️ ', '').replace('💎 ', '').replace('📧 ', '').replace('📱 ', '').replace('🎁 ', '')

with open('prompts3.txt', 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

categories = []
current_category = None
current_items = []

for raw_line in lines:
    line = raw_line.strip()
    if not line:
        if current_category:
            categories.append({
                "name": current_category,
                "icon": ICON_MAP.get(current_category, "FileText"),
                "items": current_items
            })
            current_category = None
            current_items = []
        continue
    
    cleaned_line = clean_title(line)
    
    if not current_category:
        current_category = cleaned_line
    else:
        prompt_template = f"Act as an expert in this domain. Help me with {cleaned_line.lower()}. Context: Please provide a structured, actionable, and professional response optimized for immediate use. Additional context: {{context}}."
        desc = f"Expert guidance for {cleaned_line.lower()}..."
        if len(desc) > 50:
            desc = desc[:47] + "..."
            
        current_items.append({
            "title": cleaned_line,
            "desc": desc,
            "author": "Prompter Core",
            "variables": [
                {
                    "id": "context",
                    "label": "Specific Context",
                    "placeholder": "e.g., Target audience or specific goal"
                }
            ],
            "promptTemplate": prompt_template,
            "expectedOutput": "A highly detailed, professional, and structured response tailored to your inputs."
        })

if current_category:
    categories.append({
        "name": current_category,
        "icon": ICON_MAP.get(current_category, "FileText"),
        "items": current_items
    })

out = []
out.append("import React from 'react';")
out.append("import { TemplateSection } from './templates';")
out.append("import { Mail, Share2, FileText, Search, DollarSign, PenTool, Star, Package, TrendingUp, Users, Target, ShoppingCart, Video, Calendar, Bot, LineChart, BarChart, MapPin, Brain, Magnet, Sparkles } from 'lucide-react';\n")

cat_names = [c["name"] for c in categories]
out.append(f"export const NEW_CATEGORIES_3 = {json.dumps(cat_names)};\n")

out.append("export const NEW_TEMPLATES_BY_CATEGORY_3: Record<string, TemplateSection[]> = {")

for cat in categories:
    out.append(f'  "{cat["name"]}": [')
    out.append('    {')
    out.append(f'      category: "{cat["name"]}",')
    out.append(f'      icon: <{cat["icon"]} className="w-5 h-5 text-primary" />,')
    out.append('      items: [')
    for item in cat["items"]:
        out.append('        {')
        out.append(f'          title: {json.dumps(item["title"])},')
        out.append(f'          desc: {json.dumps(item["desc"])},')
        out.append(f'          author: {json.dumps(item["author"])},')
        out.append(f'          variables: {json.dumps(item["variables"])},')
        out.append(f'          promptTemplate: {json.dumps(item["promptTemplate"])},')
        out.append(f'          expectedOutput: {json.dumps(item["expectedOutput"])}')
        out.append('        },')
    out.append('      ]')
    out.append('    }')
    out.append('  ],')

out.append("};\n")

with open('src/lib/data/new-templates3.tsx', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
