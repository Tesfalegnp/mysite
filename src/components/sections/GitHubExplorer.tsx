import { Search, Star, GitFork, ExternalLink, Github, RefreshCw, AlertCircle } from 'lucide-react';
import { useGitHubRepositories } from '../../hooks/useGitHubRepositories';

export default function GitHubExplorer() {
  const {
    repos,
    totalCount,
    filteredCount,
    loading,
    error,
    isCached,
    availableLanguages,
    searchQuery,
    setSearchQuery,
    selectedLanguage,
    setSelectedLanguage,
    sortBy,
    setSortBy,
    includeForks,
    setIncludeForks,
    refresh,
  } = useGitHubRepositories();

  return (
    <section id="github-repos" className="py-20 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
              <Github className="w-3.5 h-3.5" />
              <span>LIVE GITHUB SYNC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Public Repository <span className="text-gradient">Explorer</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Dynamically retrieved from my public GitHub profile. Explore {totalCount} open-source repositories, experiments, and projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refresh}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <a
              href="https://github.com/Tesfalegnp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-950 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>Visit @Tesfalegnp</span>
            </a>
          </div>
        </div>

        {/* Error / Cache Banner (If present) */}
        {error && (
          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200 text-xs font-mono flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{error}</span>
            </div>
            <a
              href="https://github.com/Tesfalegnp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white shrink-0"
            >
              Open GitHub Directly
            </a>
          </div>
        )}

        {/* Control Toolbar: Search, Language Filter, Sort */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800 space-y-4">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search repositories by name, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080d19] border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Sort Options */}
            <div className="md:col-span-3 flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500 shrink-0">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#080d19] border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-purple-500"
              >
                <option value="updated">Recently Updated</option>
                <option value="stars">Most Stars</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>

            {/* Forks Toggle */}
            <div className="md:col-span-3 flex items-center justify-end">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-400">
                <input
                  type="checkbox"
                  checked={includeForks}
                  onChange={(e) => setIncludeForks(e.target.checked)}
                  className="rounded bg-slate-900 border-slate-800 text-purple-600 focus:ring-purple-500"
                />
                <span>Include Forked Repos</span>
              </label>
            </div>

          </div>

          {/* Language Filter Pills */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-500 mr-2">LANGUAGE:</span>
            <button
              onClick={() => setSelectedLanguage('all')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedLanguage === 'all'
                  ? 'bg-purple-600 text-white font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              All
            </button>
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedLanguage === lang
                    ? 'bg-purple-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>Showing {filteredCount} of {totalCount} repositories</span>
          {isCached && <span className="text-purple-400">Cached sync active</span>}
        </div>

        {/* Repositories Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card rounded-xl p-6 space-y-4 animate-pulse">
                <div className="h-5 bg-slate-800 rounded w-3/4"></div>
                <div className="h-4 bg-slate-800/60 rounded w-full"></div>
                <div className="h-4 bg-slate-800/60 rounded w-2/3"></div>
                <div className="h-8 bg-slate-800/40 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : repos.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center space-y-3">
            <Github className="w-10 h-10 text-slate-600 mx-auto" />
            <div className="text-base font-bold text-white">No repositories match your criteria</div>
            <p className="text-xs text-slate-400">Try adjusting your search query or language filter.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 shrink-0 transition-colors" />
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 min-h-[2.25rem]">
                    {repo.description || 'No description provided.'}
                  </p>

                  {/* Topics Pills if available */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 text-[10px] font-mono border border-purple-900/60">
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Metrics */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1 text-purple-400">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        <span>{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>

                  <div className="text-[10px] text-slate-500">
                    {repo.pushed_at ? new Date(repo.pushed_at).toLocaleDateString() : ''}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
