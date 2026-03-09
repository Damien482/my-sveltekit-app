<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let { children } = $props();

	const nav = [
		{ href: '/', label: 'Home', codeLabel: 'home' },
		{ href: '/projects', label: 'Projects', codeLabel: 'projects' },
		{ href: '/hobbies', label: 'Hobbies', codeLabel: 'hobbies' },
		{ href: '/contact', label: 'Contact', codeLabel: 'contact' }
	] as const;

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path === href || path.startsWith(href + '/');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	<header class="header">
		<div class="container header-inner">
			<a class="brand" href={resolve('/')}>DamPer.dev</a>

			<nav class="nav" aria-label="Primary">
				{#each nav as item (item.href)}
					<a
						class="nav-link"
						class:active={isActive(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}
						aria-label={item.label}
						href={resolve(item.href)}
					>
						<span class="nav-code" aria-hidden="true">//:</span>
						<span class="nav-label">{item.codeLabel}</span>
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main class="main">
		{@render children()}
	</main>

	<footer class="footer">
		<div class="container">
			<p>© {new Date().getFullYear()} DamPer.dev</p>
		</div>
	</footer>
</div>

<style>
	:global(:root) {
		--bg: #0b1220;
		--panel: rgba(255, 255, 255, 0.06);
		--text: rgba(255, 255, 255, 0.92);
		--muted: rgba(255, 255, 255, 0.72);
		--border: rgba(255, 255, 255, 0.12);
		--accent: #7c3aed;

		--radius: 16px;
		--shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
	}

	:global(html, body) {
		height: 100%;
		margin: 0;
	}

	:global(body) {
		font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
		background:
			/* radial-gradient(1200px 700px at 20% 10%, rgba(124, 58, 237, 0.25), transparent 55%), */
			/* radial-gradient(1000px 600px at 90% 30%, rgba(59, 130, 246, 0.18), transparent 55%), */
			var(--bg);
		color: var(--text);
	}

	:global(a) {
		color: inherit;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 10;
		backdrop-filter: blur(10px);
		background: rgba(11, 18, 32, 0.65);
		border-bottom: 1px solid var(--border);
	}

	.header-inner {
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.brand {
		text-decoration: none;
		font-weight: 700;
		letter-spacing: 0.2px;
	}

	.nav {
		display: flex;
		gap: 0.9rem;
	}

	.nav-link {
		text-decoration: none;
		color: var(--muted);

		display: inline-flex;
		align-items: center;
		justify-content: center;

		height: 34px;
		padding: 0 0.75rem;
		border-radius: 10px;

		box-sizing: border-box;
		line-height: 1;
		border: 1px solid transparent; /* keeps sizing consistent */
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
			monospace;
		letter-spacing: 0.1px;
	}

	.nav-code {
		color: rgba(255, 255, 255, 0.42);
		margin-right: 0.15rem;
	}

	.nav-link:hover .nav-code,
	.nav-link.active .nav-code {
		color: rgba(255, 255, 255, 0.7);
	}

	.nav-link.active .nav-code,
	.nav-link.active .nav-label {
		display: inline-block;
		transform: translateY(-1.4px);
	}

	.nav-link.active .nav-label::after {
		content: '▍';
		margin-left: 0.15rem;
		opacity: 0.85;
		animation: caret 1.1s steps(1, end) infinite;
	}

	@keyframes caret {
		50% { opacity: 0; }
	}

	.main {
		flex: 1;
	}

	.footer {
		border-top: 1px solid var(--border);
		padding: 2rem 0;
		color: var(--muted);
	}
</style>