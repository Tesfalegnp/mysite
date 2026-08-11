import { Skill } from '../types';

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React', domain: 'frontend', tier: 'core', description: 'Component architecture, Hooks, State management, Custom hooks' },
  { name: 'TypeScript', domain: 'frontend', tier: 'core', description: 'Strict typing, Generics, Interface design, API contracts' },
  { name: 'JavaScript (ES6+)', domain: 'frontend', tier: 'core', description: 'Async/Await, Closures, DOM manipulation, Performance' },
  { name: 'Vite', domain: 'frontend', tier: 'applied', description: 'Modern build toolchain, HMR, Module bundling' },
  { name: 'Tailwind CSS', domain: 'frontend', tier: 'core', description: 'Utility-first design systems, Custom configurations, Responsive layouts' },
  { name: 'HTML5 & CSS3', domain: 'frontend', tier: 'core', description: 'Semantic markup, Flexbox, Grid, CSS Animations, Accessibility' },

  // Backend
  { name: 'Node.js', domain: 'backend', tier: 'core', description: 'Event loop, Asynchronous I/O, Enterprise microservices' },
  { name: 'Express.js', domain: 'backend', tier: 'core', description: 'RESTful API routing, Middleware architecture, Auth flows' },
  { name: 'Python', domain: 'backend', tier: 'core', description: 'AI pipelines, Data manipulation, FastAPI, Async processing' },
  { name: 'FastAPI', domain: 'backend', tier: 'core', description: 'High-performance async APIs, Pydantic validation, OpenAPI docs' },
  { name: 'RESTful APIs', domain: 'backend', tier: 'core', description: 'API contract design, Versioning, Rate limiting, Error handling' },

  // Mobile
  { name: 'Flutter', domain: 'mobile', tier: 'applied', description: 'Cross-platform mobile applications, Widget composition' },
  { name: 'React Native', domain: 'mobile', tier: 'applied', description: 'Mobile UI components, Native module bridges' },
  { name: 'Dart', domain: 'mobile', tier: 'applied', description: 'Strongly typed object-oriented mobile code' },
  { name: 'TensorFlow Lite', domain: 'mobile', tier: 'applied', description: 'On-device neural model quantization and offline inference' },

  // Database & Cache
  { name: 'PostgreSQL', domain: 'database', tier: 'core', description: 'Relational schema design, Indexing, Complex joins, Double-entry ledgers' },
  { name: 'Supabase', domain: 'database', tier: 'applied', description: 'Postgres BaaS, Realtime subscriptions, Auth, Storage' },
  { name: 'Redis', domain: 'database', tier: 'applied', description: 'In-memory caching, Pub/Sub, Rate limiting, Session stores' },
  { name: 'Prisma ORM', domain: 'database', tier: 'core', description: 'Schema migrations, Type-safe database queries' },
  { name: 'MongoDB', domain: 'database', tier: 'supporting', description: 'Document stores, NoSQL schema design' },

  // AI & LLM
  { name: 'RAG Pipelines & GraphRAG', domain: 'ai-llm', tier: 'core', description: 'Dense vector search, Knowledge Graph entity retrieval, Context synthesis' },
  { name: 'LLM Integration', domain: 'ai-llm', tier: 'core', description: 'OpenAI API, Anthropic, HuggingFace Transformers, LangChain' },
  { name: 'AI Agents & Tool Use', domain: 'ai-llm', tier: 'applied', description: 'Multi-step agentic workflows, Tool calling, Output validation' },
  { name: 'Vector Search & Embeddings', domain: 'ai-llm', tier: 'core', description: 'Cosine similarity, Dense embeddings, Semantic indexing' },
  { name: 'MeTTa & Cognitive AI', domain: 'ai-llm', tier: 'applied', description: 'Neuro-symbolic reasoning, OpenCog Hyperon, Logic-based AI' },

  // Automation
  { name: 'n8n', domain: 'automation', tier: 'applied', description: 'Workflow automation, Webhook integration, API orchestrations' },
  { name: 'API Automation', domain: 'automation', tier: 'core', description: 'Event-driven triggers, Data transformation, Task scheduling' },

  // DevOps & Tools
  { name: 'Git & GitHub', domain: 'devops', tier: 'core', description: 'Version control, Feature branching, Code reviews, Actions CI/CD' },
  { name: 'Docker', domain: 'devops', tier: 'applied', description: 'Containerization, Dockerfile optimizations, Multi-stage builds' },
  { name: 'Linux / Bash', domain: 'devops', tier: 'core', description: 'Shell scripting, Server administration, System configuration' }
];
