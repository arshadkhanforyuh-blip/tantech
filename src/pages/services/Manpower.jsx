import ServicePage from '../../components/ServicePage'
import { ManpowerVisual } from '../../components/ServiceVisuals'

const service = {
  label: '06 — Manpower & Staffing',
  title: 'THE RIGHT\nHIRE,\n|FIRST TIME|.',
  description:
    'We eliminate hiring friction through technical vetting by senior engineers, ensuring every hire is a precise fit for both your tech stack and your culture — reducing time-to-hire and turnover simultaneously.',
  subtitle: 'STAFFING SOLUTIONS',
  features: [
    {
      icon: '🔬',
      title: 'Technical Vetting by Engineers',
      desc: 'Every candidate is evaluated by senior engineers — not just HR — ensuring real technical competency, not just resume keywords.',
    },
    {
      icon: '⚡',
      title: 'Contract & Contract-to-Hire',
      desc: 'Flexible staffing models to plug skill gaps immediately — W2 and C2C arrangements across all experience levels.',
    },
    {
      icon: '🎯',
      title: 'Permanent Placement',
      desc: 'Curated full-time hiring for roles where long-term fit matters — with a 90-day replacement guarantee on all direct placements.',
    },
    {
      icon: '🌐',
      title: 'Diverse Talent Pool',
      desc: 'Access to a deep network of US-based and global engineering, data science, DevOps, QA, and product management talent.',
    },
    {
      icon: '📋',
      title: 'Compliance & Onboarding',
      desc: 'Full background checks, drug screening, I-9 verification, and smooth onboarding for every placed candidate.',
    },
    {
      icon: '🔄',
      title: 'Volume Hiring',
      desc: 'Scalable recruitment for rapid team buildouts — from 5 engineers to 50, on-demand and on-time.',
    },
  ],
  stack: [
    'LinkedIn Recruiter', 'Greenhouse', 'Lever', 'Workday',
    'iCIMS', 'Bullhorn', 'CodeSignal', 'HackerRank',
    'Codility', 'Calendly', 'Checkr', 'Sterling BGC',
  ],
  process: [
    {
      title: 'Requirements Deep-Dive',
      desc: 'We embed with your team to understand not just the JD, but the real skills, culture, and pace needed to succeed.',
    },
    {
      title: 'Sourcing & Screening',
      desc: 'Multi-channel sourcing + technical pre-screening to deliver only candidates who clear our quality bar.',
    },
    {
      title: 'Technical Assessment',
      desc: 'Role-specific coding challenges, system design interviews, or live pair programming sessions conducted by our engineers.',
    },
    {
      title: 'Offer & Onboarding',
      desc: 'Offer negotiation support, paperwork processing, and dedicated onboarding coordination for day-one readiness.',
    },
  ],
  icon: '👥',
}

export default function Manpower() {
  return <ServicePage service={service} heroVisual={<ManpowerVisual />} />
}
