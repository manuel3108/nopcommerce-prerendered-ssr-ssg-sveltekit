<script>
	import '../app.postcss';
	import Navbar from '../lib/Navbar.svelte';

	export let data;

	const { categoriesInfo } = data;
</script>

<Navbar>
	{#each categoriesInfo as { slug, name, subcategories }}
		<div>
			<a
				href="/category/{slug}"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
			>
				{name}
			</a>

			<div>
				{#each subcategories as { slug, name }}
					<a
						href="/category/{slug}"
						class="block mt-4 lg:mt-0 text-teal-200 hover:text-white mr-4 ml-4"
					>
						{name}
					</a>
				{/each}
			</div>
		</div>
	{/each}
</Navbar>

<main>
	<slot />
</main>

<style>
	main {
		margin: 1rem 3rem;
	}
</style>
