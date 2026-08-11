import { GitHubRepo, GitHubCache } from '../../types/github';

const GITHUB_USERNAME = 'Tesfalegnp';
const CACHE_KEY = 'tesfalegn_github_repos_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function fetchGitHubRepositories(): Promise<{ repos: GitHubRepo[]; isCached: boolean; error?: string }> {
  // 1. Try local storage cache first
  try {
    const cachedItem = localStorage.getItem(CACHE_KEY);
    if (cachedItem) {
      const parsed: GitHubCache = JSON.parse(cachedItem);
      const isExpired = Date.now() - parsed.timestamp > CACHE_TTL_MS;
      if (!isExpired && Array.isArray(parsed.data) && parsed.data.length > 0) {
        return { repos: parsed.data, isCached: true };
      }
    }
  } catch (e) {
    console.warn('LocalStorage read warning:', e);
  }

  // 2. Fetch from GitHub REST API
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        // Rate limit exceeded
        const cachedFallback = getCachedFallback();
        if (cachedFallback.length > 0) {
          return { repos: cachedFallback, isCached: true, error: 'GitHub API rate limit reached. Displaying cached repositories.' };
        }
        return { repos: [], isCached: false, error: 'GitHub API rate limit reached. Please visit GitHub directly.' };
      }
      throw new Error(`GitHub API HTTP ${response.status}`);
    }

    const data: GitHubRepo[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid response structure from GitHub API');
    }

    // Save to cache
    try {
      const cacheObj: GitHubCache = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObj));
    } catch (e) {
      console.warn('LocalStorage write warning:', e);
    }

    return { repos: data, isCached: false };
  } catch (err: any) {
    console.error('Error fetching GitHub repos:', err);
    const cachedFallback = getCachedFallback();
    if (cachedFallback.length > 0) {
      return {
        repos: cachedFallback,
        isCached: true,
        error: 'Unable to reach GitHub API live. Displaying cached repositories.',
      };
    }
    return {
      repos: [],
      isCached: false,
      error: 'Unable to connect to GitHub API.',
    };
  }
}

function getCachedFallback(): GitHubRepo[] {
  try {
    const cachedItem = localStorage.getItem(CACHE_KEY);
    if (cachedItem) {
      const parsed: GitHubCache = JSON.parse(cachedItem);
      if (Array.isArray(parsed.data)) {
        return parsed.data;
      }
    }
  } catch (e) {
    // Ignore error
  }
  return [];
}
