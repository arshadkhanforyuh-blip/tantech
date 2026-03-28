import ServicePage from '../../components/ServicePage'
import { RPOVisual } from '../../components/ServiceVisuals'

const service = {
  label: '07 — RPO & Executive Placement',
  title: 'C-SUITE\nREADY.\n|RPO| READY.',
  description:
    'We eliminate RPO talent gaps by sourcing C-suite and key technical leaders, aligning equity incentives, and streamlining HR processes — ensuring precise fits for your growth trajectory and public market demands.',
  subtitle: 'EXECUTIVE CAPABILITIES',
  features: [
    {
      icon: '👔',
      title: 'C-Suite & VP Placement',
      desc: 'CEO, CTO, CFO, CPO, and VP-level search across technology, operations, and finance — for both growth-stage and enterprise companies.',
    },
    {
      icon: '📈',
      title: 'RPO & Pre-Exit Readiness',
      desc: 'Assembling the leadership team and board composition required to satisfy institutional investors and public market scrutiny.',
    },
    {
      icon: '💎',
      title: 'Equity & Comp Structuring',
      desc: "Designing competitive equity packages, vesting schedules, and total comp frameworks that attract and retain A-players at your stage.",
    },
    {
      icon: '🏗️',
      title: 'HR Infrastructure Build-Out',
      desc: 'Designing and implementing scalable HR systems, performance management frameworks, and organizational structures for hypergrowth.',
    },
    {
      icon: '🔍',
      title: 'Confidential Search',
      desc: 'Discreet executive search for sensitive replacements or stealth hires — with strict NDA protocols and minimal market exposure.',
    },
    {
      icon: '🌐',
      title: 'Board & Advisor Placement',
      desc: 'Sourcing independent board directors, technical advisors, and industry veterans who add strategic value and investor credibility.',
    },
  ],
  stack: [
    'LinkedIn Recruiter Pro', 'Korn Ferry', 'Spencer Stuart Database',
    'Carta', 'Shareworks', 'Radford Global Compensation',
    'Workday HCM', 'BambooHR', 'Lattice', 'Culture Amp',
    'Greenhouse', 'Lever ATS',
  ],
  process: [
    {
      title: 'Leadership Audit',
      desc: 'Mapping your current leadership team against the requirements of your next stage — identifying gaps and succession risks.',
    },
    {
      title: 'Ideal Profile Design',
      desc: "Defining the competencies, experience, and cultural attributes of the ideal executive — with input from board and key stakeholders.",
    },
    {
      title: 'Targeted Search',
      desc: 'Confidential outreach to a curated shortlist of qualified candidates using our proprietary executive network and research.',
    },
    {
      title: 'Evaluation & Onboarding',
      desc: 'Structured interviews, reference deep-dives, offer design, and 90-day onboarding support to ensure a strong start.',
    },
  ],
  icon: '🚀',
}

export default function RPO() {
  return <ServicePage service={service} heroVisual={<RPOVisual />} />
}
