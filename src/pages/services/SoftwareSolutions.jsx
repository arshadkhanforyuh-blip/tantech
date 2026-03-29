import ServicePage from '../../components/ServicePage'
import { SoftwareVisual } from '../../components/ServiceVisuals'

const service = {
  label: '01 — Software & Web Solutions',
  title: 'INTELLIGENT\nSYSTEMS.\n|INFINITE| SCALE.',
  description:
    'We engineer high-performance, enterprise-grade applications that bridge the gap between complex business logic and intuitive user experience. Built on modern stacks, designed to grow with you.',
  subtitle: 'WHAT WE BUILD',
  features: [
    {
      icon: '🚀',
      title: 'SaaS & Product Development',
      desc: 'Turning your startup idea into a market-ready Software-as-a-Service platform with multi-tenant architecture and scalable infrastructure.',
    },
    {
      icon: '⚙️',
      title: 'Custom CRM / ERP Systems',
      desc: 'Building internal tools that manage your workflows, customers, and data exactly how your business operates — no compromises.',
    },
    {
      icon: '🔗',
      title: 'API & Third-Party Integration',
      desc: 'Connecting your software to the global ecosystem — from payment gateways like Stripe to communication tools like Twilio.',
    },
    {
      icon: '🏗️',
      title: 'Legacy Modernization',
      desc: 'Taking your old, slow systems and rebuilding them into modern, cloud-native applications without losing your data or momentum.',
    },
    {
      icon: '🎨',
      title: 'Frontend Excellence',
      desc: 'Responsive, high-speed interfaces built with React and Next.js for a premium user experience that converts and retains.',
    },
    {
      icon: '🛡️',
      title: 'Backend Stability',
      desc: 'Robust server-side logic and database management using Node.js and Python — secure, performant, and always available.',
    },
  ],
  stack: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure',
    'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'CI/CD',
  ],
  process: [
    {
      title: 'Discovery',
      desc: 'Deep-dive into your business requirements, user personas, and technical constraints to define the right scope.',
    },
    {
      title: 'Prototyping',
      desc: 'High-fidelity wireframes to visualize the user journey before we write a single line of code.',
    },
    {
      title: 'Agile Sprints',
      desc: 'Iterative development with regular demos so you see real progress and can course-correct in real-time.',
    },
    {
      title: 'Deployment & Support',
      desc: 'Launching your platform and providing ongoing maintenance to keep it secure, fast, and evolving.',
    },
  ],
  icon: '⚡',
  photos: [
    'https://images.unsplash.com/photo-1754039985001-ccafee437736?auto=format&fit=crop&w=900&h=500&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&h=500&q=80',
  ],
}

export default function SoftwareSolutions() {
  return <ServicePage service={service} heroVisual={<SoftwareVisual />} />
}
