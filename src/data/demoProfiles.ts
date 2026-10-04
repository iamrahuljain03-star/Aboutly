import { DemoProfileItem } from '../types/profile';

export const DEMO_PROFILES: Record<string, DemoProfileItem> = {
  ayush: {
    slug: 'ayush',
    name: 'Ayush Sharma',
    profession: 'Product Designer',
    tagline: 'Designing digital experiences that make complex products feel simple, useful and human.',
    location: 'Bengaluru, India',
    avatarInitials: 'AS',
    accentColor: '#1E293B',
    bio: 'Product Designer specializing in high-utility systems, zero-friction workflows, and cohesive design foundations. Over 6 years partnering with high-velocity startups and established teams to turn ambiguous problems into clear, usable software.',
    aboutStory: [
      'I focus on the intersection of interaction design, system architecture, and customer behavior. Good software should get out of the way, communicate clearly, and reduce cognitive strain for people doing hard work.',
      'Over the past six years, I have led design initiatives for fintech platforms, enterprise developer tools, and consumer mobile apps — shaping products from initial problem framing to shipping pixel-accurate code.',
      'When not pushing components in Figma or prototyping in code, you can find me photographing brutalist architecture, reading print essays, or brewing pour-over coffee.',
    ],
    skills: [
      'Product Strategy',
      'Design Systems',
      'Interaction Design',
      'Design Tokens',
      'User Research',
      'High-Fidelity Prototyping',
      'Figma & FigJam',
      'React & CSS Foundations',
      'Design Audits',
    ],
    experiences: [
      {
        role: 'Lead Product Designer',
        company: 'Veloce Labs',
        period: '2023 — Present',
        description:
          'Led end-to-end design for the core cloud collaboration suite. Unified 4 disparate products into a single tokenized design system, accelerating feature shipping speed by 35%.',
        tags: ['Design Systems', 'Team Leadership', 'Web App'],
      },
      {
        role: 'Senior Product Designer',
        company: 'KiteFlow Payments',
        period: '2021 — 2023',
        description:
          'Redesigned the cross-border merchant payout console. Reduced payout reconciliation drop-off by 24% and built interactive developer docs with live API payload previews.',
        tags: ['Fintech', 'Checkout Flow', 'Design Systems'],
      },
      {
        role: 'UX / UI Designer',
        company: 'Studio Monochrome',
        period: '2019 — 2021',
        description:
          'Delivered client design sprints for early-stage B2B SaaS founders. Crafted wireframes, customer journeys, brand marks, and responsive web apps.',
        tags: ['Client Sprints', 'Mobile Apps', 'Branding'],
      },
    ],
    selectedWork: [
      {
        title: 'Veloce Design System 2.0',
        category: 'Design Systems & Tokens',
        description:
          'A multi-brand foundation supporting web, iOS, and Android with automated token pipelines and accessible WCAG AAA color scales.',
        outcome: 'Adopted by 45+ engineers across 6 cross-functional pods.',
      },
      {
        title: 'KiteFlow Merchant Dashboard',
        category: 'Enterprise Fintech',
        description:
          'Simplified high-volume transaction analytics, recurring invoices, and dispute resolution into an intuitive single-screen workspace.',
        outcome: 'Processed over $18M in monthly volume with a 99.4% user satisfaction score.',
      },
      {
        title: 'Northstar Habit & Routine App',
        category: 'Consumer Mobile (iOS)',
        description:
          'Minimalist iOS routine tracker designed around tactile haptics, gesture-first navigation, and zero-clutter typography.',
        outcome: 'Featured on the App Store Daily Picks; 120k+ downloads.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Design (B.Des), Interaction Design',
        institution: 'National Institute of Design (NID)',
        year: '2015 — 2019',
      },
    ],
    services: [
      'Full Product Design (0 to 1)',
      'Design System Creation & Migration',
      'UX Audits & Conversion Optimization',
      'Design Advisory & Team Mentorship',
    ],
    socials: {
      email: 'ayush.sharma.design@example.com',
      whatsappText:
        'Hi Ayush, I saw your Aboutly profile and would like to talk about a design collaboration.',
      linkedin: 'https://linkedin.com/in/ayush-sharma-designer',
      website: 'https://ayushsharma.design',
    },
  },

  neha: {
    slug: 'neha',
    name: 'Neha Kapoor',
    profession: 'Corporate Lawyer',
    tagline: 'Advising technology startups and venture funds on regulatory governance, M&A, and cross-border commercial transactions.',
    location: 'New Delhi & Mumbai, India',
    avatarInitials: 'NK',
    accentColor: '#1E3A5F',
    bio: 'Senior corporate legal counsel with 8 years of practice assisting venture-backed founders, family offices, and cross-border enterprises with seed-to-growth financings, regulatory compliance, commercial contracts, and strategic acquisitions.',
    aboutStory: [
      'My practice is grounded in pragmatic counsel: translating complex statutory frameworks into actionable operational decisions so founders can move swiftly without latent legal exposure.',
      'I have counselled over 40+ early and growth-stage companies across enterprise SaaS, healthtech, and logistics on capital raises totaling upwards of $120M.',
      'Regular contributor on corporate governance and angel investing frameworks for tech incubators.',
    ],
    skills: [
      'Venture Capital Financings',
      'Mergers & Acquisitions (M&A)',
      'Cross-Border Restructuring',
      'Commercial Contract Drafting',
      'ESOP Scheme Structuring',
      'Data Privacy & Compliance',
      'Board Governance',
      'Shareholder Agreements (SHA/SSA)',
    ],
    experiences: [
      {
        role: 'Partner — Corporate & Emerging Tech',
        company: 'Apex Legal Chambers',
        period: '2022 — Present',
        description:
          'Leading the emerging companies practice group. Structuring Series A to C rounds, debt facilities, and multi-jurisdiction intellectual property licensing agreements.',
        tags: ['Fundraising', 'M&A', 'Governance'],
      },
      {
        role: 'Senior Legal Associate',
        company: 'Shardul & Partners Law Offices',
        period: '2018 — 2022',
        description:
          'Advised private equity funds on buyouts and strategic acquisitions. Drafted term sheets, due diligence reports, and regulatory filings for foreign direct investments (FDI).',
        tags: ['Private Equity', 'Due Diligence', 'FDI'],
      },
    ],
    selectedWork: [
      {
        title: '$42M Series B Syndicate Counsel',
        category: 'Venture Capital',
        description:
          'Represented lead venture fund across due diligence, negotiations, and closing across Singapore and Indian holding structures.',
      },
      {
        title: 'Cross-Border Flip & Restructuring',
        category: 'Corporate Structuring',
        description:
          'Seamless corporate re-domiciliation for a high-growth developer tooling SaaS entity with clean compliance clearances.',
      },
      {
        title: 'Comprehensive Startup Legal Playbook',
        category: 'Founder Advisory',
        description:
          'Standardized employment, NDA, IP assignment, and advisory equity templates for 20+ portfolio ventures.',
      },
    ],
    education: [
      {
        degree: 'B.A. LL.B. (Hons.)',
        institution: 'National Law School of India University (NLSIU), Bangalore',
        year: '2013 — 2018',
      },
    ],
    services: [
      'Fundraising Documentation (SHA/SSA/SAFE)',
      'ESOP Scheme Framing & Rollout',
      'Commercial Contract Drafting & Review',
      'Outside General Counsel Retainer',
    ],
    socials: {
      email: 'neha.kapoor.legal@example.com',
      whatsappText:
        'Hi Neha, I came across your Aboutly profile and would like to schedule a legal consultation for our venture.',
      linkedin: 'https://linkedin.com/in/neha-kapoor-counsel',
    },
  },

  arjun: {
    slug: 'arjun',
    name: 'Arjun Mehta',
    profession: 'Business Consultant',
    tagline: 'Accelerating market expansion, unit economics optimization, and operational agility for mid-market enterprises.',
    location: 'Mumbai, India',
    avatarInitials: 'AM',
    accentColor: '#36454F',
    bio: 'Strategic advisor and fractional COO helping founders and leadership teams streamline core operations, scale post-seed revenues, and align cross-functional metrics with sustainable cash flow.',
    aboutStory: [
      'Strategy is only as good as execution on Monday morning. I bridge high-level board aspirations with boots-on-the-ground operational cadence, pricing optimization, and sales pipeline hygiene.',
      'Over the past 9 years, I have worked across top-tier management consulting and direct operational leadership roles, unlocking over ₹350 Cr in cumulative top-line growth.',
    ],
    skills: [
      'GTM Strategy & Expansion',
      'Unit Economics Optimization',
      'Fractional COO Services',
      'Pricing Architecture',
      'Sales Pipeline Architecture',
      'Post-Merger Integration',
      'Financial Modeling',
      'Executive Leadership Coaching',
    ],
    experiences: [
      {
        role: 'Managing Director & Strategic Advisor',
        company: 'Vanguard Strategy Partners',
        period: '2021 — Present',
        description:
          'Advising mid-sized consumer brands and B2B distribution leaders on direct-to-consumer expansion, EBITDA expansion, and capital allocation.',
        tags: ['GTM Strategy', 'Unit Economics', 'Advisory'],
      },
      {
        role: 'Senior Engagement Manager',
        company: 'McKinley Management Consulting',
        period: '2016 — 2021',
        description:
          'Led corporate turnaround and digital transformation mandates across retail, logistics, and pharmaceutical manufacturing.',
        tags: ['Enterprise Transformation', 'Operations'],
      },
    ],
    selectedWork: [
      {
        title: 'D2C Brand EBITDA Turnaround',
        category: 'Operational Restructuring',
        description:
          'Rationalized SKU portfolio, renegotiated logistics contracts, and restored positive operating margins within 5 months.',
        outcome: 'Shifted operating margin from -11% to +9.2% annualized.',
      },
      {
        title: 'B2B Distribution GTM Playbook',
        category: 'Go-To-Market',
        description:
          'Re-architected enterprise outbound sales commission tiers and deployed account-based sales cadences.',
        outcome: 'Doubled qualified pipeline velocity in 120 days.',
      },
    ],
    education: [
      {
        degree: 'Post Graduate Programme in Management (MBA)',
        institution: 'Indian Institute of Management (IIM) Ahmedabad',
        year: '2014 — 2016',
      },
      {
        degree: 'B.Tech in Mechanical Engineering',
        institution: 'IIT Bombay',
        year: '2009 — 2013',
      },
    ],
    services: [
      'Quarterly Strategic Sprints',
      'Fractional COO & Operations Leadership',
      'Pricing & Gross Margin Audits',
      'Executive Board Advisory',
    ],
    socials: {
      email: 'arjun.mehta.advisory@example.com',
      whatsappText:
        'Hi Arjun, I saw your Aboutly profile and would like to discuss business advisory services for our company.',
      linkedin: 'https://linkedin.com/in/arjun-mehta-advisor',
      website: 'https://arjunmehta.advisory',
    },
  },
};
