import ServicePage from '../../components/ServicePage'
import { BenchSalesVisual } from '../../components/ServiceVisuals'

const service = {
  label: '05 — Bench Sales & Placement',
  title: 'MAXIMIZE\nTALENT.\n|ZERO| DOWNTIME.',
  description:
    'We maximize talent utilization and minimize downtime by leveraging an elite network of Tier-1 vendors and prime implementation partners — so your consultants are always placed, always productive.',
  subtitle: 'BENCH SALES CAPABILITIES',
  features: [
    {
      icon: '🏆',
      title: 'Tier-1 Vendor Network',
      desc: 'Direct relationships with Tier-1 vendors, prime contractors, and Fortune 500 implementation partners across the US.',
    },
    {
      icon: '⚡',
      title: 'Rapid Placement',
      desc: 'Aggressive marketing of consultant profiles ensures minimal bench time — most placements completed within 1–3 weeks.',
    },
    {
      icon: '📋',
      title: 'Visa Sponsorship Support',
      desc: "Full support for H1B, GC-EAD, OPT, and US Citizen consultants — we navigate the compliance landscape so you don't have to.",
    },
    {
      icon: '💰',
      title: 'Rate Negotiation',
      desc: 'Expert negotiators who secure the best market rates for your consultants — maximizing bill rates and net margins.',
    },
    {
      icon: '📞',
      title: 'Hotlist Marketing',
      desc: 'Proactive daily marketing of consultant hotlists to our curated vendor database for maximum visibility and reach.',
    },
    {
      icon: '🤝',
      title: 'End-to-End Management',
      desc: 'From submission and interview prep to onboarding and contract management — we handle the entire placement lifecycle.',
    },
  ],
  stack: [
    'Dice', 'Monster', 'LinkedIn Recruiter', 'Indeed',
    'SAP Fieldglass', 'Beeline', 'Ariba', 'IQNavigator',
    'JobDiva', 'Bullhorn', 'Salesforce CRM', 'ZoomInfo',
  ],
  process: [
    {
      title: 'Profile Analysis',
      desc: "We review your consultant's resume, skills, and experience to craft a compelling, market-ready profile.",
    },
    {
      title: 'Targeted Marketing',
      desc: 'Daily submission of profiles to relevant job requirements across our entire vendor and prime partner network.',
    },
    {
      title: 'Interview Coordination',
      desc: 'Schedule management, interview prep coaching, and real-time feedback loops to maximize offer conversion.',
    },
    {
      title: 'Placement & Onboarding',
      desc: 'Contract negotiation, paperwork, background checks, and smooth onboarding to the client engagement.',
    },
  ],
  icon: '🤝',
}

export default function BenchSales() {
  return <ServicePage service={service} heroVisual={<BenchSalesVisual />} />
}
