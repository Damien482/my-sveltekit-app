<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	let loading = false;
	let success = false;
	let error: string | null = null;

	async function submit() {
		loading = true;
		success = false;
		error = null;

		try {
			const body = new FormData();
			body.set('name', name);
			body.set('email', email);
			body.set('message', message);
			body.set('company', ''); // honeypot

			const res = await fetch('/api/contact', { method: 'POST', body });
			const data = await res.json();

			if (!res.ok || !data?.ok) {
				error = data?.error ?? 'Something went wrong.';
				return;
			}

			success = true;
			name = '';
			email = '';
			message = '';
		} catch {
			error = 'Network error. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<section class="page">
	<h1>Contact</h1>

	<form class="form" on:submit|preventDefault={submit}>
		<div class="hp" aria-hidden="true">
			<label>
				Company
				<input name="company" tabindex="-1" autocomplete="off" />
			</label>
		</div>

		<label>
			Name
			<input bind:value={name} name="name" required />
		</label>

		<label>
			Email
			<input bind:value={email} name="email" type="email" required />
		</label>

		<label>
			Message
			<textarea bind:value={message} name="message" rows="6" required></textarea>
		</label>

		<button type="submit" disabled={loading}>
			{loading ? 'Sending…' : 'Send'}
		</button>

		{#if success}
			<p class="success">Thanks — I’ll get back to you soon.</p>
		{/if}
		{#if error}
			<p class="error">{error}</p>
		{/if}
	</form>
</section>

<style>
	.hp {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.form {
		display: grid;
		gap: 1rem;
		max-width: 720px;
	}
	.success {
		color: #2d7a2d;
	}
	.error {
		color: #b00020;
	}
</style>