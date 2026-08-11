import { Layers, Bot, Database, Workflow, ShieldCheck, Cpu } from 'lucide-react';

export default function EngineeringDna() {
  const dnaPillars = [
    {
      icon: Layers,
      title: 'Domain-Driven Architecture',
      subtitle: 'Explicit Domain Boundaries & Modular Monoliths',
      description: 'Designing systems with clean separation of concerns, strict domain contexts, and structured API contracts before writing code.',
      highlights: ['Domain-Driven Design (DDD)', 'Modular Monoliths', 'Strict API Contracts']
    },
    {
      icon: Bot,
      title: 'Neuro-Symbolic & GraphRAG',
      subtitle: 'Hybrid AI & Structured Knowledge Retrieval',
      description: 'Combining symbolic logic engines (MeTTa/OpenCog) and entity-relationship knowledge graphs with neural LLM vector search pipelines.',
      highlights: ['GraphRAG Traversal', 'MeTTa Symbolic Logic', 'Dense Vector Search']
    },
    {
      icon: Database,
      title: 'Transactional Integrity',
      subtitle: 'Append-Only Ledgers & Financial Consistency',
      description: 'Engineering append-only double-entry stock ledgers for inventory platforms (Hemin ERP) to guarantee absolute data auditing and zero stock drift.',
      highlights: ['Double-Entry Stock Ledgers', 'Moving Average Cost (MAC)', 'PostgreSQL Relational Safety']
    },
    {
      icon: Workflow,
      title: 'Event-Driven Automation',
      subtitle: 'API Orchestration & Workflow Pipelines',
      description: 'Streamlining complex operational workflows using n8n, asynchronous job queues (Redis), and event-driven webhook notifications.',
      highlights: ['n8n Workflow Engines', 'Async Redis Queues', 'Webhook Integration']
    },
    {
      icon: Cpu,
      title: 'On-Device AI & Offline-First',
      subtitle: 'Edge Machine Learning & Cloud Sync',
      description: 'Quantizing neural vision models for sub-150ms on-device mobile inference (CoffeeGuard AI) with background cloud database synchronization.',
      highlights: ['TensorFlow Lite Quantization', 'Sub-150ms Offline Inference', 'Supabase Realtime Sync']
    },
    {
      icon: ShieldCheck,
      title: 'Production Engineering',
      subtitle: 'Containerization & CI/CD Pipelines',
      description: 'Building automated GitHub Actions pipelines, Docker containerization, and static SPA deployment configurations for high-availability delivery.',
      highlights: ['Docker Multi-Stage Builds', 'GitHub Actions CI/CD', 'Production SPA Deployments']
    }
  ];

  return (
    <section id="dna" className="py-20 bg-[#0d1322] border-y border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            I Don't Only Build Interfaces. <span className="text-gradient">I Design Systems.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Bridging complex symbolic research, deterministic backend architectures, and high-performance user experiences across the entire software stack.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dnaPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{pillar.title}</h3>
                    <div className="text-xs font-mono text-purple-400 mt-0.5">{pillar.subtitle}</div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {pillar.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-900/80 text-purple-300/90 text-xs font-mono border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
