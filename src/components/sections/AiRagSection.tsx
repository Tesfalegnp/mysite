import { Bot, Network, Cpu, ArrowRight, Zap, Code, ShieldCheck } from 'lucide-react';

export default function AiRagSection() {
  const aiPipeline = [
    {
      step: '01',
      title: 'LLM Integration',
      desc: 'Prompt engineering, OpenAI API, Anthropic, and HuggingFace transformer integration.',
      tech: 'OpenAI API • LangChain • HuggingFace'
    },
    {
      step: '02',
      title: 'Dense Vector RAG',
      desc: 'Retrieval Augmented Generation using dense embeddings & cosine similarity indexing.',
      tech: 'Vector Databases • Dense Embeddings • Cosine Similarity'
    },
    {
      step: '03',
      title: 'GraphRAG System',
      desc: 'Entity-relationship knowledge graphs combined with dense vector retrieval for multi-hop queries.',
      tech: 'Graph Triples • NetworkX • Hybrid Retrieval'
    },
    {
      step: '04',
      title: 'Neuro-Symbolic Agents',
      desc: 'Coupling symbolic logic rules (MeTTa/OpenCog) with neural language models for explainable reasoning.',
      tech: 'MeTTa Hyperon • Atomese Logic • Tool Calling'
    },
    {
      step: '05',
      title: 'Workflow Automation',
      desc: 'Event-driven triggers, n8n workflows, Redis queues, and on-device mobile AI (TFLite).',
      tech: 'n8n Workflows • TensorFlow Lite • FastAPI'
    }
  ];

  return (
    <section id="airag" className="py-20 bg-[#0b0f19] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Bot className="w-3.5 h-3.5" />
            <span>SPECIALIZED AI SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Building <span className="text-gradient">Intelligent Software</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From basic LLM wrappers to GraphRAG retrieval systems, neuro-symbolic logic engines, and on-device mobile neural inference.
          </p>
        </div>

        {/* AI Engineering Pipeline */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-100">The AI Capability Progression</h3>
            <p className="text-xs font-mono text-purple-400 mt-1">Moving beyond simple CRUD into intelligent systems</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {aiPipeline.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-purple-400">{item.step}</span>
                    {idx < 4 && <ArrowRight className="hidden lg:block w-4 h-4 text-slate-600" />}
                  </div>
                  <h4 className="text-base font-bold text-slate-100">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-purple-300">
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Spotlight: GraphRAG Architecture Visualizer */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800/80 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white">GraphRAG System Architecture</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Knowledge-Graph Augmented Retrieval for Multi-Hop LLM Queries
              </p>
            </div>
            <a
              href="https://github.com/Tesfalegnp/GraphRAG-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-mono border border-purple-700/60 transition-all"
            >
              <Code className="w-4 h-4" />
              <span>Inspect Repository →</span>
            </a>
          </div>

          {/* Flow Diagram Cards */}
          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-purple-400">INPUT STAGE</div>
              <h4 className="text-sm font-bold text-slate-200">Raw Unstructured Text</h4>
              <p className="text-xs text-slate-400">PDFs, documentation, & research papers ingested and chunked.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-purple-400">GRAPH EXTRACTION</div>
              <h4 className="text-sm font-bold text-slate-200">Entity & Relation Extraction</h4>
              <p className="text-xs text-slate-400">Building knowledge graph triples + dense node vector embeddings.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-purple-400">DUAL RETRIEVAL</div>
              <h4 className="text-sm font-bold text-slate-200">Vector + Graph Search</h4>
              <p className="text-xs text-slate-400">Traversing relation paths alongside dense cosine similarity.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/40 space-y-2 bg-purple-950/30">
              <div className="text-xs font-mono text-cyan-400">SYNTHESIS</div>
              <h4 className="text-sm font-bold text-slate-100">LLM Response Generation</h4>
              <p className="text-xs text-slate-300">Context-rich, hallucination-resistant answer with traceable graph provenance.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#070a12] border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verifiable Entity Provenance</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>FastAPI Microservice Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>React & TypeScript Interface</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
