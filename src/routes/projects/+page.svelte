<script lang="ts">
	type Project = {
		title: string;
		href: string; // external URL
		description: string;
	};

	const projects: Project[] = [
		{
			title: 'Productivity and Wellness Assistant',
			href: 'https://chromewebstore.google.com/detail/productivity-and-wellness/lpknnilelloaejcbemodkihlpmkaocni?authuser=2&hl=en',
			description:
	                    'The Productivity and Wellness Assistant helps you stay on top of your wellness goals while improving your mental acuity—all from the comfort of your browser. ' +
	                    'Designed for individuals looking to maintain a balanced routine, this simple yet powerful tool reminds you to hydrate, ' +
                        'stretch, and engage in math exercises to stimulate your mind during work or study sessions.'
		},
	];
</script>

<section class="page">
	<div class="projects-column">
		<header class="page-header">
			<h1>Projects</h1>
			<p class="lead">A few things I’ve built while learning.</p>
		</header>

		<div class="list">
			{#each projects as project (project.title)}
				<article class="card">
					<div class="card-top">
						<h2 class="title">{project.title}</h2>

						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a class="link" href={project.href} target="_blank" rel="noreferrer">
							View project
						</a>
					</div>

					<p class="desc">{project.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>

	.page {
		padding: 2.5rem 0 3.5rem;
	}

	.page-header {
		margin-bottom: 1.75rem;
	}

	h1 {
		margin: 0 0 0.5rem;
		font-size: clamp(2rem, 3.5vw, 3rem);
		letter-spacing: -0.02em;
	}

	.lead {
		margin: 0;
		color: var(--muted);
		max-width: 60ch;
	}

  	.projects-column {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1rem; /* keeps content away from edges on mobile */
		/* transform: translateX(clamp(-2rem, -4vw, 0rem)); */
	}

    .list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
    }

	.card {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		padding: 1.25rem;
        width: 100%;
	}

	.card-top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.title {
		margin: 0;
		font-size: 1.1rem;
	}

	.link {
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	}

	.link:hover {
		border-bottom-color: rgba(124, 58, 237, 0.8);
	}

	.desc {
		margin: 0.75rem 0 0;
		color: var(--muted);
		line-height: 1.55;
	}

	

	
</style>