import ServicePage from '../../components/ServicePage'
import { TaxVisual } from '../../components/ServiceVisuals'

const service = {
  label: '04 — Taxation & Compliance',
  title: 'PROTECT\nYOUR\n|BOTTOM LINE|.',
  description:
    'We protect your bottom line by architecting proactive fiscal strategies and rigorous compliance frameworks tailored for global commerce — so you can grow with confidence, not anxiety.',
  subtitle: 'COMPLIANCE SERVICES',
  features: [
    {
      icon: '🇺🇸',
      title: 'US Federal & State Tax',
      desc: 'Corporate tax preparation, quarterly estimates, and multi-state nexus analysis for businesses operating across the US.',
    },
    {
      icon: '🌍',
      title: 'International Tax Strategy',
      desc: 'Transfer pricing, FBAR reporting, treaty analysis, and cross-border transaction structuring for global commerce.',
    },
    {
      icon: '📋',
      title: 'IRS Compliance & Audit Defense',
      desc: 'Full representation before the IRS, audit risk assessment, and proactive documentation to protect your business.',
    },
    {
      icon: '💼',
      title: 'Business Entity Structuring',
      desc: 'LLC, S-Corp, C-Corp selection and structuring advice to minimize tax liability and protect personal assets.',
    },
    {
      icon: '💰',
      title: 'Payroll Tax & 1099 Compliance',
      desc: 'Payroll setup, W-2/1099 filing, contractor compliance, and employment tax management across all jurisdictions.',
    },
    {
      icon: '📊',
      title: 'Tax Planning & Forecasting',
      desc: 'Year-round proactive tax planning, cash flow forecasting, and deduction optimization to minimize your effective tax rate.',
    },
  ],
  stack: [
    'QuickBooks', 'Xero', 'TurboTax Business', 'Drake Tax',
    'Thomson Reuters', 'Bloomberg Tax', 'IRS e-File',
    'ADP Payroll', 'Gusto', 'SAP', 'NetSuite',
  ],
  process: [
    {
      title: 'Financial Review',
      desc: 'Comprehensive review of your financials, prior returns, and current exposure areas to establish a baseline.',
    },
    {
      title: 'Strategy Design',
      desc: 'Custom tax strategy development — identifying deductions, credits, and structural opportunities specific to your business.',
    },
    {
      title: 'Filing & Compliance',
      desc: 'Timely, accurate preparation and filing of all required returns with full documentation and audit trails.',
    },
    {
      title: 'Ongoing Advisory',
      desc: 'Quarterly check-ins, tax law monitoring, and proactive alerts when new regulations affect your business.',
    },
  ],
  icon: '📊',
}

export default function Tax() {
  return <ServicePage service={service} heroVisual={<TaxVisual />} />
}
