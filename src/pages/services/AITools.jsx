import ServicePage from '../../components/ServicePage'
import { AIVisual } from '../../components/ServiceVisuals'

const service = {
  label: '02 — AI & Workflow Automation',
  title: 'INTELLIGENT\nSYSTEMS.\n|INFINITE| SCALE.',
  description:
    'We leverage specialized machine learning expertise to deploy autonomous systems that transform raw data into predictive, cost-saving business intelligence — letting your team focus on strategy while our systems handle the rest.',
  subtitle: 'AI CAPABILITIES WE DEPLOY',
  features: [
    {
      icon: '🧠',
      title: 'Custom-Fit Integration',
      desc: "We don't believe in one-size-fits-all. We build AI that aligns with your specific business logic and existing tech stack for seamless adoption.",
    },
    {
      icon: '📈',
      title: 'Predictive Power',
      desc: 'Move from reactive to proactive with data models that forecast trends, optimize inventory, and sharpen your decision-making process.',
    },
    {
      icon: '🔄',
      title: 'Workflow Autonomy',
      desc: 'Transform manual bottlenecks into self-sustaining automation loops — reducing overhead and increasing output 24/7 without fatigue.',
    },
    {
      icon: '💬',
      title: 'Conversational AI',
      desc: 'Deploy intelligent chatbots and virtual assistants trained on your knowledge base to handle support, sales, and internal queries.',
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      desc: 'Visual inspection systems, document OCR, facial recognition, and real-time video analytics for industry-specific use cases.',
    },
    {
      icon: '📊',
      title: 'Data Pipeline & BI',
      desc: 'End-to-end pipelines that ingest, clean, and visualize your data — turning noise into actionable business intelligence dashboards.',
    },
  ],
  stack: [
    'Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain',
    'HuggingFace', 'MLflow', 'FastAPI', 'Apache Kafka',
    'Airflow', 'Spark', 'Pinecone', 'ChromaDB', 'n8n',
  ],
  process: [
    {
      title: 'Data Audit',
      desc: 'We ingest and sanitize your raw data to find hidden patterns, biases, and opportunities your team may have missed.',
    },
    {
      title: 'Model Architecture',
      desc: 'Custom neural network design tailored to your specific use case, data volume, and infrastructure constraints.',
    },
    {
      title: 'Training & Validation',
      desc: 'Rigorous testing cycles to ensure accuracy, reliability, and ethical alignment before any production deployment.',
    },
    {
      title: 'Deployment & Scale',
      desc: 'Integrating the model into your existing infrastructure with zero downtime, full monitoring, and auto-scaling.',
    },
  ],
  icon: '🤖',
  photos: [
    'https://images.unsplash.com/photo-04HMalMSPrk?auto=format&fit=crop&w=900&h=500&q=80',
    'https://images.unsplash.com/photo--tWiibT5N2M?auto=format&fit=crop&w=900&h=500&q=80',
  ],
}

export default function AITools() {
  return <ServicePage service={service} heroVisual={<AIVisual />} />
}
