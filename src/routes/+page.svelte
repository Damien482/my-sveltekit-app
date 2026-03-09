<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="page">
	<div class="homepage-column">
		<header class="home-header">
			<h1>DamPer.dev</h1>
			<p class="lead">Learning by doing..and also studying at The OU</p>
		</header>

		<div class="list">
			<article class="card">
				<div class="card-top">
					<a class="btn primary" href={resolve('/projects')}>View projects</a>
					<a class="btn" href={resolve('/contact')}>Contact</a>
				</div>
			</article>
		</div>
	</div>
</section>

<style>
	.page {
		padding: 2.5rem 0 3.5rem;
	}

	.homepage-column {
		max-width: 720px;
		margin: 0 auto;
		transform: translateX(clamp(-2rem, -4vw, 0rem));
		padding: 2rem;
	}

	.home-header {
		margin-bottom: 1.75rem;
	}

	h1 {
		margin: 0 0 0.5rem;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.1;
		color: rgb(65, 63, 63);
	}

	.lead {
		margin: 0;
		color: rgb(126, 123, 123);
		max-width: 60ch;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		border-radius: 16px;
		padding: 1.25rem;
		width: 100%;
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.7rem 1rem;
		border-radius: 12px;
		border: 1px solid var(--border);
		background: rgba(255, 255, 255, 0.04);
		text-decoration: none;
	}

	.btn.primary {
		background: var(--accent);
		border-color: transparent;
		color: white;
	}
</style>