import { useState, useEffect, useMemo } from 'react';
import { GitHubRepo, RepoSortOption } from '../types/github';
import { fetchGitHubRepositories } from '../services/github/github.service';

export function useGitHubRepositories() {
  const [allRepos, setAllRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCached, setIsCached] = useState<boolean>(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<RepoSortOption>('updated');
  const [includeForks, setIncludeForks] = useState<boolean>(false);

  const loadRepos = async () => {
    setLoading(true);
    setError(null);
    const result = await fetchGitHubRepositories();
    setAllRepos(result.repos);
    setIsCached(result.isCached);
    if (result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  // Compute unique languages present in repos
  const availableLanguages = useMemo(() => {
    const languages = new Set<string>();
    allRepos.forEach((repo) => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    return Array.from(languages).sort();
  }, [allRepos]);

  // Compute filtered & sorted repositories
  const filteredRepos = useMemo(() => {
    return allRepos
      .filter((repo) => {
        // Exclude forks unless explicitly allowed
        if (!includeForks && repo.fork) {
          return false;
        }

        // Search query check (name or description)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const nameMatch = repo.name.toLowerCase().includes(q);
          const descMatch = repo.description?.toLowerCase().includes(q) ?? false;
          const topicMatch = repo.topics?.some((t) => t.toLowerCase().includes(q)) ?? false;
          if (!nameMatch && !descMatch && !topicMatch) {
            return false;
          }
        }

        // Language check
        if (selectedLanguage !== 'all' && repo.language !== selectedLanguage) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'updated') {
          return new Date(b.pushed_at || b.updated_at).getTime() - new Date(a.pushed_at || a.updated_at).getTime();
        }
        if (sortBy === 'stars') {
          return b.stargazers_count - a.stargazers_count;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [allRepos, searchQuery, selectedLanguage, sortBy, includeForks]);

  return {
    repos: filteredRepos,
    totalCount: allRepos.length,
    filteredCount: filteredRepos.length,
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
    refresh: loadRepos,
  };
}
