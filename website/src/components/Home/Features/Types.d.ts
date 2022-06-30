import type { ReactNode } from 'react';

export interface FeatureItem {
	title: string;
	description: ReactNode;
}

export interface NpmData {
	start: string;
	end: string;
	package: string;
	downloads: Array<{
		downloads: number;
		day: string;
	}>;
}

export interface RepoData {
	forks_count: number;
	stargazers_count: number;
}

export interface ContributorsData {
	avatar_url: string;
	contributions: number;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	site_admin: false;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
}
