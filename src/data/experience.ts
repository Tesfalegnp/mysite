import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'icog-labs',
    organization: 'iCog-Labs & Independent AI Projects',
    role: 'AI Engineer & Full-Stack Developer',
    type: 'Internship & Research',
    period: '2023 – Present',
    location: 'Addis Ababa, Ethiopia',
    description: 'Engaged in Artificial General Intelligence (AGI) research, neuro-symbolic reasoning frameworks, and full-stack LLM application development.',
    responsibilities: [
      'Researched symbolic cognitive architectures using MeTTa, OpenCog, and OpenPsi for logic-based reasoning systems.',
      'Built LLM-powered web applications using React, FastAPI, and Redis with LangChain and OpenAI API integrations.',
      'Developed and deployed Hugging Face models for natural language processing and health-related AI tasks.',
      'Contributed to SingularityNET-aligned research exploring neuro-symbolic AI paradigms and cognitive architectures.',
      'Engineered CoffeeGuard AI, an offline-first mobile application featuring on-device coffee leaf disease detection.'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'Redis', 'LangChain', 'OpenAI API', 'MeTTa', 'OpenPsi', 'PyTorch', 'TensorFlow Lite'],
    isCurrent: true
  },
  {
    id: 'hemin-plc',
    organization: 'Hemin Business PLC',
    role: 'Software Developer / Full-Stack Developer',
    type: 'Professional Experience',
    period: '2024 – Present',
    location: 'Addis Ababa, Ethiopia',
    description: 'Engineered core enterprise modules for the Hemin ERP platform, focusing on inventory management, warehouse topology, and transactional data integrity.',
    responsibilities: [
      'Architected the Inventory & Logistics module following modular monolith and Domain-Driven Design (DDD) principles.',
      'Designed append-only double-entry stock ledgers ensuring absolute transaction integrity across receipts, issues, and transfers.',
      'Implemented hierarchical warehouse topology modeling sites, zones, aisles, and storage location coordinates.',
      'Built moving average cost (MAC) valuation strategy engines decoupled from financial general ledger postings.',
      'Developed responsive React/TypeScript interfaces for picking policies (FIFO/FEFO) and stock reservation workflows.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'Tailwind CSS'],
    isCurrent: true
  },
  {
    id: 'mtu-leadership',
    organization: 'Mizan Tepi University',
    role: 'Student Union President & Student Peace Forum President',
    type: 'Academic Leadership',
    period: '2024 – 2026',
    location: 'Tepi, Ethiopia',
    description: 'Elected student body executive representing university student body interests, institutional governance, and campus tech incubation initiatives.',
    responsibilities: [
      'Served as President of the Student Union, coordinating student representation, academic welfare, and governance.',
      'Served as President of the Student Peace Forum, leading constructive campus dialogue and student engagement programs.',
      'Contributed to the Mizan Tepi University Incubation & Innovation Center, supporting student software development projects.',
      'Led the digital meal card control mobile app initiative for campus cafeteria verification.'
    ],
    technologies: ['Leadership', 'Project Governance', 'Campus Innovation', 'Event Management', 'Public Speaking']
  }
];
