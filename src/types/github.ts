export interface GitHubRepoOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  archived: boolean;
  fork: boolean;
  owner: GitHubRepoOwner;
}

export interface GitHubCache {
  data: GitHubRepo[];
  timestamp: number;
}

export type RepoSortOption = 'updated' | 'stars' | 'name';
