import ServicePage from '../../components/ServicePage'

const service = {
  label: '03 — Shopify Development',
  title: 'BEYOND\nTEMPLATES.\n|CONVERSION| FIRST.',
  description:
    'We move beyond basic templates to build conversion-optimized Shopify engines using custom Liquid code and data-driven UI/UX architecture — crafted to turn browsers into buyers at scale.',
  subtitle: 'SHOPIFY SOLUTIONS',
  features: [
    {
      icon: '🎨',
      title: 'Custom Theme Development',
      desc: 'Pixel-perfect Shopify themes built from scratch with custom Liquid — designed for your brand, not constrained by a template.',
    },
    {
      icon: '⚡',
      title: 'Headless Commerce',
      desc: 'Blazing-fast storefronts built with Shopify Hydrogen + React — decoupled architecture for ultimate performance and flexibility.',
    },
    {
      icon: '🛒',
      title: 'Conversion Rate Optimization',
      desc: 'Data-driven UI decisions, A/B tested checkout flows, and frictionless product discovery to maximize your revenue per visitor.',
    },
    {
      icon: '🔌',
      title: 'App & Integration Development',
      desc: 'Custom Shopify apps, ERP/CRM integrations, and third-party API connections to build a seamless commerce ecosystem.',
    },
    {
      icon: '📦',
      title: 'Migration & Re-platforming',
      desc: 'Seamlessly migrate from WooCommerce, Magento, or any other platform to Shopify with zero data loss and minimal downtime.',
    },
    {
      icon: '📊',
      title: 'Analytics & Growth Tracking',
      desc: 'Set up GA4, Meta Pixel, Klaviyo, and custom dashboards to track every touchpoint and optimize your marketing ROI.',
    },
  ],
  stack: [
    'Shopify', 'Shopify Plus', 'Liquid', 'Hydrogen', 'Oxygen',
    'React', 'GraphQL Storefront API', 'Klaviyo', 'Recharge',
    'Judge.me', 'Metafields', 'Shopify Flow', 'Checkout Extensions',
  ],
  process: [
    {
      title: 'Store Audit',
      desc: 'Full review of your current store performance, UX issues, conversion blockers, and technical debt.',
    },
    {
      title: 'Design & Prototype',
      desc: 'High-fidelity Figma designs for all key pages — desktop and mobile — with brand-aligned UI systems.',
    },
    {
      title: 'Build & Integrate',
      desc: 'Custom Liquid development, app integrations, and thorough cross-device QA before launch.',
    },
    {
      title: 'Launch & Optimize',
      desc: 'Staged rollout, post-launch monitoring, A/B testing setup, and ongoing CRO improvements.',
    },
  ],
  icon: '🛒',
}

export default function Shopify() {
  return <ServicePage service={service} />
}
