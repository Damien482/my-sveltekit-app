<script lang="ts">

</script>

<section class="hero">
	<p class="eyebrow">Portfolio-in-progress</p>
	<h1>DamPer.dev</h1>
	<p class="lead">Learning by doing..and also studying at The OU</p>

	<div class="actions">
		<a class="btn primary" href="/projects">View projects</a>
		<a class="btn" href="/about">About</a>
	</div>
</section>

<style>
	.hero {
		padding: 2.25rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--panel);
		box-shadow: var(--shadow);
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		color: var(--muted);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-size: 0.8rem;
	}

	h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.1;
	}

	.lead {
		margin: 0 0 1.5rem;
		color: var(--muted);
		max-width: 65ch;
	}

	.actions {
		display: flex;
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