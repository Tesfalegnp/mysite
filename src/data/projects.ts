import { Project } from '../types';

export const curatedProjects: Project[] = [
  {
    id: 'graphrag-system',
    title: 'GraphRAG System',
    shortDescription: 'Knowledge-Graph Augmented Retrieval System combining graph entity relations, vector embeddings, and LLM reasoning for complex multi-hop queries.',
    category: 'ai-rag',
    typeLabel: 'Open Source',
    context: 'Traditional vector retrieval often struggles with context loss and complex entity-to-entity relationship traversing.',
    problem: 'Standard RAG models retrieve isolated document chunks by vector similarity, missing global context and structural domain connections.',
    approach: 'Engineered a GraphRAG architecture that extracts entity-relationship graphs from unstructured text, indexing node connections alongside dense vector embeddings.',
    architectureSteps: [
      { label: 'Document Processing', description: 'Raw document ingestion, chunking, and NER entity extraction.' },
      { label: 'Graph Indexing', description: 'Constructing knowledge graph triples (Subject-Predicate-Object) & node embeddings.' },
      { label: 'Hybrid Retrieval', description: 'Combining dense vector cosine search with graph traversal queries.' },
      { label: 'LLM Generation', description: 'Synthesizing context-rich answers backed by traceable knowledge graphs.' }
    ],
    keyFeatures: [
      'Dual Retrieval Engine (Vector Search + Knowledge Graph Traversal)',
      'Entity & Relationship Extraction Pipeline using LLMs',
      'FastAPI Microservice Backend with Async Query Execution',
      'Interactive Graph Visualization Interface'
    ],
    technologies: ['Python', 'FastAPI', 'NetworkX', 'OpenAI API', 'LangChain', 'Vector Search', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/Tesfalegnp/GraphRAG-system',
    featured: true
  },
  {
    id: 'coffeeguard-ai',
    title: 'CoffeeGuard AI — Mobile Disease Detection',
    shortDescription: 'Offline-first mobile AI application for on-device coffee leaf disease detection, powered by TensorFlow Lite and cloud synchronization.',
    category: 'mobile',
    typeLabel: 'Mobile AI App',
    context: 'Smallholder coffee farmers in rural Ethiopia often lack reliable internet access when inspecting crop diseases in the field.',
    problem: 'Existing agricultural diagnostic tools require online cloud APIs, making real-time crop disease diagnosis impossible in remote farms.',
    approach: 'Designed an offline-first mobile application featuring quantized on-device TensorFlow Lite computer vision models for instant offline inference, with automated background cloud sync upon network availability.',
    architectureSteps: [
      { label: 'Camera Capture', description: 'Real-time image acquisition with quality check & pre-processing.' },
      { label: 'TFLite Model', description: 'On-device neural inference executing in <150ms without network.' },
      { label: 'Diagnosis & Advice', description: 'Instant treatment recommendation display in local languages.' },
      { label: 'Cloud Sync', description: 'Asynchronous sync to backend server when connection is restored.' }
    ],
    keyFeatures: [
      'Sub-150ms On-Device Leaf Disease Classification',
      'Offline-First Architecture with SQLite & Supabase Backend Sync',
      'Localized Agricultural Treatment Guidance',
      'FastAPI Server Backend for Cloud Telemetry & Model Updates'
    ],
    technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/Tesfalegnp/CoffeeGruard-App',
    featured: true
  },
  {
    id: 'hemin-erp-inventory',
    title: 'Hemin ERP — Inventory & Logistics Module',
    shortDescription: 'Domain-driven Inventory Management system for Hemin ERP featuring append-only double-entry stock ledgers, warehouse topology, and moving average costing.',
    category: 'enterprise',
    typeLabel: 'Enterprise Software',
    context: 'Enterprise business operations require strict transactional inventory control to prevent stock drift and audit discrepancies.',
    problem: 'Traditional CRUD inventory systems suffer from race conditions, missing historical audit trails, and financial reconciliation mismatches.',
    approach: 'Architected a modular Domain-Driven Design (DDD) inventory system with an append-only stock ledger enforcing double-entry bookkeeping across multi-site warehouse hierarchies.',
    architectureSteps: [
      { label: 'Item & Topology PIM', description: 'Hierarchical item cataloging & site/zone/aisle/bin mapping.' },
      { label: 'Append-Only Ledger', description: 'Double-entry stock movements ensuring immutable transaction logs.' },
      { label: 'Valuation Engine', description: 'Moving Average Cost (MAC) calculations decoupled from GL postings.' },
      { label: 'Picking Strategies', description: 'FIFO & FEFO policies for operational goods issues.' }
    ],
    keyFeatures: [
      'Append-Only Double-Entry Transaction Ledger',
      'Hierarchical Warehouse Topology (Site → Zone → Aisle → Bin)',
      'Decoupled Moving Average Cost (MAC) Valuation Engine',
      'FIFO & FEFO Picking Policies and Stock Reservation Time-To-Live'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Tesfalegnp/Inventory-Management-system-web-based-',
    featured: true
  },
  {
    id: 'hospital-management-system',
    title: 'Enterprise Hospital Management System (EHMS)',
    shortDescription: 'Comprehensive web-based hospital management platform with Role-Based Access Control (RBAC), patient record workflows, and PostgreSQL backend.',
    category: 'enterprise',
    typeLabel: 'Enterprise Software',
    context: 'Healthcare institutions require highly secure, multi-role systems to coordinate patient care, pharmacy inventory, and administrative records.',
    problem: 'Manual paper records and fragmented software lead to patient scheduling delays, billing inaccuracies, and data access security risks.',
    approach: 'Engineered a modular web application with strict RBAC permissions, encrypted relational database schemas, and streamlined clinical workflow interfaces.',
    architectureSteps: [
      { label: 'Authentication & RBAC', description: 'Role-based access security for Doctors, Nurses, Receptionists, and Admins.' },
      { label: 'Patient Lifecycle', description: 'EHR registration, triage, consultation logs, and medical histories.' },
      { label: 'Pharmacy & Billing', description: 'Prescription fulfillment and automated billing invoices.' },
      { label: 'Relational Database', description: 'Normalized PostgreSQL schema with transaction boundaries.' }
    ],
    keyFeatures: [
      'Multi-Role Authorization System (RBAC)',
      'Electronic Health Record (EHR) Lifecycle Management',
      'Pharmacy Inventory & Medical Billing Workflows',
      'REST API Architecture built with TypeScript & Node.js'
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL', 'REST APIs'],
    githubUrl: 'https://github.com/Tesfalegnp/Hospital-Management-System-HMS-Web_Based',
    featured: true
  },
  {
    id: 'neuro-symbolic-coffee-agent',
    title: 'Neuro-Symbolic AI Agent for Coffee Diagnostics',
    shortDescription: 'Hybrid AI diagnostic agent combining symbolic logic reasoning (MeTTa/OpenCog) with neural language models for agricultural expert advice.',
    category: 'ai-rag',
    typeLabel: 'Research Project',
    context: 'Pure neural LLMs suffer from hallucination when providing strict expert diagnostic rules in specialized agricultural domains.',
    problem: 'Pure deep learning models lack explainability and rule compliance, while pure expert systems struggle with natural language interactions.',
    approach: 'Integrated MeTTa hyperon symbolic rule expressions with neural LLM prompt pipelines, producing deterministic reasoning with fluent interaction.',
    architectureSteps: [
      { label: 'Knowledge Base', description: 'Symbolic facts & diagnostic rules expressed in MeTTa/Atomese.' },
      { label: 'Reasoning Engine', description: 'Pattern matching & backward chaining logic execution.' },
      { label: 'Neural Synthesizer', description: 'LLM natural language formatting of verified logical proofs.' }
    ],
    keyFeatures: [
      'Deterministic Rule Validation via MeTTa Symbolic Logic',
      'Explainable AI Output Traceable to Expert Rules',
      'Python Microservice Integration with FastAPI'
    ],
    technologies: ['Python', 'MeTTa', 'OpenCog', 'FastAPI', 'LangChain', 'OpenAI API'],
    githubUrl: 'https://github.com/Tesfalegnp/Neuro_sysmbolic-ai-agent-for-coffee-expert',
    featured: true
  },
  {
    id: 'campus-meal-card-system',
    title: 'Digital Campus Meal Card Verification System',
    shortDescription: 'Full-stack campus cafeteria verification suite comprising mobile verification app, backend service, and administrative management dashboard.',
    category: 'fullstack',
    typeLabel: 'Open Source',
    context: 'University cafeterias serving thousands of students daily require rapid, secure verification to prevent meal ticket fraud.',
    problem: 'Paper meal tickets cause long queuing bottlenecks and allow unauthorized cafeteria access.',
    approach: 'Built a full digital ecosystem with student mobile identity apps, scanner verification interfaces, and backend entitlement databases.',
    architectureSteps: [
      { label: 'Student Mobile App', description: 'Secure digital identity token display.' },
      { label: 'Cafeteria Scanner', description: 'Sub-second QR entitlement verification.' },
      { label: 'Backend Ledger', description: 'Real-time meal log verification & anti-passback rules.' }
    ],
    keyFeatures: [
      'Real-Time Student Entitlement Verification',
      'Cross-Platform Mobile App (TypeScript & React Native/Flutter)',
      'Node.js REST API Backend with PostgreSQL Data Store',
      'Campus Administrative Control Dashboard'
    ],
    technologies: ['TypeScript', 'React Native', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    githubUrl: 'https://github.com/Tesfalegnp/Meal-Card-Control-Digital-System',
    featured: true
  }
];
