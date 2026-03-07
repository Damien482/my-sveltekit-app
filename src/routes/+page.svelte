<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="hero">
	<div class="container hero-inner">
		<p class="eyebrow">Portfolio-in-progress</p>
		<h1>DamPer.dev</h1>
		<p class="lead">Learning by doing..and also studying at The OU</p>

		<div class="actions">
			<a class="btn primary" href={resolve('/projects')}>View projects</a>
			<a class="btn" href={resolve('/about')}>About</a>
		</div>
	</div>
</section>

<style>

	.hero-inner {
		transform: translateX(736px);	
	}
	.hero {
	/* if you want the grey band to still go full width */
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-left: 0;
	border-right: 0;

	padding: 3.5rem 0; /* vertical spacing */
	.hero-inner {
	 padding: 2rem; 
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
}</style>